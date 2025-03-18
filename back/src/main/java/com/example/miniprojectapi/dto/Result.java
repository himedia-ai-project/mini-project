package com.example.miniprojectapi.dto;

import com.example.miniprojectapi.entity.AgeWarnings;
import com.example.miniprojectapi.entity.Compatibility;
import com.example.miniprojectapi.entity.Ingredients;
import com.example.miniprojectapi.entity.TotalResult;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
@Getter
public class Result {
    private String name;
    private String gender;
    private Integer age;
    private String issue;
    private String object;

//    private List<Ingredients> ingredients = new ArrayList<>();
//    private List<Compatibility> compatibilities = new ArrayList<>();
//    private List<AgeWarnings> ageWarnings = new ArrayList<>();
    private List<TotalResult> totalResults = new ArrayList<>();
}
