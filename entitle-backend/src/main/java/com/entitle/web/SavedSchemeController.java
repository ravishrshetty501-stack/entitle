package com.entitle.web;

import com.entitle.model.SavedScheme;
import com.entitle.model.Scheme;
import com.entitle.model.User;
import com.entitle.repo.SavedSchemeRepository;
import com.entitle.service.ApiException;
import com.entitle.service.SchemeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/saved-schemes")
@RequiredArgsConstructor
public class SavedSchemeController {
    private final SavedSchemeRepository savedSchemes;
    private final SchemeService schemeService;

    @GetMapping
    public ResponseEntity<List<Map<String, Object>>> list(@AuthenticationPrincipal User user) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        List<SavedScheme> list = savedSchemes.findByUserIdOrderBySavedAtDesc(user.getId());
        List<Map<String, Object>> out = new ArrayList<>();
        for (SavedScheme s : list) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("id", s.getId());
            m.put("userId", s.getUserId());
            m.put("schemeId", s.getSchemeId());
            m.put("savedAt", s.getSavedAt());
            try {
                Scheme sc = schemeService.get(s.getSchemeId());
                Map<String, Object> schemeMap = new LinkedHashMap<>();
                schemeMap.put("id", sc.getId());
                schemeMap.put("name", sc.getName());
                schemeMap.put("category", sc.getCategory());
                schemeMap.put("department", sc.getDepartment());
                schemeMap.put("level", sc.getLevel());
                schemeMap.put("officialUrl", sc.getOfficialUrl());
                m.put("scheme", schemeMap);
            } catch (Exception ignored) {
            }
            out.add(m);
        }
        return ResponseEntity.ok(out);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> save(
            @AuthenticationPrincipal User user,
            @RequestBody Map<String, String> body) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        String schemeId = body.get("schemeId");
        if (schemeId == null || schemeId.isBlank()) {
            throw ApiException.bad("schemeId required");
        }
        schemeService.get(schemeId); // verify exists

        SavedScheme s = savedSchemes.findByUserIdAndSchemeId(user.getId(), schemeId)
                .orElseGet(() -> {
                    SavedScheme ns = new SavedScheme();
                    ns.setUserId(user.getId());
                    ns.setSchemeId(schemeId);
                    ns.setSavedAt(Instant.now());
                    return savedSchemes.save(ns);
                });

        Map<String, Object> m = new LinkedHashMap<>();
        m.put("id", s.getId());
        m.put("userId", s.getUserId());
        m.put("schemeId", s.getSchemeId());
        m.put("savedAt", s.getSavedAt());
        return ResponseEntity.status(HttpStatus.CREATED).body(m);
    }

    @DeleteMapping("/{schemeId}")
    @Transactional
    public ResponseEntity<Map<String, Object>> delete(
            @AuthenticationPrincipal User user,
            @PathVariable String schemeId) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        savedSchemes.findByUserIdAndSchemeId(user.getId(), schemeId)
                .ifPresent(savedSchemes::delete);
        return ResponseEntity.ok(Map.of("status", "ok"));
    }
}

