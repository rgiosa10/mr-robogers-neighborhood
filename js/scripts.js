// Business Logic

function inputChecker(text) {
  let validInput = true;
  if (text.trim().length === 0) {
    validInput = false;
  } else if (Number.isInteger(parseInt(text)) != true) {
    validInput = false;
  }
  return validInput;
}

function convertToArray(text) {
  let textNumber = Math.round(parseFloat(text));
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
  let numberArrayString = numberArray.toString().split(",");
  
  // for loop on string to isolate for each element
  for (let i = 0; i < numberArrayString.length; i += 1) {
    let element = numberArrayString[i];
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
      } else if (element.charAt(j) === "1") {
        hasOne = true;
      }
      // branching from top as priority where if number includes 3 (i.e. true) then substitute
      if (hasThree === true) {
        numberArrayString[i] = "Won't you be my neighbor?";
      } else if (hasTwo === true) {
        numberArrayString[i] = "Boop!";
      } else if (hasOne === true) {
        numberArrayString[i] = "Beep!";
      }
    }
  }
  // returns the modified array
  return numberArrayString;
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
  let resetBtn = document.getElementById("reset-btn");
  let submitBtn = document.getElementById("form-submit-button");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = document.getElementById("text-input1").value;
    const validInput = inputChecker(text);
    const numberArray = convertToArray(text);
    const resultsFinal = modifyArray(numberArray);
    let pTitle = document.getElementById("resultText");
    let p = document.getElementById("results-list");
    
    // Added clear to prevent seeing multiple submission results
    document.getElementById("results-list").innerText = "";

    // For loop in order to show each result on the webpage
    if (validInput === true) {
      pTitle.innerText = "Here are the results:";
      let ul = document.createElement("ul");
      for (let i = 0; i < resultsFinal.length; i += 1) {
        let li = document.createElement("li");
        document.getElementById("results-list").append(ul);
        ul.append(li);
        li.append(resultsFinal[i]+ " at " + i);
      }
    } else {
      pTitle.innerText = "";
      p.append("Please input a number (no: letters or characters)");
    }  
    
    // Unhide results
    document.getElementById("result").setAttribute("class", "bottom");
    // Hide the form submit button
    submitBtn.setAttribute("class", "hidden");
    // Unhide the reset button
    resetBtn.setAttribute("class","btn btn-outline-warning");
    // Event Listener for clicking the reset button
    resetBtn.addEventListener("click", reset);
  });
});
