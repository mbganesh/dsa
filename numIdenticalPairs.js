const nums = [1, 2, 3, 1, 1, 3];

const numIdenticalPairs = (nums) => {
  let obj = {};
  let count = 0;

  for (const num of nums) {
    if (obj[num]) {
      count += obj[num];
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }

  return count;

  //   let result = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       console.log(i, j);
  //       if (nums[i] === nums[j]) {
  //         result++;
  //       }
  //     }
  //   }
  //   return result;
};

console.log(numIdenticalPairs(nums));
