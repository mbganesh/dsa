class Utils {
  getFunctionName(str) {
    return str
      .split("-")
      .map((el) => {
        if (el.length < 3) return el.toUpperCase();
        const first = el[0].toUpperCase();
        return first + el.slice(1, el.length);
      })
      .join("");
  }
}

class Patterns extends Utils {
  RectangularStarPattern() {
    for (let i = 0; i < 5; i++) {
      let star = "";
      for (let j = 0; j < 5; j++) {
        star += " * ";
      }
      console.log(star);
    }
  }

  RightAngledTrianglePattern() {
    for (let i = 0; i < 5; i++) {
      let star = "";
      for (let j = 0; j <= i; j++) {
        star += " * ";
      }
      console.log(star);
    }
  }

  RightAngledNumberPyramidII() {
    for (let i = 1; i <= 5; i++) {
      let num = "";
      for (let j = 1; j <= i; j++) {
        num += `${i}`;
      }
      console.log(num);
    }
  }

  RightAngledNumberPyramid() {
    for (let i = 1; i <= 5; i++) {
      let num = "";
      for (let j = 1; j <= i; j++) {
        num += `${j}`;
      }
      console.log(num);
    }
  }

  InvertedRightPyramid(n = 5) {
    for (let i = 5; i > 0; i--) {
      let star = "";
      for (let j = n - i; j < n; j++) {
        star += " * ";
      }
      console.log(star);
    }
  }

  InvertedNumberedRightPyramid(n = 5) {
    for (let i = 1; i <= n; i++) {
      let num = "";
      for (let j = i; j <= n; j++) {
        num += `${j}`;
      }
      console.log(num);
    }
  }

  IncreasingLetterTrianglePattern(n = 5) {
    for (let i = 1; i <= 5; i++) {
      let s = "";
      for (let j = 1; j <= i; j++) {
        s += `${String.fromCharCode(64 + j)} `;
      }
      console.log(s);
    }
  }
}

const solu = new Patterns();
solu.IncreasingLetterTrianglePattern();

const s = "increasing-letter-triangle-pattern";
console.log(solu.getFunctionName(s));
