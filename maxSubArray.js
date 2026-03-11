const nums =  [12, 29, 333, 404, 555 , 999];

const reverseIt = (nums) => {
  let r = nums.length - 1;
  let l = 0;

  while (l < r) {
    let a = nums[l];
    let b = nums[r];

    [nums[l] , nums[r]] = [nums[r] , nums[l]]

    // if (a < b) {
    //   let t = a;
    //   nums[l] = b;
    //   nums[r] = t;
      r--;
      l++;
    // }
  }

  return nums;
};

console.log(reverseIt(nums));
