// CarLot IFFE
var CarLot = (function() {

  // Private inventory array
  var inventory = [];

  return {

    // setInventory method
    setInventory: function(carInventory) {
      // Loop through each car and add to inventory array
      for (let i = 0; i < carInventory.cars.length; i++) {
        // Add current car to inventory array
        inventory.push(carInventory.cars[i]);
      }
    },

    // loadInventory method
    loadInventory: function(callback) {
      // Create XMLHttpRequest Object
      var xmlHttp = new XMLHttpRequest();
      // Check onreadystatechange
      xmlHttp.onreadystatechange = function() {
        // Check if status and readyState are good
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
          // Get data from inventory.json and parse
          var inventoryParsedData = JSON.parse(xmlHttp.responseText);
          // Add cars to array
          CarLot.setInventory(inventoryParsedData);
          // Callback invocation after data loaded
          callback();
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