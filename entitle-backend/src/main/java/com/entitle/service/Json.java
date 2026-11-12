package com.entitle.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class Json {
    private final ObjectMapper mapper;

    public ObjectMapper mapper() {
        return mapper;
    }

    public JsonNode read(String s) {
        try {
            return mapper.readTree(s == null ? "null" : s);
        } catch (Exception e) {
            throw new IllegalStateException(e);
        }
    }

    public String write(Object o) {
        try {
            return mapper.writeValueAsString(o);
        } catch (Exception e) {
            throw new IllegalStateException(e);
        }
    }

    public List<String> stringList(String s) {
        if (s == null || s.isBlank())
            return new ArrayList<>();
        try {
            return mapper.readValue(s, new TypeReference<List<String>>() {
            });
        } catch (Exception e) {
            return new ArrayList<>();
        }
    }
}
