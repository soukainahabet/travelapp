package com.example.travelapp.entity;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String location;
    private String currency;//La devise utilisée par l’hôtel pour les paiements (ex. : "MAD", "EUR", "USD").
    private float rating;//La note moyenne attribuée à l’hôtel, sur une échelle de 1 à 5.
    private Integer availableRooms;
    public Hotel(){}
    public Hotel(String name,String location,String currency,float rating,Integer availableRooms){
        this.name=name;
        this.currency=currency;
        this.location=location;
        this.rating=rating;
        this.availableRooms=availableRooms;
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
    public String getLocation(){
        return location;
    }
    public void setLocation(String location){
        this.location=location;
    }
    public String getCurrency(){
        return currency;
    }
    public void setCurrency(String currency){
        this.currency=currency;
    }
    public float getRating(){
        return rating;
    }
    public void setRating(float rating){
        this.rating=rating;
    }
    public Integer getAvailableRooms(){
        return availableRooms;
    }
    public void setAvailableRooms(Integer availableRooms){
        this.availableRooms=availableRooms;
    }
    @OneToMany(mappedBy = "hotel")
    private List<Booking> bookings;




}
