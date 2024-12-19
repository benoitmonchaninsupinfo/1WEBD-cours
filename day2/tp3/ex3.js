const nums = [3, 5, 7, 9, 11];

const double = nums.map((num) => num * 2);

console.log(double);

const bigNums = double.filter((num) => num > 10);

console.log(bigNums);

let sumDouble = 0;
double.forEach((num) => (sumDouble += num));

let sumBigNums = 0;
bigNums.forEach((num) => (sumBigNums += num));

console.log({ sumDouble, sumBigNums });
