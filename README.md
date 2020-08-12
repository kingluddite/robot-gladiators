Robot Gladiators

## Cool stuff
* Command line magic
    - We were able to execute all the commands by writing them together on the same line, separated by semicolons,`;`
    - The semicolon is used to delimit each command
    - The computer can simply execute each command as if they were on separate lines
* A semicolon in programming is often referred to as a `terminator`, meaning that it is used to inform the computer reading and running the code where a command ends so the next command can begin

`$ mkdir assets; cd assets; mkdir js; cd js; touch game.js; cd ../../;`

### Open in VS Code
* What does the period `.` in the `$ code .` command mean?
    - A single period `.` tells the computer we're referring to the current active directory
    - The code `.` command loads every file and folder in the current directory into VS Code

## HTML
`index.html`

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Robot Gladiators!</title>
  </head>
  <body>
    <script src="./assets/js/game.js"></script>
  </body>
</html>
```

* The `<script>` element is used to incorporate JavaScript code
* Notice the `src` attribute that's being used here. When we use `<script src="path/to/file.js"></script>`, we are instructing the browser to go look for a JavaScript file at that path's location and incorporate it into the HTML file

### Why should we place `script` towards the bottom of the HTML file? 
* When a browser sees a `<script>` element in the HTML file, it immediately runs the JavaScript in the file, preventing the browser from moving onto the next HTML tag until it's finished
* This could delay the HTML content from making it to the page
* Even worse, if the JavaScript file contains an error, the browser could just stop loading the page altogether
    - This means the page would indefinitely stay blank, leaving the user confused and frustrated.
* This is why it is a **best practice** to load the CSS first
    - that way, the HTML can load with the styles in place as it displays on the page
    - The `<script>` element is added after all the important HTML content, right above the closing `</body>` HTML tag
    - This way, even if the JavaScript file takes a little long to load or breaks, there is still a styled HTML page for the user to see
* `window.alert()` - Consider what the word window might refer to in that piece of code
    - Also think about the `alert()` syntax and which programming concept it falls under
        + Does it store data or perform an action?

## Browser dev tools
* The console isn't part of the JavaScript language
* It's another object like the window provided to us by the browser, which makes it a web API
* The console object has its own set of functions and properties that interface with the browser's console window (in Chrome, it's the DevTools Console tab we just used)
* When we create a variable or function in the DevTools Console and press Enter, it will often return a value of `undefined`
    - Don't worry—this isn't an error
    - The console evaluates every piece of code and attempts to return a result
    - But there is nothing to return for a variable, so it returns the value `undefined` by default


## Functions
### Function declaration
* There are two methods to create a function in JavaScript:

```
// create function
function fight() {
  window.alert("Welcome to Robot Gladiators!");
}
// execute function
fight();
```

### Function expression
* This is when we create a function by assigning it to a variable

```
// create function
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};
// execute function
fight();
```

## Not using the `var` keyword
* If there is no var keyword
* We use `var` to create new variables, but we may want to update the value of a variable that already exists
    - Using the `var` keyword would create a new variable inside the function, meaning that the variable we created at the top of the file and outside the function would be unaffected
    - This is called `scoping a variable`
*  We have different meanings to the left or right of an assignment operator
    - Listing the variable on the left side means we'll store data to that variable
    - Listing the variable on the right side means we'll use the actual value that variable holds at that moment
