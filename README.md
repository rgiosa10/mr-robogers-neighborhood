# Mr. Roboger's Neighborhood

#### By Ruben Giosa

#### This is a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number based on a few substitution conditions. 

## Technologies Used

* JavaScript
* HTML
* CSS
* Bootstrap
* Markdown
* TDD

## Description

This is a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number. This application will do the following: 1) for numbers that contain a 1, all digits are replaced with "Beep!" 2) for numbers that contain a 2, all digits are replaced with "Boop!" and 3) for numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?". 

Substitutions for the number, if it meets a condition outlined above, should apply unless the subsequent substitution number is met (e.g. 13 should be replaced with "Won't you be my neighbor?", 21 should be replaced with "Boop!", etc.). 

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

Test: "It converts string to a number"
Code: 
const text: "5";
convertToArray(text);
Expected Output: 5

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: convertToArray("5");
Expected Output: [0,1,2,3,4,5]

Test: "It checks if a number has a decimal and rounds it up to the nearest integer"
Code: 
convertToArray("2.5");
Expected Output: 3

Describe: modifyArray()

Test: "It converts 1 to 'Beep'"
Code: 
numberArray: 1;
modifyArray(numberArray);
Expected Output: 'Beep!'

Test: "It converts 2 to 'Boop'"
Code: 
modifyArray(2);
Expected Output: 'Boop!'

Test: "It converts 3 to 'Won't you be my neighbor"
Code: 
modifyArray(3);
Expected Output: 'Won't you be my neighbor?'

Test: "It substitutes elements 1, 2, and 3"
Code: 
modifyArray(5);
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5]

Test: "It substitutes a multi-digit number that has 1 inside to Beep"
Code: 
modifyArray(11);
Expected Output: [0, 'Beep!', 2, 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!']

Test: "It substitutes a multi-digit number that has 2 inside to Boop"
Code: 
modifyArray(20);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!']

Test: "It substitutes a multi-digit number that has 3 inside to Boop"
Code: 
modifyArray(13);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?']

Test: "It substitutes 31 to 'Won't you be my neighbor?'"
Code: 
modifyArray(31);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', "Won't you be my neighbor?", "Won't you be my neighbor?"]

Describe: inputChecker()

Test: "Is validate if number was inputted not empty value"
Code: 
const text: "";
inputChecker(text);
Expected Output: false

Test: "It checks if an integer was submitted as input"
Code: 
inputChecker("k");
Expected Output: false

```

## Known Bugs

* No known bugs

## License

MIT License

Copyright (c) 2022 Ruben Giosa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.