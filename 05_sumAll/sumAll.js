const sumAll = function (leftNum, rightNum) {
  let sum = 0;
  let smallerNum = 0;
  let higherNum = 0;

  if (leftNum >= 0 && rightNum >= 0 && Number.isInteger(leftNum) && Number.isInteger(rightNum)) {
    if (leftNum < rightNum) {
      smallerNum = leftNum;
      higherNum = rightNum;
    } else {
      smallerNum = rightNum;
      higherNum = leftNum;
    }

    for (let i = smallerNum; i <= higherNum; i++) {
      sum += i;
    }
    return sum;
  } else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
