const nums = [2, 5, 1, 3, 4, 7],
  n = 3;

const shuffle = (nums, n) => {
  let res = [];
  for (let i = 0; i < n; i++) {
    const x = nums[i];
    const y = nums[n + i];
    res.push(x, y);
  }

  return res;
};

console.log(shuffle(nums, n));
