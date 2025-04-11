package com.example.fit4fit.DTO;


public class MealDTO {

    private String title;
    private String description;
    private int calories;
    private double protein;
    private double fats;
    private double carbs;

    public MealDTO() {
    }

    public MealDTO(String title, String description, int calories, double protein, double fats, double carbs) {
        this.title = title;
        this.description = description;
        this.calories = calories;
        this.protein = protein;
        this.fats = fats;
        this.carbs = carbs;
    }

    // Getters and setters

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
}
