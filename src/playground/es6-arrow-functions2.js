const multiplier = {
  numbers: [1, 3],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
