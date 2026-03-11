var alternatingSum = function (nums) {
  const result = nums.reduce((a, v, i) => {
    if (i % 2 === 0) {
      a += v;
    } else {
      a -= v;
    }
    return a;
  }, 0);

  return result;
};

const nums = [1, 3, 5, 7];

console.log(alternatingSum(nums));
