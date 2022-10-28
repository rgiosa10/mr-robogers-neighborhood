# Mr. Roboger's Neighborhood

#### By Ruben Giosa

#### This is a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number.

## Technologies Used

* JavaScript
* HTML
* CSS
* Bootstrap
* Markdown
* TDD

## Description

This is a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number. This application will do the following: 1) For numbers that contain a 1, all digits are replaced with "Beep!" 2) For numbers that contain a 2, all digits are replaced with "Boop!" and 3) For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?". 

## Setup/Installation Requirements

* Go to https://github.com/rgiosa10/mr-robogers-neighborhood.git to find the specific repository for this website.
* Then open your terminal. I recommend going to your Desktop directory (command: $ cd Desktop).
* Then clone the project by inputting: $ git clone https://github.com/rgiosa10/mr-robogers-neighborhood.git
* Go to the new directory (command: $ cd mr-robogers-neighborhood) or open the directory folder on your desktop.
* Finally, locate the index.html file and double-click to open. That will open the app on your web browser.
* Here is a link to the site on Git Hub Pages: https://rgiosa10.github.io/mr-robogers-neighborhood 

## Tests

```
Describe: convertToArray()

Test: "It converts string to number"
Code: 
const text: "5";
convertToArray(text);
Expected Output: 5

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: convertToArray("5");
Expected Output: [0,1,2,3,4,5]

Describe: modifyArray()

Test: "It converts 1 to 'Beep'"
Code: 
const text: "1";
modifyArray(numberArray);
Expected Output: 'Beep!'

Test: "It converts 2 to 'Boop'"
Code: 
const text: "2";
modifyArray(numberArray);
Expected Output: 'Boop!'

Test: "It converts 3 to 'Won't you be my neighbor"
Code: 
const text: "3";
modifyArray(numberArray);
Expected Output: 'Won't you be my neighbor?'

Test: "It substitutes elements 1, 2, and 3"
Code: 
const text: "5";
modifyArray(numberArray);
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5]

Test: "It substitutes a multi-digit number that has 1 inside to Beep"
Code: 
text = 11
modifyArray(numberArray);
Expected Output: [0, 'Beep!', 2, 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!']

Test: "It substitutes a multi-digit number that has 2 inside to Boop"
Code: 
text = 20
modifyArray(numberArray);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!']

Test: "It substitutes a multi-digit number that has 3 inside to Boop"
Code: 
text = 13
modifyArray(numberArray);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?']

Test: "It substitutes 31 to 'Won't you be my neighbor?'"
Code: 
text = 31
modifyArray(numberArray);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', "Won't you be my neighbor?", "Won't you be my neighbor?"]

Describe: inputChecker(

Test: "Is validate if number was inputted not empty value"
Code: 
const text: "";
inputChecker(text);
Expected Output: 0



```

## Known Bugs

* No known bugs 

## License

MIT License

Copyright (c) 2022 Ruben Giosa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.