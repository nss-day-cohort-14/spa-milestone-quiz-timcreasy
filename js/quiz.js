// Load Inventory upon page load, and pass callback
CarLot.loadInventory(populatePage);

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
    carCard.innerHTML = `<h3 class="carYear">${currentCar.year}</h3>
                         <h2>${currentCar.make}</h2>
                         <h4>${currentCar.model}</h4>
                         <h3>$${currentCar.price}</h3>
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