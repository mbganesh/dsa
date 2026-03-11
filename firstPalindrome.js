const words = ["abc", "car", "ada", "racecar", "cool"];

var firstPalindrome = function (words) {
  let res = "";

  for (const word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }

  return res;
};

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(firstPalindrome(words));
