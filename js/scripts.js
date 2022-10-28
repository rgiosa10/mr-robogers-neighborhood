// Business Logic

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
  
  for (let i = 1; i < numberArray.length; i += 1) {
    element = numberArray[i].toString();
    console.log(element)
    for (let i = 1; i < element.length; i += 1) {
      if (stringOfElement.charAt(i) === 1) {
        numberArray[i] = "Beep!";
      }
    }
    
    
    
    // if (numberArray[i] === 1) {
    //   numberArray[i] = "Beep!";
    // } else if (numberArray[i] === 2) {
    //   numberArray[i] = "Boop!";
    // } else if (numberArray[i] === 3) {
    //   numberArray[i] = "Won't you be my neighbor?";
    // } 
  }
  console.log(numberArray)
}

// UI Logic



window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = document.getElementById("text-input1").value;

    numberArray = convertToArray(text);
    modifyArray(numberArray)

  });
});
