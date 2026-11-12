-- ENTITLE MySQL schema (MySQL 8+). Hibernate (ddl-auto=update) creates the same tables automatically;
-- use this file if you prefer to provision the database manually.
CREATE DATABASE IF NOT EXISTS entitle CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE entitle;

CREATE TABLE users (
  id VARCHAR(40) PRIMARY KEY,
  email VARCHAR(190) NOT NULL,
  name VARCHAR(255),
  picture VARCHAR(600),
  demo BOOLEAN NOT NULL DEFAULT FALSE,
  demo_persona VARCHAR(255),
  created_at DATETIME(6),
  UNIQUE KEY idx_users_email (email)
);

CREATE TABLE user_sessions (
  token VARCHAR(200) PRIMARY KEY,
  user_id VARCHAR(40) NOT NULL,
  expires_at DATETIME(6),
  created_at DATETIME(6),
  KEY idx_sessions_user (user_id),
  CONSTRAINT fk_sessions_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE user_profiles (
  user_id VARCHAR(40) PRIMARY KEY,
  display_name VARCHAR(80), age INT, state VARCHAR(60), district VARCHAR(80), area VARCHAR(255),
  occupation VARCHAR(40), education VARCHAR(40), income_range VARCHAR(40), household_category VARCHAR(40),
  gender VARCHAR(20), family_size INT,
  student BOOLEAN, farmer BOOLEAN, owns_land BOOLEAN, disability BOOLEAN, disability_level VARCHAR(20),
  healthcare_need BOOLEAN, ration_card BOOLEAN, income_tax_payer BOOLEAN, has_bank_account BOOLEAN,
  owns_pucca_house BOOLEAN, has_lpg BOOLEAN, pregnant BOOLEAN, has_girl_child_under10 BOOLEAN,
  notify_profile BOOLEAN, notify_documents BOOLEAN, notify_deadlines BOOLEAN, notify_tracker BOOLEAN,
  updated_at DATETIME(6),
  CONSTRAINT fk_profiles_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE schemes (
  id VARCHAR(80) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(60), department VARCHAR(255), level VARCHAR(20), state VARCHAR(60),
  min_age INT, max_age INT, income_max BIGINT, status VARCHAR(20),
  official_url VARCHAR(600), source_url VARCHAR(600), last_verified VARCHAR(20),
  data TEXT COMMENT 'description, benefits, eligibility_rules, required_documents, process, faqs as JSON',
  KEY idx_schemes_category (category),
  KEY idx_schemes_state (state)
);

CREATE TABLE saved_schemes (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(40) NOT NULL, scheme_id VARCHAR(80) NOT NULL, saved_at DATETIME(6),
  UNIQUE KEY uk_saved (user_id, scheme_id),
  CONSTRAINT fk_saved_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_saved_scheme FOREIGN KEY (scheme_id) REFERENCES schemes(id)
);

CREATE TABLE eligibility_assessments (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(40) NOT NULL, scheme_id VARCHAR(80) NOT NULL,
  assessment_status VARCHAR(30), match_score INT,
  matched_criteria TEXT, missing_criteria TEXT, result_json TEXT, assessed_at DATETIME(6),
  KEY idx_assess_user (user_id),
  CONSTRAINT fk_assess_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_assess_scheme FOREIGN KEY (scheme_id) REFERENCES schemes(id)
);

CREATE TABLE applications (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(40) NOT NULL, scheme_id VARCHAR(80) NOT NULL,
  status VARCHAR(30), application_date DATE, deadline DATE, reference_number VARCHAR(80),
  notes VARCHAR(2000), history_json TEXT, created_at DATETIME(6), updated_at DATETIME(6),
  UNIQUE KEY uk_app (user_id, scheme_id),
  CONSTRAINT fk_app_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_app_scheme FOREIGN KEY (scheme_id) REFERENCES schemes(id)
);

CREATE TABLE checklist_progress (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(40) NOT NULL, scheme_id VARCHAR(80) NOT NULL,
  prepared_json TEXT, updated_at DATETIME(6),
  UNIQUE KEY uk_check (user_id, scheme_id),
  CONSTRAINT fk_check_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE notifications (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(40) NOT NULL, message VARCHAR(500) NOT NULL, notification_type VARCHAR(30),
  link VARCHAR(200), dedupe_key VARCHAR(160), read_status BOOLEAN NOT NULL DEFAULT FALSE,
  dismissed BOOLEAN NOT NULL DEFAULT FALSE, created_at DATETIME(6),
  UNIQUE KEY uk_notif (user_id, dedupe_key),
  CONSTRAINT fk_notif_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE chat_messages (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(40) NOT NULL, role VARCHAR(12), content TEXT, scheme_id VARCHAR(80),
  source VARCHAR(255), created_at DATETIME(6),
  KEY idx_chat_user (user_id),
  CONSTRAINT fk_chat_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
