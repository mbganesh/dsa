const nums = [1, 2, 1];

const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(nums)
  return k;
};

console.log(removeDuplicates(nums));
