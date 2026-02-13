const digits = [5, 9, 9]; // => 400
// const digits = [4, 5, 9, 9]; // => 4600

// [4,5,9,0]
// [4,5,0,0]
// [4,6,0,0]
// [5,6,0,0]

const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;

  // *********************************************************
  //   let result = [];
  //   for (let i = 0; i < digits.length; i++) {
  //     const element = digits[i];
  //     if (i === digits.length - 1) {
  //       if (element + 1 > 9) {
  //         result.push(...[element]);
  //       } else {
  //         result.push(element + 1);
  //       }
  //     } else {
  //       result.push(element);
  //     }
  //   }
  //   return result;
  // *********************************************************
  //   let addOne = "";
  //   digits.forEach((element) => {
  //     addOne += element;
  //   });
  //   return Number(String(BigInt(addOne) + 1n));
};

console.log(plusOne(digits));
