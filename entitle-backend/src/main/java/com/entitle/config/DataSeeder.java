package com.entitle.config;

import com.entitle.model.Scheme;
import com.entitle.model.User;
import com.entitle.model.UserProfile;
import com.entitle.repo.SchemeRepository;
import com.entitle.repo.UserProfileRepository;
import com.entitle.repo.UserRepository;
import com.entitle.service.Json;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.time.Instant;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {
    private final SchemeRepository schemes;
    private final UserRepository users;
    private final UserProfileRepository profiles;
    private final Json json;

    @Override
    public void run(String... args) throws Exception {
        for (String file : new String[] { "seed/schemes.json", "seed/schemes-extra.json" })
            try (InputStream in = new ClassPathResource(file).getInputStream()) {
                for (JsonNode n : json.mapper().readTree(in)) {
                    Scheme s = new Scheme();
                    s.setId(n.path("id").asText());
                    s.setName(n.path("name").asText());
                    s.setCategory(n.path("category").asText());
                    s.setDepartment(n.path("department").asText());
                    s.setLevel(n.path("level").asText());
                    s.setState(n.path("state").isNull() ? null : n.path("state").asText(null));
                    s.setMinAge(n.hasNonNull("minAge") ? n.get("minAge").asInt() : null);
                    s.setMaxAge(n.hasNonNull("maxAge") ? n.get("maxAge").asInt() : null);
                    s.setIncomeMax(n.hasNonNull("incomeMax") ? n.get("incomeMax").asLong() : null);
                    s.setStatus(n.path("status").asText("Active"));
                    s.setOfficialUrl(n.hasNonNull("officialUrl") ? n.get("officialUrl").asText() : null);
                    s.setSourceUrl(n.path("sourceUrl").asText());
                    s.setLastVerified(n.path("lastVerified").asText());
                    s.setData(n.toString());
                    schemes.save(s);
                }
            }
        ensurePersonas();
    }

    public void ensurePersonas() throws Exception {
        try (InputStream in = new ClassPathResource("seed/personas.json").getInputStream()) {
            for (JsonNode p : json.mapper().readTree(in)) {
                String id = "demo_" + p.path("id").asText();
                if (users.existsById(id))
                    continue;
                User u = new User();
                u.setId(id);
                u.setEmail(p.path("email").asText());
                u.setName(p.path("name").asText());
                u.setDemo(true);
                u.setDemoPersona(p.path("id").asText());
                u.setCreatedAt(Instant.now());
                users.save(u);
                UserProfile prof = json.mapper().treeToValue(p.path("profile"), UserProfile.class);
                prof.setUserId(id);
                prof.setDisplayName(p.path("name").asText());
                prof.setUpdatedAt(Instant.now());
                profiles.save(prof);
            }
        }
    }
}
