## Setup
* `npm install`
* `./node_modules/karma/bin/karma start` to run the spec

## Using requirejs, jasmine, karma, and phantomjs in another project
* if you don't have a `packages.json` yet, `npm init` and hit enter until done
* `npm install --save-dev jasmine karma-jasmine karma-requirejs karma-phantomjs-launcher phantomjs bower`
* if you don't have a `bower.json` yet, `bower init` and hit enter until done
* `bower install --save-dev requirejs`
* `jasmine init` to get a base for javascript spec testing
* `karma init`
