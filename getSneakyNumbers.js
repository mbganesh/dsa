const nums = [0, 3, 2, 1, 3, 2];

const getSneakyNumbers = (nums) => {
  let res = [];
  const set = new Set();

  for (const num of nums) {
    if (!set.has(num)) {
      set.add(num);
    } else {
      res.push(num);
    }
  }

  return res;
  // ------------------
  //   const dataSet = nums.reduce((accu, init) => {
  //     if (!accu[init]) {
  //       accu[init] = 1;
  //     } else {
  //       accu[init] += 1;
  //     }
  //     return accu;
  //   }, {});
  //   let arr = [];
  //   for (const [key, value] of Object.entries(dataSet)) {
  //     if (value % 2 === 0) {
  //       arr.push(Number(key));
  //     }
  //   }
  //   return arr;
};

console.log(getSneakyNumbers(nums));
