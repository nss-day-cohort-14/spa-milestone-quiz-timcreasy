// REQUIREMENT:

  // The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. 
  // It should also expose a public getter to read the array of cars (e.g. getInventory).


// CarLot IFFE
var CarLot = (function() {

  // Private inventory array
  var inventory = [];

  return {

    // loadInventory method
    loadInventory: function() {
      // Create XMLHttpRequest Object
      var xmlHttp = new XMLHttpRequest();
      // Check onreadystatechange
      xmlHttp.onreadystatechange = function() {
        // Check if status and readyState are good
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
          // Get data from inventory.json and parse
          var inventoryParsedData = JSON.parse(xmlHttp.responseText);
          // Loop through each car and add to inventory array
          for (let i = 0; i < inventoryParsedData.cars.length; i++) {
            // Add current car to inventory array
            inventory.push(inventoryParsedData.cars[i]);
          }
          // Callback invocation after data loaded
          populatePage();
        }
      };
      // Open request to get inventory
      xmlHttp.open("GET", "../json/inventory.json");
      // Send request
      xmlHttp.send();
    },

    // getInventory method
    getInventory: function() {
      // return inventory array
      return inventory;
    }

  };

})();