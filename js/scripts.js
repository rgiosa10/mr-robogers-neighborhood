// Business Logic

function convertToArray(text) {
  let textNumber = parseInt(text);
  let numberArray = [0];
  let counter = 0;
  
  for (let i = 1; i < 6; i += 1) {
    counter += 1;
    numberArray[i] = counter;
  }
  console.log(numberArray);
}

convertToArray("5");

// UI Logic