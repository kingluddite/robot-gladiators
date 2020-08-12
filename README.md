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
