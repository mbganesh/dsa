class Utils {
  test(data) {
    const result = data.reduce((accu, value, index) => {
      let objKey = value.key;
      if (!accu[objKey]) {
        accu[objKey] = [value];
      } else {
        accu[objKey].push(value);
      }
      return accu;
    }, {});

    return result;
  }

  memorizeOne(fn) {
    let cache;

    return function (...args) {
      if (cache !== undefined) return cache;
      console.log("fresh arg");
      cache = fn(...args);
      return cache;
    };
  }

  add(a, b) {
    return a + b;
  }

  flattenArray(arr) {
    let a = [];

    flatit(arr);

    function flatit(ar) {
      for (let i = 0; i < ar.length; i++) {
        const element = ar[i];

        if (Array.isArray(element)) {
          flatit(element);
        } else {
          a.push(element);
        }
      }
    }

    return a;
  }
}

const U = new Utils();

let ar = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10, [11, 12]];
console.log(U.flattenArray(ar));

// const memoAdd = U.memorizeOne(U.add);

// console.log(memoAdd(1, 2));
// console.log(memoAdd(5, 6));
// console.log(memoAdd(1, 2));

const input = [
  {
    key: "sample 1",
    value: "Data 1",
  },
  {
    key: "sample 1",
    value: "Data 1",
  },
  {
    key: "sample 2",
    value: "Data 2",
  },
  {
    key: "sample 2",
    value: "Data 2",
  },
  {
    key: "sample 3",
    value: "Data 3",
  },
  {
    key: "sample 4",
    value: "Data 4",
  },
  {
    key: "sample 4",
    value: "Data 4",
  },
];

// console.log(U.test(input));

// {
//   'sample 1':[
//     {
//       key:'sample 1',
//       value:'Data 1'
//     },
//     {
//       key:'sample 1',
//       value:'Data 1'
//     }
//   ],
//   'Sample 2':[]......
// }

// A
// C
// 1
// 2
// B
