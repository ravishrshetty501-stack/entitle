package com.entitle.web;

import com.entitle.config.DataSeeder;
import com.entitle.config.SessionAuthFilter;
import com.entitle.model.User;
import com.entitle.model.UserSession;
import com.entitle.repo.UserRepository;
import com.entitle.repo.UserSessionRepository;
import com.entitle.service.ApiException;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClient;

import java.time.Duration;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepository users;
    private final UserSessionRepository sessions;
    private final DataSeeder dataSeeder;

    @Value("${entitle.auth.session-data-url:}")
    private String sessionDataUrl;

    @PostMapping("/demo")
    public ResponseEntity<User> demoLogin(@RequestBody Map<String, String> body, HttpServletResponse response) {
        String persona = body.get("persona");
        if (persona == null || persona.isBlank()) {
            throw ApiException.bad("Persona required");
        }
        String userId = "demo_" + persona.trim();
        User u = users.findById(userId).orElse(null);
        if (u == null) {
            try {
                dataSeeder.ensurePersonas();
            } catch (Exception e) {
                log.warn("Failed re-seeding personas: {}", e.getMessage());
            }
            u = users.findById(userId).orElse(null);
        }
        if (u == null) {
            throw ApiException.notFound("Demo persona " + persona);
        }

        String token = UUID.randomUUID().toString();
        UserSession s = new UserSession();
        s.setToken(token);
        s.setUserId(u.getId());
        s.setCreatedAt(Instant.now());
        s.setExpiresAt(Instant.now().plus(7, ChronoUnit.DAYS));
        sessions.save(s);

        ResponseCookie cookie = ResponseCookie.from("session_token", token)
                .path("/")
                .maxAge(Duration.ofDays(7))
                .httpOnly(true)
                .sameSite("Lax")
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());

        return ResponseEntity.ok(u);
    }

    @PostMapping("/session")
    public ResponseEntity<User> sessionLogin(@RequestBody Map<String, String> body, HttpServletResponse response) {
        String sessionId = body.get("session_id");
        if (sessionId == null || sessionId.isBlank()) {
            throw ApiException.bad("session_id required");
        }

        String email = null;
        String name = null;
        String picture = null;

        if (sessionDataUrl != null && !sessionDataUrl.isBlank()) {
            try {
                JsonNode res = RestClient.create().get()
                        .uri(sessionDataUrl + "?session_id=" + sessionId)
                        .retrieve().body(JsonNode.class);
                if (res != null) {
                    email = res.path("email").asText(null);
                    name = res.path("name").asText(null);
                    picture = res.path("picture").asText(null);
                }
            } catch (Exception e) {
                log.warn("Emergent auth exchange failed: {}", e.getMessage());
            }
        }

        if (email == null) {
            email = "user_" + sessionId.substring(0, Math.min(8, sessionId.length())) + "@entitle.user";
            name = "User";
        }

        final String userEmail = email;
        final String userName = name;
        final String userPic = picture;

        User u = users.findByEmail(userEmail).orElseGet(() -> {
            User nu = new User();
            nu.setId("usr_" + UUID.randomUUID().toString().replace("-", "").substring(0, 16));
            nu.setEmail(userEmail);
            nu.setName(userName);
            nu.setPicture(userPic);
            nu.setCreatedAt(Instant.now());
            return users.save(nu);
        });

        String token = UUID.randomUUID().toString();
        UserSession s = new UserSession();
        s.setToken(token);
        s.setUserId(u.getId());
        s.setCreatedAt(Instant.now());
        s.setExpiresAt(Instant.now().plus(7, ChronoUnit.DAYS));
        sessions.save(s);

        ResponseCookie cookie = ResponseCookie.from("session_token", token)
                .path("/")
                .maxAge(Duration.ofDays(7))
                .httpOnly(true)
                .sameSite("Lax")
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());

        return ResponseEntity.ok(u);
    }

    @GetMapping("/me")
    public ResponseEntity<User> me(@AuthenticationPrincipal User user) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        return ResponseEntity.ok(user);
    }

    @PostMapping("/logout")
    public ResponseEntity<Map<String, Object>> logout(HttpServletRequest req, HttpServletResponse res) {
        String token = SessionAuthFilter.extractToken(req);
        if (token != null) {
            sessions.deleteById(token);
        }
        ResponseCookie cookie = ResponseCookie.from("session_token", "")
                .path("/")
                .maxAge(0)
                .httpOnly(true)
                .sameSite("Lax")
                .build();
        res.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
        return ResponseEntity.ok(Map.of("status", "ok"));
    }
}

