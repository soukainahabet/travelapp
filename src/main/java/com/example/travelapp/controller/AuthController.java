package com.example.travelapp.controller;

import com.example.travelapp.payload.LoginRequest;
import com.example.travelapp.payload.SignupRequest;
import com.example.travelapp.payload.UserResponse;
import com.example.travelapp.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> register(@RequestBody SignupRequest request) {
        try {
            String result = userService.register(
                    request.getEmail(),
                    request.getPassword(),
                    request.getRole(),
                    request.getName(),
                    request.getPhone()
            );
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Registration failed: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            UserResponse user = userService.login(request.getEmail(), request.getPassword());
            if (user == null) {
                return ResponseEntity.status(401).body("Email ou mot de passe incorrect");
            }
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Login failed: " + e.getMessage());
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        return ResponseEntity.ok("Logged out successfully");
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Backend is running!");
    }
}
