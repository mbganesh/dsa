// const strs = ["eat","tea","tan","ate","nat","bat"]

// const groupAnagram = arr => {

// }

// console.log(groupAnagram(strs))

const s = "rat",
  t = "car";

const validAnagram = (s, t) => {
  if (s.length != t.length) return false;

  const w1 = getWordData(s);
  const w2 = getWordData(t);
  console.log({ w1, w2 });
  for (const [key, value] of Object.entries(w2)) {
    if (w1[key] !== w2[key]) {
      return false
    }
  }
};

const getWordData = (s) => {
  let obj = {};

  for (const ch of s) {
    if (!obj[ch]) {
      obj[ch] = 1;
    } else {
      obj[ch]++;
    }
  }

  return obj;
};

console.log(validAnagram(s, t));
