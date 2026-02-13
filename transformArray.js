const nums = [4, 3, 2, 1];

const transformArray = (nums) => {
  let result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;

  for (const num of nums) {
    if (num % 2 === 0) {
      result[left++] = 0;
    } else {
      result[right--] = 1;
    }
  }
  return result;
};

console.log(transformArray(nums));
