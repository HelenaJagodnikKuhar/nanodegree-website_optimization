# Website Performance Optimization portfolio project
My challenge was to optimize online portfolio for speed.

I used Gulp to automatically perform optimizations such as minification of CSS and JS and inlining.

## index.development.html
- disabled web fonts
- minified and inlined style sheets with gulp
- defined print media type for loading print.css stylesheet
- defined async attribute for asynchronous loading Google Analytics
- resized and optimized image compression ratios

## pizza.development.html
- minified and inlined style sheets with gulp
- resized and optimized image compression ratios

## main.js
- instate of changing pizzas sizes which causes a lot of DOM changes I implemented the size change with simple CSS rules
- minimized css queries in for loops
- made scroll animations with CSS transform (to minimize layout recalculations)
- resized and optimized image compression ratios
- remove the use of the DOMContentLoaded event to avoid recalculations 
- changed the updatePositions function to avoid unnecessary recalculation to get the scrollTop value

[Demo](https://helenajagodnikkuhar.github.io/nanodegree-website_optimization/)

### Getting started /  Installation

Clone the GitHub repository and run the index.html file in your browser. Or you can use the [Demo](https://helenajagodnikkuhar.github.io/nanodegree-website_optimization/)

### Installation

For building and testing it requires:
Check for Node and npm.
```sh
$ node --version
$ npm --version
```

Builds requires Gulp

```sh
$ cd /online portfolio
$ npm install
$ node gulp.js
```
For testing start the server.

```sh
$ cd /online portfolio
$ npm install http-server -g
$ http-server
```
Visit http://localhost:8080 to view your server.

### Tech

The online portfolio uses open source projects to work properly:

* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - for builds
* [Gulp] - the streaming build system

### Contributing
Project assets were written as part of a Frontend nanodegree Website Performance Optimization portfolio project submission. The material is [here](https://github.com/udacity/frontend-nanodegree-mobile-portfolio).
I optimize the critical rendering path and make the page render as quickly as possible by applying the techniques I've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

### License
The contents of this repository are covered under the [CC BY 3.0 USß](https://creativecommons.org/licenses/by/3.0/us/).

