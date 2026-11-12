package com.entitle.web;

import com.entitle.model.ChecklistProgress;
import com.entitle.model.Scheme;
import com.entitle.model.User;
import com.entitle.repo.ChecklistProgressRepository;
import com.entitle.service.ApiException;
import com.entitle.service.Json;
import com.entitle.service.SchemeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.*;

@RestController
@RequestMapping("/api/checklists")
@RequiredArgsConstructor
public class ChecklistController {
    private final ChecklistProgressRepository checklists;
    private final SchemeService schemeService;
    private final Json json;

    @GetMapping
    public ResponseEntity<List<ChecklistProgress>> list(@AuthenticationPrincipal User user) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        return ResponseEntity.ok(checklists.findByUserId(user.getId()));
    }

    @GetMapping("/{schemeId}")
    public ResponseEntity<Map<String, Object>> get(
            @AuthenticationPrincipal User user,
            @PathVariable String schemeId) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        Scheme s = schemeService.get(schemeId);
        List<Map<String, String>> docs = schemeService.documentsFor(schemeId, user.getId());
        List<String> prepared = checklists.findByUserIdAndSchemeId(user.getId(), schemeId)
                .map(c -> json.stringList(c.getPreparedJson()))
                .orElseGet(ArrayList::new);

        Map<String, Object> res = new LinkedHashMap<>();
        res.put("schemeId", s.getId());
        res.put("schemeName", s.getName());
        res.put("officialUrl", s.getOfficialUrl());
        res.put("documents", docs);
        res.put("prepared", prepared);
        res.put("preparedCount", prepared.size());
        return ResponseEntity.ok(res);
    }

    @PutMapping("/{schemeId}")
    public ResponseEntity<Map<String, Object>> update(
            @AuthenticationPrincipal User user,
            @PathVariable String schemeId,
            @RequestBody Map<String, Object> body) {
        if (user == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Not authenticated");
        }
        Scheme s = schemeService.get(schemeId);
        @SuppressWarnings("unchecked")
        List<String> preparedList = (List<String>) body.getOrDefault("prepared", Collections.emptyList());

        ChecklistProgress cp = checklists.findByUserIdAndSchemeId(user.getId(), schemeId)
                .orElseGet(() -> {
                    ChecklistProgress ncp = new ChecklistProgress();
                    ncp.setUserId(user.getId());
                    ncp.setSchemeId(schemeId);
                    return ncp;
                });
        cp.setPreparedJson(json.write(preparedList));
        cp.setUpdatedAt(Instant.now());
        checklists.save(cp);

        List<Map<String, String>> docs = schemeService.documentsFor(schemeId, user.getId());

        Map<String, Object> res = new LinkedHashMap<>();
        res.put("schemeId", s.getId());
        res.put("schemeName", s.getName());
        res.put("officialUrl", s.getOfficialUrl());
        res.put("documents", docs);
        res.put("prepared", preparedList);
        res.put("preparedCount", preparedList.size());
        return ResponseEntity.ok(res);
    }
}

