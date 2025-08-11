package com.example.travelapp.payload;

public class SignupRequest {
    private String email;
    private String password;
    private String role; // exemple "USER" ou "ADMIN"

    // getters et setters
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
}
