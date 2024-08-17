const items = ["chair", "recliner", "table", "umbrella"]; // Array for items on sale

const itemsPrice = [25.5, 37.75, 49.95, 24.89]; // Array for prices of items, index corresponds to index of items in top array

const zoneOne = ["ME", "NH", "VT", "MA", "CT", "RI", "NY", "NJ"]; // Array for states that are in zone 1

const zoneTwo = ["PA", "DE", "MD", "OH", "WV", "IN", "KY", "VA", "NC", "SC", "DC"]; // Array for states that are in zone 2

const zoneThree = ["MI", "WI", "MN", "IA", "IL", "MO", "KS", "TN", "GA", "AL", "FL", "TX"]; // Array for states that are in zone 3

const zoneFour = ["ND", "SD", "NE", "CO", "OK", "AR", "LA", "MS"]; // Array for states that are in zone 4

const zoneFive = ["MT", "WY", "ID", "WA", "OR", "CA", "NV", "UT", "AZ", "NM", "AK", "HI"]; // Array for states that are in zone 5

const taxRate = 0.15; // Tax rate for all purchases

let reset = document.getElementById("reset"); // Represents reset button

let op = document.getElementById("output"); // Represents invoice

op.style.display = "none"; // Hides invoice by default

reset.style.display = "none"; // Hides reset button by default

function makePurchase(){

  reset.style.display = "flex"; // Shows reset button

  op.style.display = "flex"; // Shows invoice
  
  let quan = 0; // Represents quantity of items the user wants to purchase

  let item; // Represents item the user wants to purchase

  let tax; // Represents tax of the purchase

  let yesOrNo = "y"; // Represents whether the user wants to continue shopping

  let itemList = document.getElementById("itemList"); // Represents list of items the user wants to purchase
    
  itemList.innerHTML = "<b>Item</b><br>"; // Adds header for item list

  let quanList = document.getElementById("quanList"); // Represents list of quantities of items the user wants to purchase
                                         
  quanList.innerHTML = "<b>Quantity</b><br>"; // Adds header for quantity list

  let unitPriceList = document.getElementById("unitPriceList"); // Represents list of unit prices of items the user wants to purchase
    
  unitPriceList.innerHTML = "<b>Unit Price</b><br>"; // Adds header for unit price list

  let totalPriceList = document.getElementById("totalPriceList"); // Represents list of total prices of items the user wants to purchase
    
  totalPriceList.innerHTML = "<b>Price</b><br>"; // Adds header for total price list

  let secSect = document.getElementById("secSect"); // Represents the labels for the second part of the invoice

  let secSect2 = document.getElementById("secSect2"); // Represents the prices shown in the second part of the invoice

  let itemTotal = 0.0; // Represents the total price of the items the user wants to purchase, no tax, no shipping

  let state; // Represents the state the user wants to ship to

  let shipping; // Represents the shipping cost of the items the user wants to purchase

  let invoice; // Represents the total cost of the items the user wants to purchase, with tax, and shipping

  let subtotal; // Represents the total cost of the items the user wants to purchase plus shipping 


  // Prompts user to pick an item to purchase and the quantity of that item they wish to purchase. All quanities are added to the appropraite variables and invalid inputs are accounted for.
  while(yesOrNo == "y"){
  
    item = prompt("What item would you like to purchase today: Chair, Recliner, Table, or Umbrella?");

    item = item.toLowerCase();

    while(!items.includes(item)){

      item = prompt("Please enter a valid item: Chair, Recliner, Table, or Umbrella?");

      item = item.toLowerCase();
    
    }

    quan = prompt("How many " + item + "s would you like to purchase?");

    while(isNaN(quan)){

      quan = prompt("Please enter a valid number: How many " + item + "s would you like to purchase?")
      
    }

    itemList.innerHTML += item.substring(0, 1).toUpperCase() + item.substring(1) + "<br>";

    quanList.innerHTML += quan + "<br>";

    itemsPrice[items.indexOf(item)] = itemsPrice[items.indexOf(item)].toFixed(2);

    unitPriceList.innerHTML += "$" + itemsPrice[items.indexOf(item)] + "<br>";

    totalPriceList.innerHTML += "$" + (itemsPrice[items.indexOf(item)] * quan) + "<br>";

    itemTotal += (itemsPrice[items.indexOf(item)] * quan);

    yesOrNo = prompt("Would you like to purchase another item? y/n");

    while(yesOrNo != "y" && yesOrNo != "n"){

      yesOrNo = prompt("Please enter a valid response: Would you like to purchase another item?");
      
    }
    
  }

  // Prompts user to pick a state to ship to. 
  state = prompt("Please enter the two letter abbreviation for your state: ");

  state = state.toUpperCase(); // Makes sure that the state abbreviation is in all caps

  // Checks if the state abbreviation is valid. If not, asks user to enter a valid state abbreviation.
  while(((zoneOne.indexOf(state) == -1 && zoneTwo.indexOf(state) == -1) && (zoneThree.indexOf(state) == -1 && zoneFour.indexOf(state) == -1)) && zoneFive.indexOf(state) == -1){

    state = prompt("Please enter a valid state abbreviation: ");
    
  }

  // Assigns a shipping cost based on the state the user wants to ship to. If the items cost is ver $100, the shipping cost is $0. 
  if(itemTotal > 100.0 || zoneOne.includes(state)){

    shipping = 0.0;
    
  }else if(zoneTwo.includes(state)){

    shipping = 20.0;
    
  }else if(zoneThree.includes(state)){

    shipping = 30.0;
    
  }else if(zoneFour.includes(state)){

    shipping = 35.0;
    
  }else{

    shipping = 45.0;
    
  }

  tax = (itemTotal+shipping) * taxRate ; // Calculates tax

  state = "<b>Shipping to " + state + ":</b>"; // Creates shipping label

  secSect.innerHTML = "<b>Item Total:</b><br>" + state + "<br>" + "<b>Subtotal:</b><br>" + "<b>Tax:</b><br>" +"<b>Invoice Total:</b><br>"; // Creates labels for the second part of the invoice

  subtotal = itemTotal + shipping; // Calculates subtotal

  subtotal = subtotal.toFixed(2); // Rounds subtotal to two decimal places
  
  invoice = itemTotal + shipping + tax; // Calculates invoice total

  invoice = invoice.toFixed(2); // Rounds invoice total to two decimal places

  itemTotal = itemTotal.toFixed(2); // Rounds item total to two decimal places

  tax = tax.toFixed(2); // Rounds tax to two decimal places

  secSect2.innerHTML = "$" + itemTotal + "<br>$" + shipping + "<br>$" + subtotal + "<br>$" + tax + "<br>$" + invoice; // Sets prices for the second part of the invoice
  
}