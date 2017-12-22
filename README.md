# List of 20 Books
===

Alisting of 20 books including title, description and image.

## Project overview
- A simple app written in JavaScript.
- The app uses RequireJS to load dependencies.
- JavaScript is linted using JSHint.
- Project dependencies are managed using npm.
- The HTML is genrated with the help of mustache templates.
- SASS preprocessor is used to employ modular CSS.
- The implementation stops short of any minification/uglification of the JS code or automated tests.


## Project structure

File/folder         |Description
--------------------|--------------------------------------------
.jshintrc           |Config for JavaScript linting with JSHint
Gruntfile.js        |Grunt task definitions and config
package.json        |List of packages to be installed by npm
README.md           |This file
public/             |Built project files
src/                |Source files for the project
src/js              |JavaScript files
src/scss            |CSS styles



---

### Dependencies
It is assumed that you have the following libraries installed locally:

* [node](https://nodejs.org/en/)
* npm
* [grunt-cli](https://gruntjs.com/getting-started) node plugin

### Set up project and Build the app
Install all node dependencies from the command line in the root folder of this project:
```
$ npm install
```

Run the tests, build and open the app in a browser by running the default grunt command:
```
$ grunt
```

## Run
The built project can be found in the `/public` directory. Simply opening `/public/index.html` in your browser will demonstrate the app.

---

### JS error detection
Linting is performed using JSHint.
