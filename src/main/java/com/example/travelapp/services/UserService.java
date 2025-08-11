package com.example.travelapp.services;

import com.example.travelapp.entity.User;
import com.example.travelapp.enums.Role; // ton enum Role
import com.example.travelapp.repository.UserRepository;
import com.example.travelapp.payload.SignupRequest; // classe DTO avec email, password, role
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String register(User user) {
        userRepository.save(user);
        return "User registered successfully!";
    }
    public String login(User loginUser) {
        var user = userRepository.findByEmail(loginUser.getEmail());
        if (user.isPresent() && user.get().getPassword().equals(loginUser.getPassword())) {
            return "Login successful!";
        } else {
            return "Invalid email or password!";
        }
    }
}
