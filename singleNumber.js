const arr = [2, 3, 1, 2, 5, 3, 5];

const singleNumber = (array) => {
  const set = new Set();

  for (let i = 0; i < array.length; i++) {
    if (set.has(array[i])) {
      set.delete(array[i]);
    } else {
      set.add(array[i]);
    }
  }

  return set.values().next().value;
  //   const map = new Map();

  //   for (let i = 0; i < array.length; i++) {
  //     const element = array[i];

  //     if (map.has(element)) {
  //       map.set(element, !map.get(element));
  //     } else {
  //       map.set(element, true);
  //     }
  //   }

  //   let result = -1;

  //   for (const [key, value] of map.entries()) {
  //     if (value) {
  //       result = key;
  //     }
  //   }

  //   return result;
};

console.log(singleNumber(arr));
