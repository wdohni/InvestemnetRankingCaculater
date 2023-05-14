function getInformation() {
  
  // Declare variables
  // Property information fields
  var address = "";
  var purchasePrice = 0; // should be greater than zero
  var yearBuilt = 0; // should be greater than 1800
  var size = 0; // should be greater than zero

  // Income Information field
  var rentaPrice = 0; // should be greater than zero
  var rentalIncome = 0; // caculated field
  var annualProfit = 0; // calculated field
  var ROI = 0; // calculated field
  var propertyRanking = "";

  // Expense information fields
  var propertyTax = 0; // should be greater than zero
  var interestPayment = 0; // calculated field
  var insurance = 0; //calculated field
  var maintenance = 0; // calculated field
  var vacancy = 0.05;
  var propertyManagement = 0;// calculated field

  // Mortgage information fields
  var downPayment = 0;
  var interestRate = 0; //Number between 0 and 100

  //processing fields
  var currentYear = 0;
  var propertyAge = 0;
  var insuranceRate = 0;
  var maintenanceRatePerSquareFeet = 0;
  var errorMessage = "This is not a valid entry";
  var loopTest = true;
    

  //prompt the user for valid entries
  while (loopTest) {
    address = prompt("Enter the address of the property.", "Main Street");
    if (address !== "") {
      loopTest = false; // end loop if address is not empty
    }
  }

  loopTest = true; // reset loopTest for the next prompt

  while (loopTest) {
    purchasePrice = prompt("Enter the purchase price of the property. Entry should be more than 0.", 200000);
    purchasePrice = Number(purchasePrice);
    if (isNaN(purchasePrice) || purchasePrice <= 0) {
      alert(errorMessage);
    } else {
      loopTest = false; // end loop if the number entered is valid
    }
  }

  loopTest = true; // reset loopTest for the next prompt

  while (loopTest) {
    yearBuilt = prompt("Enter the year the property was built. Entry should be more than 1800.", 2010);
    yearBuilt = Number(yearBuilt);
    if (isNaN(yearBuilt) || yearBuilt <= 1800) {
      alert(errorMessage);
    } else {
      loopTest = false; // end loop if the number entered is valid
    }
  }

  loopTest = true; // reset loopTest for the next prompt

  while (loopTest) {
    size = prompt("Enter the size of the property in square feet. Entry should be more than 0.", 1800);
    size = Number(size);
    if (isNaN(size) || size <= 0) {
      alert(errorMessage);
    } else {
      loopTest = false; // end loop if the number entered is valid
    }
  }

  loopTest = true; // reset loopTest for the next prompt

  while (loopTest) {
    rentaPrice = prompt("Enter the monthly rent price. Entry should be more than 0.", 1800);
    rentaPrice = Number(rentaPrice);
    if (isNaN(rentaPrice) || rentaPrice <= 0) {
      alert(errorMessage);
    } else {
      loopTest = false; // end loop if the number entered is valid
    }
  }

  loopTest = true; // reset loopTest for the next prompt

  while (loopTest) {
    propertyTax = prompt("Enter the annual property tax for the property. Entry should be more than 0.", 2600);
    propertyTax = Number(propertyTax);
    if (isNaN(propertyTax) || propertyTax <= 0) {
      alert(errorMessage);
    } else {
      loopTest = false; // end loop if the number entered is valid
    }
  }

  loopTest = true; // reset loopTest for the next prompt

  while(loopTest){
    downPayment = prompt("Enter your Down Payment. Entry should be more than 0.", 60000);
    downPayment = Number(downPayment);
    if(isNaN(downPayment) || downPayment <= 0) {
      alert(errorMessage);
    } else {
      loopTest = false; //end loop if the number entered is valid
    }
  }

  loopTest = true; //reset loopTest for the next prompt

  while(loopTest){
    interestRate = prompt("Enter the interest rate. Entry should be between 0 and 100", 5);
    interestRate = Number(interestRate);
    if(isNaN(interestRate) || interestRate < 0 || interestRate > 100) {
      alert(errorMessage);
    } else {
      loopTest = false; //end loop if the number entered is valid
    }
  }

  // calculated fields
  rentalIncome = Math.round((rentaPrice * 12) * (1 - vacancy)); // assuming 5% vacancy rate.  
  
  propertyManagement = Math.round(rentalIncome * 0.07);
  
  interestPayment = Math.round((purchasePrice - downPayment) * (interestRate/100));

  currentYear = new Date().getFullYear();
  propertyAge = currentYear - yearBuilt;
  insuranceRate = 0.005 + (0.001 * Math.floor(propertyAge / 5)); // additional 0.001 for every 5 years of property age
  insurance = Math.round(purchasePrice * insuranceRate); // Insurance is calculated  based on purchase price and Age

  maintenanceRatePerSquareFeet = Math.round(1.25 + (0.25 * Math.floor(propertyAge / 5))); // additional 0.25 cent for every 5 years of property age
  maintenance = Math.round(maintenanceRatePerSquareFeet * size); // maintenance is calculated  based on age and size
  
  annualProfit = rentalIncome - propertyManagement - propertyTax - interestPayment - insurance - maintenance 
  
  ROI = annualProfit/ purchasePrice
  
  switch (true) {
    case (ROI > 0.1): propertyRanking = "A";
    break;
    case (ROI > 0.07): propertyRanking = "B";
    break;
    case (ROI > 0.04): propertyRanking = "C";
    break;
    case (ROI > 0.01): propertyRanking = "D";
    break;
    default: propertyRanking = "F";
    break;
  }

  // display output
  document.write("<h2>Result: \n<\h2>");
  document.write("<h3>We rank " + address +" investment opportunity as a: <strong><h2>" + propertyRanking  + "<strong></h2></h3>");
  
  document.write("<h4>Here is what you entered: \n</h4>");
  document.write("  Purchase Price:                      $" + purchasePrice + "\n");
  document.write("  Year Built:                           " + yearBuilt + "\n");
  document.write("  Size:                                 " + size + " sq ft \n");
  document.write("  Monthly rent price:                  $" + rentaPrice +"\n");
  document.write("  Annual Rental Income:                $" + rentalIncome + "\n");
  document.write("  Down Payment:                        $" + downPayment + "\n");
  document.write("  Interest rate:                        " + interestRate +"%\n\n");
  
  document.write("<h4>Here is what we calculated for you:\n</h4>")
  document.write("  The estimate Annual Gross Income is: $" + rentalIncome + "\n");
  document.write("  Property Tax:                       ($" + propertyTax + ")\n");
  document.write("  Property Management fees:           ($" + propertyManagement + ")\n");
  document.write("  Interest Payment:                   ($" + interestPayment + ")\n");
  document.write("  Insurance Payment:                  ($" + insurance + ")\n");
  document.write("  Maintenance:                        ($" + maintenance + ")\n\n");

  document.write("The estimate annual Expenses is:       $" + (propertyManagement + propertyTax + interestPayment + insurance + maintenance) + "\n");
  document.write("The expected annual profit is:         $" + annualProfit + "\n"); 
  document.write("The return on investment is:            " + (ROI * 100).toFixed(2) + "%\n");
}


// Main program

// Declare variables
var loopTest = true;
var errorMessage = "This is not a valid entry";

// run program for first property
getInformation()

// start a loop for additional properties
while(loopTest){
  loopTest = prompt("Would you like to enter information about another investment property, please enter y or n", "n");
  if(loopTest === "y") {
    getInformation()
  }else if (loopTest !== "y" && loopTest !== "n") {
    alert(errorMessage);
  }else if(loopTest === "n") {     
    loopTest = false; //end loop
  }
}



