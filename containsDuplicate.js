const nums = [1, 2, 4, 5, 6];

const containsDuplicate = (nums) => {
  //   let set = new Set(nums);

  //   return set.size === nums.length;

  let res = new Set();

  for (const num of nums) {
    if (!res.has(num)) {
      res.add(num);
    } else {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate(nums));
