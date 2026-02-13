const findWordsContaining = (words, x) => {
  let res = new Set();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    for (let j = 0; j < word.length; j++) {
      const ch = word[j];

      if (ch === x) {
        res.add(i);
        break;
      }
    }
  }

  return [...res];
};

const words = ["abc", "bcd", "aaaa", "cbc"],
  x = "a";
console.log(findWordsContaining(words, x));
