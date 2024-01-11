// Exercise 2: Single Number

const singleNumber = function (nums) {
  // Start coding here
  const checknums = nums.sort((a, b) => a - b);

  const checked = [];
  for (let i = 0; i <= checknums.length - 1; i++) {
    if (
      checknums[i - 1] !== checknums[i] &&
      checknums[i] !== checknums[i + 1]
    ) {
      checked.push(checknums[i]);
    }
  }
  if (checked.length !== 1) {
    return checked;
  } else {
    return checked[0];
  }
};

const result1 = singleNumber([2, 2, 1]);
const result2 = singleNumber([4, 1, 2, 1, 2]);
const result3 = singleNumber([1]);

const result4 = singleNumber([5, 7, 5, 9, 8, 1, 8, 8, 8, 9, 10]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 1

console.log(result4);




