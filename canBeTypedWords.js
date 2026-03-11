const canBeTypedWords = (text, brokenLetters) => {
  const res = text.split(" ").reduce((accu, init) => {
    const A = init.split("");

    const B = brokenLetters.split("");

    const isPresent = A.some((el) => B.includes(el));

    if (!isPresent) {
      accu++;
    }

    return accu;
  }, 0);

  return res;
};

const text = "leet code",
  brokenLetters = "lt";

console.log(canBeTypedWords(text, brokenLetters));
