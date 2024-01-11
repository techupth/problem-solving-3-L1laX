// Exercise 1: Length of Last Word

const lengthOfLastWord = function (s) {
  //Start coding here
  const str = s.trim().split("").reverse();
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === " ") {
      return str.slice(0, i).length;
    }
  }
};

const result1 = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log(result1); // 5
console.log(result2); // 4
console.log(result3); // 6

// const lengthOfLastWord = function (s) {
//   //Start coding here
//   const str = s.split(" ");
//   let result;
//   console.log(str);
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] !== "") {
//       result = str[i];
//       console.log(result)
//       return result.length;
//     }
//   }
// };

// const result1 = lengthOfLastWord("Hello World");
// const result2 = lengthOfLastWord("   fly me   to   the moon  ");
// const result3 = lengthOfLastWord("luffy is still joyboy");

// console.log(result1); // 5
// console.log(result2); // 4
// console.log(result3); // 6
