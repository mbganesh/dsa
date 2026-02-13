const s = " amazing coding skills ";

const reverseWords = (str) => {
  let words = [];
  let word = "";

  for (const ch of str) {
    if (ch != " ") {
      word += ch;
    } else {
      if (word.length > 0) {
        words.push(word);
        word = "";
      }
    }
  }

  if (word?.length > 0) {
    words.push(word);
    word = "";
  }
  console.log(words);

  return words.reverse().join(" ");
};

console.log(reverseWords(s));
