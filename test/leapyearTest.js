const assert = require("chai").assert;
const { expect } = require("chai");
const leapYear = require("../leapyear");

describe("Default failed test to start with", function () {
  it("This test should always return failed as default.", function () {
    leapYear.failedTest();
    expect.fail(
      "This test is made to fail by purpose to have a starting point"
    );
  });
});

describe("\nTesting seperate calculations\n", function () {
  describe("Is given number divisable by 4", function () {
    it("20 is divisable by 4 and should return true", function () {
      let result = leapYear.isDivisibleByFour(20);
      assert.equal(result, true);
    });
    it("110 is not divisable by 4 and should return false", function () {
      let result = leapYear.isDivisibleByFour(110);
      assert.equal(result, false);
    });
  });

  describe("Is given number divisable by 100", function () {
    it("200 is divisable by 100 and should return true", function () {
      let result = leapYear.isDivisibleByHundred(200);
      assert.equal(result, true);
    });
    it("110 is not divisable by 100 and should return false", function () {
      let result = leapYear.isDivisibleByHundred(110);
      assert.equal(result, false);
    });
  });

  describe("Is given number divisable by 400", function () {
    it("800 is divisible by 400 and should return true", function () {
      let result = leapYear.isDivisibleByFourHundred(800);
      assert.equal(result, true);
    });
    it("333 is not divisable by 400 and should return false", function () {
      let result = leapYear.isDivisibleByFourHundred(333);
      assert.equal(result, false);
    });
  });
});

describe("\nAcceptance Criteria Testing\n", function () {
  describe("Year is Leap Year if:\n", () => {
    describe("It is divisible by 4, but not 100", () => {
      it("Should return true for year 2364 as it is divisable by 4, but not 100", function () {
        let result = leapYear.isLeapYear(2364);
        assert.equal(result, true);
      });
      it("Should return true for year 2004 as it is divisable by 4, but not 100", function () {
        let result = leapYear.isLeapYear(2004);
        assert.equal(result, true);
      });
    });

    describe("It is divisible by 400", () => {
      it("Should return true for year 2000 as it is divisable by 400", function () {
        let result = leapYear.isLeapYear(2000);
        assert.equal(result, true);
      });
      it("Should return true for year 1600 as it is divisable by 400", function () {
        let result = leapYear.isLeapYear(1600);
        assert.equal(result, true);
      });
    });
  });

  describe("\nYear is not Leap Year if:\n", () => {
    describe("It is not divisible by 4", () => {
      it("Should return false for year 2023 as it is not divisible by 4", function () {
        let result = leapYear.isLeapYear(2023);
        assert.equal(result, false);
      });
      it("Should return false for year 1997 as it is not divisable by 4", function () {
        let result = leapYear.isLeapYear(1997);
        assert.equal(result, false);
      });
      it("Should return false for year 1945 as it is not divisable by 4", function () {
        let result = leapYear.isLeapYear(1945);
        assert.equal(result, false);
      });
    });

    describe("It is divisible by 100, but not 400", () => {
      it("Should return false for year 1700, as it is divisable by 100, but not 400", function () {
        let result = leapYear.isLeapYear(1700);
        assert.equal(result, false);
      });
      it("Should return false for year 1800 as it is divisable by 100, but not 400", function () {
        let result = leapYear.isLeapYear(1800);
        assert.equal(result, false);
      });
      it("Should return false for year 1900 as it is divisable by 100, but not 400", function () {
        let result = leapYear.isLeapYear(1900);
        assert.equal(result, false);
      });
      it("Should return false for year 2100 as it is divisable by 100, but not 400", function () {
        let result = leapYear.isLeapYear(2100);
        assert.equal(result, false);
      });
    });
  });
});
