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
    if (numberArray[i] === 1) {
      numberArray[i] = "Beep!";
    } 
  }
  console.log(numberArray)
}

// UI Logic

numberArray = convertToArray("1");
modifyArray(numberArray)
