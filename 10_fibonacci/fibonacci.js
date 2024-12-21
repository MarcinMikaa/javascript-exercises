const fibonacci = function (input) {
  const n = parseInt(input, 10);

  if (isNaN(n) || n < 0) {
    return 'OOPS';
  }

  if (n === 0) {
    return 0;
  }

  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    let temp = curr;
    curr = curr + prev;
    prev = temp;
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
