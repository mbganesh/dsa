const nums = [3, 6, 9];

var minimumOperations = function (nums) {
  let res = nums.length;

  for (const n of nums) {
    if (n % 3 === 0) {
      res--;
    }
  }

  return res;
};

console.log(minimumOperations(nums));
