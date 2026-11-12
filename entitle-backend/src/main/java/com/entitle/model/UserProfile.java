package com.entitle.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import java.time.Instant;
import java.util.LinkedHashMap;
import java.util.Map;

@Data
@Entity
@Table(name = "user_profiles")
public class UserProfile {
    @Id
    @Column(length = 40)
    @JsonIgnore
    private String userId;

    @Size(max = 80)
    private String displayName;
    @Min(0)
    @Max(120)
    private Integer age;
    @Size(max = 60)
    private String state;
    @Size(max = 80)
    private String district;
    @Pattern(regexp = "RURAL|URBAN")
    private String area;
    @Size(max = 40)
    private String occupation;
    @Size(max = 40)
    private String education;
    @Size(max = 40)
    private String incomeRange;
    @Size(max = 40)
    private String householdCategory;
    @Size(max = 20)
    private String gender;
    @Min(1)
    @Max(30)
    private Integer familySize;
    private Boolean student;
    private Boolean farmer;
    private Boolean ownsLand;
    private Boolean disability;
    @Size(max = 20)
    private String disabilityLevel;
    private Boolean healthcareNeed;
    private Boolean rationCard;
    private Boolean incomeTaxPayer;
    private Boolean hasBankAccount;
    private Boolean ownsPuccaHouse;
    private Boolean hasLpg;
    private Boolean pregnant;
    private Boolean hasGirlChildUnder10;

    private Boolean notifyProfile = true;
    private Boolean notifyDocuments = true;
    private Boolean notifyDeadlines = true;
    private Boolean notifyTracker = true;

    private Instant updatedAt;

    public Map<String, Object> eligibilityFields() {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("age", age);
        m.put("state", state);
        m.put("district", district);
        m.put("area", area);
        m.put("occupation", occupation);
        m.put("education", education);
        m.put("incomeRange", incomeRange);
        m.put("householdCategory", householdCategory);
        m.put("gender", gender);
        m.put("familySize", familySize);
        m.put("student", student);
        m.put("farmer", farmer);
        m.put("ownsLand", ownsLand);
        m.put("disability", disability);
        m.put("disabilityLevel", disabilityLevel);
        m.put("healthcareNeed", healthcareNeed);
        m.put("rationCard", rationCard);
        m.put("incomeTaxPayer", incomeTaxPayer);
        m.put("hasBankAccount", hasBankAccount);
        m.put("ownsPuccaHouse", ownsPuccaHouse);
        m.put("hasLpg", hasLpg);
        m.put("pregnant", pregnant);
        m.put("hasGirlChildUnder10", hasGirlChildUnder10);
        return m;
    }

    public int completion() {
        Object[] core = { age, state, district, area, occupation, education, incomeRange, householdCategory,
                gender, familySize, rationCard, hasBankAccount, incomeTaxPayer, ownsPuccaHouse };
        int filled = 0;
        for (Object o : core)
            if (o != null && !"".equals(o))
                filled++;
        return Math.round(filled * 100f / core.length);
    }
}
