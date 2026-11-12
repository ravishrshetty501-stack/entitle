package com.entitle.config;

import com.entitle.repo.UserRepository;
import com.entitle.repo.UserSessionRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Instant;
import java.util.List;

public class SessionAuthFilter extends OncePerRequestFilter {
    private final UserSessionRepository sessions;
    private final UserRepository users;

    public SessionAuthFilter(UserSessionRepository sessions, UserRepository users) {
        this.sessions = sessions;
        this.users = users;
    }

    public static String extractToken(HttpServletRequest req) {
        if (req.getCookies() != null)
            for (Cookie c : req.getCookies())
                if ("session_token".equals(c.getName()))
                    return c.getValue();
        String h = req.getHeader("Authorization");
        return h != null && h.startsWith("Bearer ") ? h.substring(7) : null;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws ServletException, IOException {
        String token = extractToken(req);
        if (token != null) {
            sessions.findById(token)
                    .filter(s -> s.getExpiresAt().isAfter(Instant.now()))
                    .flatMap(s -> users.findById(s.getUserId()))
                    .ifPresent(u -> SecurityContextHolder.getContext().setAuthentication(
                            new UsernamePasswordAuthenticationToken(u, null, List.of())));
        }
        chain.doFilter(req, res);
    }
}
