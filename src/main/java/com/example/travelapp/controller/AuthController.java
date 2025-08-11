package com.example.travelapp.controller;

import com.example.travelapp.entity.User;
import com.example.travelapp.payload.LoginRequest;
import com.example.travelapp.services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class AuthController {
    private final UserService service;

    public AuthController(UserService service) { this.service = service; }
    @PostMapping("/register")
    public Map<String, String> register(@RequestBody User user) {
        return Map.of("message", service.register(user));
    }
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User loginUser) {
        return Map.of("message", service.login(loginUser));
}}
