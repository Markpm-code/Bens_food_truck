function showAllergens(foodItem) {
    const allergensDiv = document.getElementById(`allergens-${foodItem}`);
    allergensDiv.style.display = allergensDiv.style.display === 'none' ? 'block' : 'none';
  }