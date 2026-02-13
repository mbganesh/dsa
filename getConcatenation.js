const getConcatenation = (nums) => {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    nums[n + i] = nums[i];
  }

  return nums;
};

const nums = [1, 2, 3];

console.log(getConcatenation(nums));
