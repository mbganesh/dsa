const searchInsert = (nums, target) => {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] >= target) {
      return index;
    }
  }

  return nums.length;
};

const nums = [1, 3, 5, 6],
  target = 2;
console.log(searchInsert(nums, target));
