package com.entitle.repo;

import com.entitle.model.UserSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserSessionRepository extends JpaRepository<UserSession, String> {
    void deleteByUserId(String userId);
}
