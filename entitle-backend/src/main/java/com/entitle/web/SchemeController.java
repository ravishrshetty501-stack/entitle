package com.entitle.web;

import com.entitle.model.Scheme;
import com.entitle.model.User;
import com.entitle.service.ApiException;
import com.entitle.service.SchemeService;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class SchemeController {
    private final SchemeService schemeService;

    @GetMapping(value = {"/api/schemes", "/api/schemes/search"})
    public ResponseEntity<List<JsonNode>> search(
            @RequestParam(required = false) String q,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String subcategory,
            @RequestParam(required = false) String state,
            @RequestParam(required = false) String level,
            @RequestParam(required = false) String sdg,
            @RequestParam(required = false) String beneficiaryType,
            @RequestParam(required = false) Integer age,
            @RequestParam(required = false) Long income,
            @RequestParam(required = false) String incomeRange,
            @RequestParam(required = false) String provider,
            @RequestParam(required = false) String status) {
        return ResponseEntity.ok(schemeService.search(q, category, subcategory, state, level, sdg, beneficiaryType, age, income, incomeRange, provider, status));
    }

    @GetMapping("/api/schemes/stats")
    public ResponseEntity<Map<String, Object>> getStats() {
        return ResponseEntity.ok(schemeService.getCategoryStats());
    }

    @GetMapping("/api/schemes/categories")
    public ResponseEntity<Map<String, Object>> getCategories() {
        return ResponseEntity.ok(schemeService.getCategoryStats());
    }

    @GetMapping("/api/schemes/{id}")
    public ResponseEntity<JsonNode> getScheme(@PathVariable String id) {
        Scheme s = schemeService.get(id);
        return ResponseEntity.ok(schemeService.view(s));
    }

    @GetMapping("/api/schemes/recommended")
    public ResponseEntity<List<Map<String, Object>>> getRecommended(@AuthenticationPrincipal User user) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        List<Map<String, Object>> stored = schemeService.storedResults(user.getId());
        if (stored.isEmpty()) {
            stored = schemeService.assessAndStore(user.getId());
        }
        List<Map<String, Object>> rec = stored.stream()
                .filter(r -> "LIKELY_ELIGIBLE".equals(r.get("status")) || "NEEDS_VERIFICATION".equals(r.get("status")))
                .limit(6)
                .toList();
        return ResponseEntity.ok(rec);
    }

    @PostMapping("/api/eligibility/assess")
    public ResponseEntity<List<Map<String, Object>>> assess(@AuthenticationPrincipal User user) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        return ResponseEntity.ok(schemeService.assessAndStore(user.getId()));
    }

    @PostMapping("/api/eligibility/preview")
    public ResponseEntity<List<Map<String, Object>>> preview(@RequestBody Map<String, Object> profile) {
        return ResponseEntity.ok(schemeService.evaluateAll(profile));
    }

    @GetMapping("/api/eligibility/results")
    public ResponseEntity<List<Map<String, Object>>> getResults(@AuthenticationPrincipal User user) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        List<Map<String, Object>> res = schemeService.storedResults(user.getId());
        if (res.isEmpty()) {
            res = schemeService.assessAndStore(user.getId());
        }
        return ResponseEntity.ok(res);
    }

    @GetMapping("/api/eligibility/results/{schemeId}")
    public ResponseEntity<Map<String, Object>> getResult(
            @AuthenticationPrincipal User user,
            @PathVariable String schemeId) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        List<Map<String, Object>> res = schemeService.storedResults(user.getId());
        if (res.isEmpty()) {
            res = schemeService.assessAndStore(user.getId());
        }
        return res.stream()
                .filter(r -> schemeId.equals(r.get("schemeId")))
                .findFirst()
                .map(ResponseEntity::ok)
                .orElseThrow(() -> ApiException.notFound("Assessment for " + schemeId));
    }
}
