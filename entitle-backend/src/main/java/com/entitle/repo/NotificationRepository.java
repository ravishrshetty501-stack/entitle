package com.entitle.repo;

import com.entitle.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByUserIdAndDismissedFalseOrderByCreatedAtDesc(String userId);

    Optional<Notification> findByIdAndUserId(Long id, String userId);

    boolean existsByUserIdAndDedupeKey(String userId, String dedupeKey);

    void deleteByUserId(String userId);

    List<Notification> findByUserId(String userId);
}
