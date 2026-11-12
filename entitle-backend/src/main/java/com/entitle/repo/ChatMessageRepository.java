package com.entitle.repo;

import com.entitle.model.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    List<ChatMessage> findTop40ByUserIdOrderByCreatedAtDesc(String userId);

    List<ChatMessage> findTop10ByUserIdAndSchemeIdOrderByCreatedAtDesc(String userId, String schemeId);

    List<ChatMessage> findTop10ByUserIdAndSchemeIdIsNullOrderByCreatedAtDesc(String userId);

    void deleteByUserId(String userId);
}
