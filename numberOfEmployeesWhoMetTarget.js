const hours = [5, 0],
  target = 6;

const numberOfEmployeesWhoMetTarget = (hours, target) => {
  return hours.reduce((accu, init) => {
    if (init >= target) {
      accu++;
    }
    return accu;
  }, 0);
  //   let result = 0;
  //   hours.forEach((element) => {
  //     if (element >= target) {
  //       result++;
  //     }
  //   });

  //   return result;
};

console.log(numberOfEmployeesWhoMetTarget(hours, target));
