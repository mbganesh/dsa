const str = ["flower", "flow", "flight"];

const longestCommonPrefix = (arr) => {
  let lastIndex = 0;
  const strs = arr.sort((a, b) => a - b);
  let firstStr = strs[0];
  let lastStr = strs[arr.length - 1];
  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) lastIndex++;
  }
  return firstStr.slice(0, lastIndex);
};

console.log(longestCommonPrefix(str));
