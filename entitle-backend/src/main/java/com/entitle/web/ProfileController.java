package com.entitle.web;

import com.entitle.model.User;
import com.entitle.model.UserProfile;
import com.entitle.repo.*;
import com.entitle.service.ApiException;
import com.entitle.service.Json;
import com.entitle.service.SchemeService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/profile")
@RequiredArgsConstructor
public class ProfileController {
    private final UserProfileRepository userProfiles;
    private final UserRepository users;
    private final SchemeService schemeService;
    private final ApplicationRepository applications;
    private final ChatMessageRepository chats;
    private final ChecklistProgressRepository checklists;
    private final EligibilityAssessmentRepository assessments;
    private final NotificationRepository notifications;
    private final SavedSchemeRepository savedSchemes;
    private final UserSessionRepository sessions;
    private final Json json;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getProfile(@AuthenticationPrincipal User user) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        UserProfile p = schemeService.profileOf(user.getId());
        Map<String, Object> res = new LinkedHashMap<>();
        res.put("profile", p);
        res.put("completion", p.completion());
        return ResponseEntity.ok(res);
    }

    @PutMapping
    public ResponseEntity<Map<String, Object>> updateProfile(
            @AuthenticationPrincipal User user,
            @Valid @RequestBody UserProfile updates) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        UserProfile existing = schemeService.profileOf(user.getId());
        updates.setUserId(user.getId());
        if (updates.getNotifyProfile() == null) updates.setNotifyProfile(existing.getNotifyProfile());
        if (updates.getNotifyDocuments() == null) updates.setNotifyDocuments(existing.getNotifyDocuments());
        if (updates.getNotifyDeadlines() == null) updates.setNotifyDeadlines(existing.getNotifyDeadlines());
        if (updates.getNotifyTracker() == null) updates.setNotifyTracker(existing.getNotifyTracker());
        updates.setUpdatedAt(Instant.now());
        UserProfile saved = userProfiles.save(updates);

        Map<String, Object> res = new LinkedHashMap<>();
        res.put("profile", saved);
        res.put("completion", saved.completion());
        return ResponseEntity.ok(res);
    }

    @PostMapping("/assessment")
    public ResponseEntity<Map<String, Object>> assessProfile(
            @AuthenticationPrincipal User user,
            @RequestBody(required = false) Map<String, Object> body) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        if (body != null && !body.isEmpty()) {
            try {
                UserProfile p = json.mapper().convertValue(body, UserProfile.class);
                UserProfile existing = schemeService.profileOf(user.getId());
                p.setUserId(user.getId());
                if (p.getDisplayName() == null) p.setDisplayName(existing.getDisplayName());
                if (p.getNotifyProfile() == null) p.setNotifyProfile(existing.getNotifyProfile());
                if (p.getNotifyDocuments() == null) p.setNotifyDocuments(existing.getNotifyDocuments());
                if (p.getNotifyDeadlines() == null) p.setNotifyDeadlines(existing.getNotifyDeadlines());
                if (p.getNotifyTracker() == null) p.setNotifyTracker(existing.getNotifyTracker());
                p.setUpdatedAt(Instant.now());
                userProfiles.save(p);
            } catch (Exception ignored) {
            }
        }
        List<Map<String, Object>> results = schemeService.assessAndStore(user.getId());
        UserProfile p = schemeService.profileOf(user.getId());

        Map<String, Object> res = new LinkedHashMap<>();
        res.put("results", results);
        res.put("completion", p.completion());
        return ResponseEntity.ok(res);
    }

    @DeleteMapping("/account")
    @Transactional
    public ResponseEntity<Map<String, Object>> deleteAccount(
            @AuthenticationPrincipal User user,
            HttpServletResponse response) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        String uid = user.getId();
        applications.deleteByUserId(uid);
        chats.deleteByUserId(uid);
        checklists.deleteByUserId(uid);
        assessments.deleteByUserId(uid);
        notifications.deleteByUserId(uid);
        savedSchemes.deleteByUserId(uid);
        sessions.deleteByUserId(uid);
        userProfiles.deleteById(uid);
        users.deleteById(uid);

        SecurityContextHolder.clearContext();

        ResponseCookie cookie = ResponseCookie.from("session_token", "")
                .path("/")
                .maxAge(0)
                .httpOnly(true)
                .sameSite("Lax")
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());

        return ResponseEntity.ok(Map.of("status", "ok"));
    }
}

