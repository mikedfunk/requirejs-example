(function () {
  'use strict';
  //
  // requirejs define variable
  define(['../src/mymath'], function (mymath) {
    // jasmine test suite
    describe("test suite", function () {
      // jasmine test
      it("should add two numbers together", function () {
        // jasmine assertion
        expect(mymath.add(1, 1)).toEqual(2);
      });
    });
  });
}());
