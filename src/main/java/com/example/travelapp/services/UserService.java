package com.example.travelapp.services;

import com.example.travelapp.entity.User;
import com.example.travelapp.enums.Role;
import com.example.travelapp.payload.UserResponse;
import com.example.travelapp.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public String register(String email, String password, String roleStr, String name, String phone) {
        if (userRepository.existsByEmail(email)) {
            return "Erreur : cet email est déjà utilisé.";
        }

        Role role;
        try {
            role = Role.valueOf(roleStr.toUpperCase());
        } catch (Exception e) {
            return "Erreur : rôle invalide. Utilisez USER ou ADMIN.";
        }

        String encodedPassword = passwordEncoder.encode(password);

        User user = new User();
        user.setEmail(email);
        user.setPassword(encodedPassword);
        user.setRole(role);
        user.setName(name);
        user.setPhone(phone);

        userRepository.save(user);
        return "Utilisateur enregistré avec succès";
    }

    public UserResponse login(String email, String password) {
        return userRepository.findByEmail(email)
                .filter(user -> passwordEncoder.matches(password, user.getPassword()))
                .map(user -> new UserResponse(
                        user.getId(),
                        user.getEmail(),
                        user.getName(),
                        user.getPhone()
                ))
                .orElse(null);
    }

}
