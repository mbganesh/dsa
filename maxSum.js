const arr = [2, 3, 4, 1, 5],
  k = 2;

function maxSum(arr, k) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  max = sum;

  for (let i = k; i < arr.length; i++) {
    const currentValue = arr[i];
    const oldValue = arr[i - k];

    sum = sum + currentValue - oldValue;

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(maxSum(arr, k));
