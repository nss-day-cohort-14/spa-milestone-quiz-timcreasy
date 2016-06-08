// REQUIREMENT:

  // The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. 
  // Name the function activateEvents.

// Augment CarLot IIFE

var CarLot = (function(originalCarLot) {

  // activateEvents method to add to originalCarLot
  originalCarLot.activateEvents = function() {
    // Add Event Handlers

    // input event for descriptionInput
    document.getElementById("descriptionInput").addEventListener("input", descriptionInputEntered);

    // submitButton click event
    document.getElementById("submitButton").addEventListener("click", submitButtonPressed);

    // carCard click event
    // get all carCards
    var carCards = document.getElementsByClassName("carCard");
    // Loop through all carCards and attach click event
    for (let i = 0; i < carCards.length; i++) {
      // Attach event listener to current carCard
      carCards[i].addEventListener("click", carCardClicked);
    }



  };

  // Finally, return augmented originalCarLot
  return originalCarLot;

})(CarLot);

// Callback functions for events
function descriptionInputEntered() {

  // Get currentCarCardDescription
  currentCarCardDescription = document.querySelector(".selected p");

  // Bind description to descriptionInput value
  currentCarCardDescription.innerHTML = document.getElementById("descriptionInput").value;

}

function submitButtonPressed() {

  // Prevent default behavior
  event.preventDefault();

}

function carCardClicked() {

  // Set currentCarCard
  var currentCarCard = event.target;

  // Ensure currentCarCard is not child element
  if (currentCarCard.tagName !== "DIV") {
    currentCarCard = currentCarCard.parentNode;
  }

  // Reset styling of all cards
  CarLot.resetStyling();

  // Set styling of selected card
  CarLot.setStyling(currentCarCard, "#F5F5F5");

}






