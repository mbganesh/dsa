let ar = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10, [11, 12]];

const flattenArray = (arr) => {
  let result = [];

  function flatterArrayHelper(a) {
    for (let i = 0; i < a.length; i++) {
      const current = a[i];

      if (Array.isArray(current)) {
        flatterArrayHelper(current);
      } else {
        result.push(current);
      }
    }
  }

  flatterArrayHelper(arr);

  return result;
};

const flattenArrayUtil = (arr) => {
  return arr.reduce(
    (acc, v) => acc.concat(Array.isArray(v) ? flattenArrayUtil(v) : v),
    [],
  );

  //   return arr.flat(Infinity)
};

let a1 = ["ganesh", 5, 500, "little", "s", "300", -20];

const separateVariables = (arr) => {
  return arr.reduce((acc, val) => {
    const type =
      typeof val === "string"
        ? val.length === 1
          ? "char"
          : typeof val
        : typeof val;

    if (acc[type]) {
      acc[type].push(val);
    } else {
      acc[type] = [val];
    }

    return acc;
  }, {});
};

let a2 = ["vendant", "dent"];

const isValidSubString = ([s1, s2]) => {
  const set = new Set(s1);
  return [...s2].every((ch) => set.has(ch));

  //   const [s1, s2] = arr;
  //   let map = new Set(s1.split(""));

  //   let result = true;
  //   for (let i = 0; i < s2.length; i++) {
  //     if (!map.has(s2[i])) {
  //       return false;
  //     }
  //   }

  //   return result;
};

// console.log(isValidSubString(a2));

console.log("ganesh" + 100 - 50);
