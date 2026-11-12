package com.entitle.web;

import com.entitle.model.Application;
import com.entitle.model.Scheme;
import com.entitle.model.User;
import com.entitle.repo.ApplicationRepository;
import com.entitle.repo.ChecklistProgressRepository;
import com.entitle.repo.SchemeRepository;
import com.entitle.service.ApiException;
import com.entitle.service.Json;
import com.entitle.service.SchemeService;
import com.fasterxml.jackson.core.type.TypeReference;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
public class ApplicationController {
    public static final Set<String> VALID_STATUSES = Set.of(
            "INTERESTED", "PREPARING_DOCUMENTS", "READY_TO_APPLY",
            "SUBMITTED", "UNDER_REVIEW", "APPROVED", "REJECTED", "ACTION_REQUIRED");

    private final ApplicationRepository applications;
    private final SchemeRepository schemes;
    private final SchemeService schemeService;
    private final ChecklistProgressRepository checklists;
    private final Json json;

    @GetMapping
    public ResponseEntity<List<Map<String, Object>>> list(@AuthenticationPrincipal User user) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        List<Application> list = applications.findByUserIdOrderByUpdatedAtDesc(user.getId());
        List<Map<String, Object>> out = new ArrayList<>();
        for (Application a : list) {
            out.add(enrich(a, user.getId()));
        }
        return ResponseEntity.ok(out);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> create(
            @AuthenticationPrincipal User user,
            @RequestBody Map<String, Object> body) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        String schemeId = (String) body.get("schemeId");
        if (schemeId == null || schemeId.isBlank()) {
            throw ApiException.bad("schemeId required");
        }
        schemeService.get(schemeId); // verify exists

        Application a = applications.findByUserIdAndSchemeId(user.getId(), schemeId)
                .orElseGet(() -> {
                    Application na = new Application();
                    na.setUserId(user.getId());
                    na.setSchemeId(schemeId);
                    na.setCreatedAt(Instant.now());
                    return na;
                });

        String status = (String) body.getOrDefault("status", "INTERESTED");
        if (!VALID_STATUSES.contains(status)) {
            throw ApiException.bad("Invalid status: " + status);
        }
        a.setStatus(status);
        if (body.containsKey("notes")) a.setNotes((String) body.get("notes"));
        if (body.containsKey("referenceNumber")) a.setReferenceNumber((String) body.get("referenceNumber"));
        if (body.get("applicationDate") != null) {
            a.setApplicationDate(LocalDate.parse(body.get("applicationDate").toString()));
        }
        if (body.get("deadline") != null) {
            a.setDeadline(LocalDate.parse(body.get("deadline").toString()));
        }

        List<Map<String, Object>> hist = parseHistory(a.getHistoryJson());
        Map<String, Object> hEntry = new LinkedHashMap<>();
        hEntry.put("status", a.getStatus());
        hEntry.put("timestamp", Instant.now().toString());
        hEntry.put("note", a.getNotes() != null ? a.getNotes() : "Created");
        hist.add(hEntry);
        a.setHistoryJson(json.write(hist));
        a.setUpdatedAt(Instant.now());

        Application saved = applications.save(a);
        return ResponseEntity.status(HttpStatus.CREATED).body(enrich(saved, user.getId()));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> update(
            @AuthenticationPrincipal User user,
            @PathVariable Long id,
            @RequestBody Map<String, Object> body) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        Application a = applications.findByIdAndUserId(id, user.getId())
                .orElseThrow(() -> ApiException.notFound("Application"));

        if (body.containsKey("status")) {
            String newStatus = (String) body.get("status");
            if (newStatus == null || !VALID_STATUSES.contains(newStatus)) {
                throw ApiException.bad("Invalid status: " + newStatus);
            }
            if (!newStatus.equals(a.getStatus())) {
                List<Map<String, Object>> hist = parseHistory(a.getHistoryJson());
                Map<String, Object> hEntry = new LinkedHashMap<>();
                hEntry.put("status", newStatus);
                hEntry.put("timestamp", Instant.now().toString());
                hEntry.put("note", body.get("notes") != null ? (String) body.get("notes") : "Status updated to " + newStatus);
                hist.add(hEntry);
                a.setHistoryJson(json.write(hist));
                a.setStatus(newStatus);
            }
        }

        if (body.containsKey("notes")) a.setNotes((String) body.get("notes"));
        if (body.containsKey("referenceNumber")) a.setReferenceNumber((String) body.get("referenceNumber"));
        if (body.containsKey("applicationDate")) {
            Object ad = body.get("applicationDate");
            a.setApplicationDate(ad != null && !ad.toString().isBlank() ? LocalDate.parse(ad.toString()) : null);
        }
        if (body.containsKey("deadline")) {
            Object dl = body.get("deadline");
            a.setDeadline(dl != null && !dl.toString().isBlank() ? LocalDate.parse(dl.toString()) : null);
        }
        a.setUpdatedAt(Instant.now());

        Application saved = applications.save(a);
        return ResponseEntity.ok(enrich(saved, user.getId()));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Map<String, Object>> delete(
            @AuthenticationPrincipal User user,
            @PathVariable Long id) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        Application a = applications.findByIdAndUserId(id, user.getId())
                .orElseThrow(() -> ApiException.notFound("Application"));
        applications.delete(a);
        return ResponseEntity.ok(Map.of("status", "ok"));
    }

    private List<Map<String, Object>> parseHistory(String jsonStr) {
        if (jsonStr == null || jsonStr.isBlank()) return new ArrayList<>();
        try {
            return json.mapper().readValue(jsonStr, new TypeReference<List<Map<String, Object>>>() {});
        } catch (Exception e) {
            return new ArrayList<>();
        }
    }

    private Map<String, Object> enrich(Application a, String userId) {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("id", a.getId());
        m.put("userId", a.getUserId());
        m.put("schemeId", a.getSchemeId());
        m.put("status", a.getStatus());
        m.put("applicationDate", a.getApplicationDate() != null ? a.getApplicationDate().toString() : null);
        m.put("deadline", a.getDeadline() != null ? a.getDeadline().toString() : null);
        m.put("referenceNumber", a.getReferenceNumber());
        m.put("notes", a.getNotes());
        m.put("history", parseHistory(a.getHistoryJson()));
        m.put("createdAt", a.getCreatedAt());
        m.put("updatedAt", a.getUpdatedAt());

        Scheme s = schemes.findById(a.getSchemeId()).orElse(null);
        m.put("schemeName", s != null ? s.getName() : a.getSchemeId());
        m.put("category", s != null ? s.getCategory() : "");
        m.put("officialUrl", s != null ? s.getOfficialUrl() : null);

        List<Map<String, String>> docs = schemeService.documentsFor(a.getSchemeId(), userId);
        Set<String> prepared = checklists.findByUserIdAndSchemeId(userId, a.getSchemeId())
                .map(c -> new HashSet<>(json.stringList(c.getPreparedJson())))
                .orElseGet(HashSet::new);
        List<String> missing = new ArrayList<>();
        for (Map<String, String> d : docs) {
            String docName = d.get("name");
            if (!prepared.contains(docName)) {
                missing.add(docName);
            }
        }
        m.put("documentsTotal", docs.size());
        m.put("missingDocuments", missing);
        return m;
    }
}

