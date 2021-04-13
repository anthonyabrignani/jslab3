const newArray = [2, 5, 9, 3, 20, 6];

const isGreaterThan = (number) => number > 6;

console.log(newArray.every(isGreaterThan));

const findBiggest = (number) => number > 10;

console.log(newArray.find(findBiggest));
