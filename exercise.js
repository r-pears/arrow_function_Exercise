// ES2015
const double = (arr) => arr.map((val) => val * 2);

// Refactor
const squareAndFindEvens = (numbers) =>
  numbers.map((num) => Math.pow(num, 2)).filter((val) => val % 2 === 0);
