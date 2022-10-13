module.exports = {
  failedTest: function () {
    console.log("Failing test");
  },

  // Unnecessarily split into small pieces to play around with testing

  isDivisibleByFour: function (number) {
    if (number % 4 == 0) {
      return true;
    } else {
      return false;
    }
  },
  isDivisibleByHundred: function (number) {
    if (number % 100 == 0) {
      return true;
    } else {
      return false;
    }
  },
  isDivisibleByFourHundred: function (number) {
    if (number % 400 == 0) {
      return true;
    } else {
      return false;
    }
  },

  isLeapYear: function (year) {
    if (
      (this.isDivisibleByFour(year) == true &&
        this.isDivisibleByHundred(year) == false) ||
      this.isDivisibleByFourHundred(year) == true
    ) {
      return true;
    } else return false;
  },
};

console.log(module.exports.isLeapYear(2023));
