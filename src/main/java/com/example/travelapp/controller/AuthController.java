package com.example.travelapp.controller;

import com.example.travelapp.payload.LoginRequest;
import com.example.travelapp.payload.SignupRequest;
import com.example.travelapp.payload.UserResponse;
import com.example.travelapp.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> register(@RequestBody SignupRequest request) {
        String result = userService.register(
                request.getEmail(),
                request.getPassword(),
                request.getRole(),
                request.getName(),
                request.getPhone()
        );
        return ResponseEntity.ok(result);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        UserResponse user = userService.login(request.getEmail(), request.getPassword());
        if (user == null) {
            return ResponseEntity.status(401).body("Email ou mot de passe incorrect");
        }
        return ResponseEntity.ok(user);
    }

}
