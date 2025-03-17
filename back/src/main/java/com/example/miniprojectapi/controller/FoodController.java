package com.example.miniprojectapi.controller;

import com.example.miniprojectapi.dto.Result;
import com.example.miniprojectapi.service.FoodService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RequestMapping("/api")
@RestController
public class FoodController {

    private final WebClient webClient;
    private final FoodService foodService;

    @Autowired
    public FoodController(WebClient.Builder webClientBuilder, FoodService foodService) {
        this.webClient = webClientBuilder.baseUrl("http://127.0.0.1:8000").build();
        this.foodService = foodService;
    }

    @PostMapping(value = "/analyze", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> analyzeFood(
            @RequestParam("name") String name,
            @RequestParam("gender") String gender,
            @RequestParam("age") Integer age,
            @RequestParam("issue") String issue,
            @RequestParam("object") String object,
            @RequestParam("image") MultipartFile image
    ) {
        try {
            byte[] imageBytes = image.getBytes();
            String base64Image = Base64.getEncoder().encodeToString(imageBytes);

            Map<String, Object> requestData = new HashMap<>();
            requestData.put("name", name);
            requestData.put("gender", gender);
            requestData.put("age", age);
            requestData.put("issue", issue);
            requestData.put("object", object);
            requestData.put("image", base64Image);

            String response = webClient.post()
                    .uri("/process")
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(requestData)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonResponse = objectMapper.readTree(response);

            foodService.save(jsonResponse, name, gender, age, issue, object);

//            return ResponseEntity.ok(jsonResponse);
            return ResponseEntity.ok("분석 및 db 저장 완료");
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("문제 발생");
        }
    }

    @GetMapping("/result")
    public ResponseEntity<Result> result(@RequestParam String name) {
        Result result = foodService.result(name);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Result>> all() {
        List<Result> resultList = foodService.all();
        return ResponseEntity.ok(resultList);
    }

}
