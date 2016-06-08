// REQUIREMENT:

  // The final IIFE should augment the object with two more functions. 
  // One function resets the border thickness and background color for each car element back to the original values.
  // The other function changes the thickness of the border of a car element, and changes its background color. 
  // The function must accept two arguments.
    // A car DOM element that was clicked on.
    // A color name.

// Augment CarLot IIFE
var CarLot = (function(originalCarLot) {

  // Reset styling of card
  originalCarLot.resetStyling = function() {

    // Get HTMLCollection of all carCards
    var carCards = document.getElementsByClassName("carCard");

    // Loop through each and remove styling
    for (let i = 0; i < carCards.length; i++) {
      let currentCarCard = carCards[i];
      // Reset border-width
      currentCarCard.style.borderWidth = "2px";
      // Reset background-color
      currentCarCard.style.backgroundColor = "";
      // Remove class of selected
      currentCarCard.classList.remove("selected");
    }

  };

  // Set new styling o//card
  originalCarLot.setStyling = function(carClicked, colorName) {

    // Thicken border and add background color
    carClicked.style.borderWidth = "6px";
    carClicked.style.backgroundColor = colorName;

    // Clear descriptionInput text
    document.getElementById("descriptionInput").value = "";

    // Set focus on descriptionInput
    document.getElementById("descriptionInput").focus();

    // Add class of selected to currentCarCard
    carClicked.classList.add("selected");

  };

  // Finally, return augmented originalCarLot object
  return originalCarLot;

})(CarLot);