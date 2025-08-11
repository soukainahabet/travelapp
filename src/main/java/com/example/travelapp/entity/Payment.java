package com.example.travelapp.entity;
import com.example.travelapp.enums.PaymentMethod;
import jakarta.persistence.*;

import javax.swing.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal amount;
    private String currency;
    private LocalDateTime transactionDate;
    @Enumerated(EnumType.STRING)
    private PaymentMethod method;
    public Payment(){}
    public Payment(BigDecimal amount,String currency,LocalDateTime transactionDate, PaymentMethod method){
        this.amount=amount;
        this.currency=currency;
        this.transactionDate=transactionDate;
        this.method=method;
    }
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id=id;
    }
    public BigDecimal getAmount(){
        return amount;
    }
    public void setAmount(BigDecimal amount){
        this.amount=amount;
    }
    public String getCurrency(){
        return currency;
    }
    public void setCurrency(String currency){
        this.currency=currency;
    }
    public LocalDateTime getTransactionDate(){
        return transactionDate;
    }
    public void setTransactionDate(LocalDateTime transactionDate){
        this.transactionDate=transactionDate;
    }
    public PaymentMethod getMethod(){
        return method;
    }
    public void setMethod(PaymentMethod method){
        this.method = method;
    }

    @OneToOne
    private Booking booking;
}
