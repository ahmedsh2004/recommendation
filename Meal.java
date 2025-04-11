package com.example.fit4fit.models;
import jakarta.persistence.*;

@Entity
@Table(name = "meals")
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 1000)
    private String description;

    private int calories;
    private double protein;
    private double fats;
    private double carbs;

    // Vote counts
    private int likeCount;
    private int dislikeCount;

    public Meal() {
    }

    public Meal(String title, String description, int calories, double protein, double fats, double carbs) {
        this.title = title;
        this.description = description;
        this.calories = calories;
        this.protein = protein;
        this.fats = fats;
        this.carbs = carbs;
        this.likeCount = 0;
        this.dislikeCount = 0;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) { 
        this.id = id; 
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) { 
        this.title = title; 
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) { 
        this.description = description; 
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) { 
        this.calories = calories; 
    }

    public double getProtein() {
        return protein;
    }

    public void setProtein(double protein) { 
        this.protein = protein; 
    }

    public double getFats() {
        return fats;
    }

    public void setFats(double fats) { 
        this.fats = fats; 
    }

    public double getCarbs() {
        return carbs;
    }

    public void setCarbs(double carbs) { 
        this.carbs = carbs; 
    }

    public int getLikeCount() {
        return likeCount;
    }

    public void setLikeCount(int likeCount) { 
        this.likeCount = likeCount; 
    }

    public int getDislikeCount() {
        return dislikeCount;
    }

    public void setDislikeCount(int dislikeCount) { 
        this.dislikeCount = dislikeCount; 
    }
}
