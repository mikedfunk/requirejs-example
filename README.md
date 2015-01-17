## Setup
* `npm install`
* `./node_modules/karma/bin/karma start` to run the spec

## Using requirejs, jasmine, karma, and phantomjs in another project
* if you don't have a `packages.json` yet, `npm init` and hit enter until done
* `npm install --save-dev jasmine karma-jasmine karma-requirejs karma-phantomjs-launcher phantomjs bower`
* if you don't have a `bower.json` yet, `bower init` and hit enter until done
* `bower install --save-dev requirejs`
* `jasmine init` to get a base for javascript spec testing
* `karma init` and choose defaults except for:
    * _Do you want to use Require.js?_ Select `yes`.
    * _Do you want to capture any browsers automatically?_ Select `PhantomJS`.
    * _What is the location of your source and test files?_
        * Enter `src/**/*.js`
        * Enter `spec/**/*Spec.js`

    * _Do you wanna generate a bootstrap file for RequireJS?_
        * Select `yes`
* Write a spec in `spec/MyClassSpec.js`
* `karma start` to start watching. It will fail until you write code to make
  your spec pass.
* write enough code to make your spec pass. Karma should see your change and
  notify you that it passed. Time to refactor! (red -> green -> refactor)
* create a `src/main.js` file and put something like this in it:

```javascript
// mymodule is the name of the module's file under src without the .js
require(["mymodule"], function (mymodule) {
  // do something with mymodule
});
```

* create an `index.html` (or use some other html) and add a script tag like this:

```javascript
<!-- data-main tells you where the require.js main file (app file) is -->
<script type="text/javascript" data-main="src/main" src="bower_components/requirejs/require.js"></script>
```

* load your index in the browser. You now have a tested requirejs module that
  you can use in the browser!
