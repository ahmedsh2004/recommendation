package com.example.fit4fit.models;

import jakarta.persistence.*;

@Entity
@Table(name = "meal_votes", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"meal_id", "user_identifier"})
})
public class MealVote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "meal_id", nullable = false)
    private Meal meal;

    @Column(name = "user_identifier", nullable = false)
    private String userIdentifier;

    @Column(nullable = false)
    private String voteType; // Expected values: "like" or "dislike"

    public MealVote() {
    }

    public MealVote(Meal meal, String userIdentifier, String voteType) {
        this.meal = meal;
        this.userIdentifier = userIdentifier;
        this.voteType = voteType;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) { 
        this.id = id; 
    }

    public Meal getMeal() {
        return meal;
    }

    public void setMeal(Meal meal) { 
        this.meal = meal; 
    }

    public String getUserIdentifier() {
        return userIdentifier;
    }

    public void setUserIdentifier(String userIdentifier) { 
        this.userIdentifier = userIdentifier; 
    }

    public String getVoteType() {
        return voteType;
    }

    public void setVoteType(String voteType) { 
        this.voteType = voteType; 
    }
}
