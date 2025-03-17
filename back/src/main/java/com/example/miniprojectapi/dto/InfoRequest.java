package com.example.miniprojectapi.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class InfoRequest {
    private String name;
    private String gender;
    private Integer age;
    private String healthConditions;
    private String goal;
}
