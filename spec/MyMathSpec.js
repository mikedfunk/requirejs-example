define(['../src/mymath'], function (mymath) {
  describe("test suite", function () {
    it("should add two numbers together", function () {
      expect(mymath.add(1, 1)).toEqual(2);
    });
  });
});
