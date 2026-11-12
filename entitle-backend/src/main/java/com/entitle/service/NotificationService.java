package com.entitle.service;

import com.entitle.model.*;
import com.entitle.repo.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.*;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private static final Set<String> ACTIVE = Set.of("INTERESTED", "PREPARING_DOCUMENTS", "READY_TO_APPLY",
            "ACTION_REQUIRED");
    private static final Set<String> WAITING = Set.of("SUBMITTED", "UNDER_REVIEW");

    private final NotificationRepository notifications;
    private final ApplicationRepository applications;
    private final ChecklistProgressRepository checklists;
    private final SchemeRepository schemes;
    private final SchemeService schemeService;
    private final Json json;

    @Transactional
    public List<Notification> sync(String userId) {
        Map<String, String[]> desired = new LinkedHashMap<>();
        UserProfile p = schemeService.profileOf(userId);
        if (!Boolean.FALSE.equals(p.getNotifyProfile()) && p.completion() < 80)
            desired.put("profile-incomplete-" + p.completion(), new String[] { "PROFILE",
                    "Complete your profile (" + p.completion() + "% done) to discover more relevant benefits.",
                    "/profile" });

        for (Application a : applications.findByUserIdOrderByUpdatedAtDesc(userId)) {
            String name = schemes.findById(a.getSchemeId()).map(Scheme::getName).orElse(a.getSchemeId());
            if (!Boolean.FALSE.equals(p.getNotifyDocuments()) && ACTIVE.contains(a.getStatus())) {
                int total = schemeService.documentsFor(a.getSchemeId(), userId).size();
                int prepared = checklists.findByUserIdAndSchemeId(userId, a.getSchemeId())
                        .map(c -> json.stringList(c.getPreparedJson()).size()).orElse(0);
                int remaining = Math.max(0, total - prepared);
                if (remaining > 0)
                    desired.put("docs-" + a.getSchemeId() + "-" + remaining, new String[] { "DOCUMENTS",
                            "You have " + remaining + " document(s) remaining for your " + name + " checklist.",
                            "/checklist/" + a.getSchemeId() });
            }
            if (!Boolean.FALSE.equals(p.getNotifyDeadlines()) && a.getDeadline() != null) {
                long days = ChronoUnit.DAYS.between(LocalDate.now(), a.getDeadline());
                if (days >= 0 && days <= 14)
                    desired.put("deadline-" + a.getId() + "-" + a.getDeadline(), new String[] { "DEADLINE",
                            name + " has an application deadline in " + days + " day(s) (" + a.getDeadline() + ").",
                            "/applications" });
            }
            if (!Boolean.FALSE.equals(p.getNotifyTracker()) && WAITING.contains(a.getStatus())
                    && a.getUpdatedAt().isBefore(Instant.now().minus(21, ChronoUnit.DAYS)))
                desired.put("stale-" + a.getId() + "-" + a.getUpdatedAt().toEpochMilli(), new String[] { "TRACKER",
                        "Your application tracker for " + name
                                + " needs an update. Check the official portal and record the latest status.",
                        "/applications" });
        }
        for (Notification n : notifications.findByUserId(userId))
            if (!desired.containsKey(n.getDedupeKey()))
                notifications.delete(n);
        desired.forEach((k, v) -> add(userId, k, v[0], v[1], v[2]));
        return notifications.findByUserIdAndDismissedFalseOrderByCreatedAtDesc(userId);
    }

    private void add(String userId, String key, String type, String message, String link) {
        if (notifications.existsByUserIdAndDedupeKey(userId, key))
            return;
        Notification n = new Notification();
        n.setUserId(userId);
        n.setDedupeKey(key);
        n.setNotificationType(type);
        n.setMessage(message);
        n.setLink(link);
        n.setCreatedAt(Instant.now());
        notifications.save(n);
    }
}
