package com.example.miniprojectapi.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Entity
@Table(name = "userinfo", schema = "test")
public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "gender", nullable = false, length = 10)
    private String gender;

    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "issue")
    private String issue;

    @Column(name = "object")
    private String object;

    @JsonManagedReference
    @OneToMany(mappedBy = "user")
    private List<Ingredients> ingredients = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "user")
    private List<Compatibility> compatibilities = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "user")
    private List<AgeWarnings> ageWarnings = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "user")
    private List<TotalResult> totalResults = new ArrayList<>();

}