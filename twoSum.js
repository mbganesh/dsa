const arr = [5, 2, -1, 0, 3];
target = 8;

function maxSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];

    let diff = currentValue - target;
    console.log(diff, i);

    if (map.has(diff)) {
      return true;
    }

    map.set(diff);
  }

  return false;

  // ------------------------------------------------
  // let left = 0;
  // let right = arr.length - 1;

  // for (let i = 0; i < arr.length; i++) {
  //   let sum = arr[left] + arr[right];
  //   if (sum === target) {
  //     return true;
  //   }
  //   if (sum > target) {
  //     right--;
  //   } else {
  //     left++;
  //   }
  // }
  // return false;

  // ------------------------------------------------

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     const element = arr[i] + arr[j];
  //     if (element === target) {
  //       return true;
  //     }
  //   }
  // }
  // return false;
}

console.log(maxSum(arr, target));

/**
 * function twoSum(arr, target) {
  // const map = new Map();

  // for (let i = 0; i < arr.length; i++) {
  //   const currentValue = arr[i];

  //   let diff = currentValue - target;
  //   console.log(diff, i);

  //   if (map.has(diff)) {
  //     return true;
  //   }

  //   map.set(diff);
  // }

  // return false;

  // ------------------------------------------------
  // let left = 0;
  // let right = arr.length - 1;

  // for (let i = 0; i < arr.length; i++) {
  //   let sum = arr[left] + arr[right];
  //   if (sum === target) {
  //     return true;
  //   }
  //   if (sum > target) {
  //     right--;
  //   } else {
  //     left++;
  //   }
  // }
  // return false;

  // ------------------------------------------------

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     const element = arr[i] + arr[j];
  //     if (element === target) {
  //       return true;
  //     }
  //   }
  // }
  // return false;
}

 */
