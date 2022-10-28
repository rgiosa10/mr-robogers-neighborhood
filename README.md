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

Test: "It coverts string to number"
Code: 
const text: "5";
convertToArray(text);
Expected Output: 5

Test: "It uses the number to determine length of array to create in increments of 1"
Code: convertToArray("5");
Expected Output: [1,2,3,4,5]

```

## Known Bugs

* No known bugs 

## License

MIT License

Copyright (c) 2022 Ruben Giosa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.