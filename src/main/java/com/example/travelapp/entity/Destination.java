package com.example.travelapp.entity;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Destination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private  String country;
    private String description;
    @ElementCollection
    private List<String> popularActivities;
    public Destination(){

    }
    public Destination(String name,String country,String description,List<String> popularActivities){
        this.name=name;
        this.country=country;
        this.description=description;
        this.popularActivities=popularActivities;
    }
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id=id;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name=name;
    }
    public  String getCountry(){
        return country;
    }
    public  void setCountry(String country){
        this.country=country;
    }
    public String getDescription(){
        return description;
    }
    public void setDescription(String description){
        this.description=description;
    }
    public List<String> getPopularActivities() {
        return popularActivities;
    }
    public void setPopularActivities(List<String> popularActivities) {
        this.popularActivities = popularActivities;
    }
    @OneToMany(mappedBy = "destination")
    private List<Travel> travels;

}
