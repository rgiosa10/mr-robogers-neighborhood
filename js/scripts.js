// Business Logic

function inputChecker(text) {
  let validInput = true;
  if (text.trim().length === 0) {
    validInput = false;
  } 
  console.log(validInput);
}


function convertToArray(text) {
  
  let textNumber = parseInt(text);
  let numberArray = [0];
  let counter = 0;
  
  for (let i = 1; i < (textNumber + 1); i += 1) {
    counter += 1;
    numberArray[i] = counter;
  }
  return numberArray;
}

function modifyArray(numberArray) {
  // Convert numbers into string array
  numberArrayString = numberArray.toString().split(",");
  
  // for loop on string to isolate for each element
  for (let i = 0; i < numberArrayString.length; i += 1) {
    element = numberArrayString[i];
    // If number is larger than 1 digit
    if (element.length > 1) {
      let hasThree = false;
      let hasTwo = false;
      let hasOne = false;
      // for loop to check each character to in element to see if it has 3, 2 , 1 in order to set Hierarchy
      for (let j = 0; j < element.length; j += 1) {
        // Branching to determine if it has 3, 2, 1
        if (element.charAt(j) === "3") {
          hasThree = true;
        } else if (element.charAt(j) === "2") {
          hasTwo = true;
          numberArray[i] = "Boop!";
        } else if (element.charAt(j) === "1") {
          hasOne = true;
          numberArray[i] = "Beep!";
        }
        // branching from top as priority where if number includes 3 (i.e. true) then substitute
        if (hasThree === true) {
          numberArray[i] = "Won't you be my neighbor?";
        } else if (hasTwo === true) {
          numberArray[i] = "Boop!";
        } else if (hasOne === true) {
          numberArray[i] = "Beep!";
        }
      }
      // If number is 1 digit
    } else {
      if (numberArray[i] === 1) {
        numberArray[i] = "Beep!";
      } else if (numberArray[i] === 2) {
        numberArray[i] = "Boop!";
      } else if (numberArray[i] === 3) {
        numberArray[i] = "Won't you be my neighbor?";
      } 
    }
  }
  // returns the modified array
  return numberArray;
}

// UI Logic

function reset() {
  // Unhide form submit button
  document.getElementById("form-submit-button").setAttribute("class", "btn btn-primary btn-lg");

  // Hide the results section and reset button
  document.getElementById("result").setAttribute("class", "hidden");
  document.getElementById("reset-btn").setAttribute("class", "hidden");

  // Reset form input and results
  document.getElementById("text-input1").value = null;
  document.getElementById("results-list").innerText = "";
  
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let results = document.getElementById("resultsText");
  let resetBtn = document.getElementById("reset-btn")

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = document.getElementById("text-input1").value;
    let numberArray = convertToArray(text);
    let resultsFinal = modifyArray(numberArray)
    let p = document.getElementById("results-list")
    
    inputChecker(text)

    // For loop in order to show each result on the webpage

    for (let i = 0; i < resultsFinal.length; i += 1) {
      p.append(i + ": " + resultsFinal[i] + ", ");
    }

    // Unhide results
    document.getElementById("result").setAttribute("class", "bottom");

    // Hide the form submit button
    document.getElementById("form-submit-button").setAttribute("class", "hidden");

    // Unhide the reset button
    document.getElementById("reset-btn").setAttribute("class","btn btn-outline-warning");
    // Event Listener for clicking the reset button
    resetBtn.addEventListener("click", reset);

  });
});
