package com.example.miniprojectapi.entity;

import com.example.miniprojectapi.enums.AgeWarningsType;
import com.example.miniprojectapi.enums.CompatibilityType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "agewarnings", schema = "test")
public class AgeWarnings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

//    @Lob
//    @Column(name = "age_warning", columnDefinition = "LONGTEXT")
//    private String ageWarning;
//
//    @Lob
//    @Column(name = "advice", columnDefinition = "LONGTEXT")
//    private String advice;

    @Lob
    @Column(name = "description", columnDefinition = "LONGTEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    private AgeWarningsType type;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserInfo user;

}