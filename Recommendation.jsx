import React, { useState } from 'react';
import './Recommendation.css';

const Recommendation = () => {
  // Array of meal recommendations with details and nutritional information.
  const meals = [
    {
      title: "Grilled Chicken Salad with Quinoa",
      description:
        "A fresh salad loaded with mixed greens, cherry tomatoes, grilled chicken, and nutrient-dense quinoa. Perfect for a lean and protein-packed meal.",
      nutrition: { calories: 400, protein: 35, fats: 10, carbs: 30 },
    },
    {
      title: "Salmon with Roasted Vegetables",
      description:
        "Rich in omega-3s and antioxidants, this dish features baked salmon with a medley of roasted seasonal vegetables.",
      nutrition: { calories: 500, protein: 40, fats: 20, carbs: 25 },
    },
    {
      title: "Turkey Wrap with Avocado",
      description:
        "A delicious and portable meal that combines lean turkey, creamy avocado, crisp lettuce, and a whole-grain tortilla.",
      nutrition: { calories: 450, protein: 30, fats: 18, carbs: 35 },
    },
    {
      title: "Spinach and Feta Omelette",
      description:
        "A protein-rich breakfast option with fresh spinach, tangy feta cheese, and herbs, designed to fuel your morning workouts.",
      nutrition: { calories: 350, protein: 25, fats: 15, carbs: 10 },
    },
    {
      title: "Protein Smoothie with Banana and Berries",
      description:
        "A refreshing blend of whey protein, banana, and mixed berries to support recovery and muscle repair after exercise.",
      nutrition: { calories: 300, protein: 28, fats: 5, carbs: 40 },
    },
  ];

  // Initialize state arrays for like and dislike counts.
  const [likeCounts, setLikeCounts] = useState(Array(meals.length).fill(0));
  const [dislikeCounts, setDislikeCounts] = useState(Array(meals.length).fill(0));

  // Function to update like count.
  const handleLike = (index) => {
    const newLikes = [...likeCounts];
    newLikes[index] += 1;
    setLikeCounts(newLikes);
  };

  // Function to update dislike count.
  const handleDislike = (index) => {
    const newDislikes = [...dislikeCounts];
    newDislikes[index] += 1;
    setDislikeCounts(newDislikes);
  };

  return (
    <div className="recommendation-container">
      <h2>Meal Recommendations for Athletes</h2>
      {meals.map((meal, index) => (
        <div key={index} className="meal-card">
          <h3>{meal.title}</h3>
          <p>{meal.description}</p>
          <div className="nutrition-info">
            <span>
              <strong>Calories:</strong> {meal.nutrition.calories} kcal
            </span>
            <span>
              <strong>Protein:</strong> {meal.nutrition.protein} g
            </span>
            <span>
              <strong>Fats:</strong> {meal.nutrition.fats} g
            </span>
            <span>
              <strong>Carbs:</strong> {meal.nutrition.carbs} g
            </span>
          </div>
          <div className="meal-buttons">
            <button className="like-button" onClick={() => handleLike(index)}>
              Like ({likeCounts[index]})
            </button>
            <button className="dislike-button" onClick={() => handleDislike(index)}>
              Dislike ({dislikeCounts[index]})
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendation;
