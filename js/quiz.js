// Load Inventory upon page load
CarLot.loadInventory();



// Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of container.

// Make sure you display all properties of the car in the DOM. Basic styling is up to you.
// Put a border around the car information that matches the color of the car. To make this easier, set the color property value to an existing named CSS color.
// When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
// Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
// When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.

function populatePage() {

  // Get inventory
  var inventory = CarLot.getInventory();

  // Get output element to add each card to
  var output = document.getElementById("output");

  // Add cars to page
  for (let i = 0; i < inventory.length; i++) {
    // Get currentCar being looked at
    var currentCar = inventory[i];

    // Set currentCarAvailibility
    var currentCarAvailibility;
    if (currentCar.purchased === false) {
      currentCarAvailibility = "Availble";
    } else {
      currentCarAvailibility = "Sold";
    }

    // Create carCard
    var carCard = document.createElement("div");
    // Add class of carCard and col-sm-4 to carCard
    carCard.setAttribute('class', "carCard col-sm-4");

    // Add markup and data to carCard
    carCard.innerHTML = `<h3>${currentCar.year}</h3>
                         <h2>${currentCar.make}</h2>
                         <h4>${currentCar.model}</h4>
                         <h3>${currentCar.price}</h3>
                         <h3>${currentCar.color}</h3>
                         <p>${currentCar.description}</p>
                         <h4>${currentCarAvailibility}</h4>`;

    // Add current carCard to output element
    output.appendChild(carCard);

    // Set color of border of card
    carCard.style.borderColor = currentCar.color;

  }

  // Activate eventHandlers
  CarLot.activateEvents();

}

