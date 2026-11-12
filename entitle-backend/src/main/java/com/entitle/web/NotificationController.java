package com.entitle.web;

import com.entitle.model.Notification;
import com.entitle.model.User;
import com.entitle.model.UserProfile;
import com.entitle.repo.NotificationRepository;
import com.entitle.repo.UserProfileRepository;
import com.entitle.service.ApiException;
import com.entitle.service.NotificationService;
import com.entitle.service.SchemeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
public class NotificationController {
    private final NotificationService notificationService;
    private final NotificationRepository notifications;
    private final SchemeService schemeService;
    private final UserProfileRepository userProfiles;

    @GetMapping
    public ResponseEntity<List<Notification>> list(@AuthenticationPrincipal User user) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        return ResponseEntity.ok(notificationService.sync(user.getId()));
    }

    @PutMapping("/{id}/read")
    public ResponseEntity<Notification> markRead(
            @AuthenticationPrincipal User user,
            @PathVariable Long id) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        Notification n = notifications.findByIdAndUserId(id, user.getId())
                .orElseThrow(() -> ApiException.notFound("Notification"));
        n.setReadStatus(true);
        return ResponseEntity.ok(notifications.save(n));
    }

    @PutMapping("/read-all")
    public ResponseEntity<Map<String, Object>> readAll(@AuthenticationPrincipal User user) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        List<Notification> list = notifications.findByUserIdAndDismissedFalseOrderByCreatedAtDesc(user.getId());
        for (Notification n : list) {
            n.setReadStatus(true);
            notifications.save(n);
        }
        return ResponseEntity.ok(Map.of("status", "ok"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> dismiss(
            @AuthenticationPrincipal User user,
            @PathVariable Long id) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        Notification n = notifications.findByIdAndUserId(id, user.getId())
                .orElseThrow(() -> ApiException.notFound("Notification"));
        notifications.delete(n);
        return ResponseEntity.ok(Map.of("status", "ok"));
    }

    @GetMapping("/preferences")
    public ResponseEntity<Map<String, Object>> getPreferences(@AuthenticationPrincipal User user) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        UserProfile p = schemeService.profileOf(user.getId());
        return ResponseEntity.ok(prefsMap(p));
    }

    @PutMapping("/preferences")
    public ResponseEntity<Map<String, Object>> updatePreferences(
            @AuthenticationPrincipal User user,
            @RequestBody Map<String, Boolean> body) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        UserProfile p = schemeService.profileOf(user.getId());
        if (body.containsKey("notifyProfile")) p.setNotifyProfile(body.get("notifyProfile"));
        if (body.containsKey("notifyDocuments")) p.setNotifyDocuments(body.get("notifyDocuments"));
        if (body.containsKey("notifyDeadlines")) p.setNotifyDeadlines(body.get("notifyDeadlines"));
        if (body.containsKey("notifyTracker")) p.setNotifyTracker(body.get("notifyTracker"));
        UserProfile saved = userProfiles.save(p);
        return ResponseEntity.ok(prefsMap(saved));
    }

    private Map<String, Object> prefsMap(UserProfile p) {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("notifyProfile", !Boolean.FALSE.equals(p.getNotifyProfile()));
        m.put("notifyDocuments", !Boolean.FALSE.equals(p.getNotifyDocuments()));
        m.put("notifyDeadlines", !Boolean.FALSE.equals(p.getNotifyDeadlines()));
        m.put("notifyTracker", !Boolean.FALSE.equals(p.getNotifyTracker()));
        return m;
    }
}

