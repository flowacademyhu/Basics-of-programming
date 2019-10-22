const countDown = (counter) => {
  console.log(counter);
  if (counter !== 0) {
    counter--;
    countDown(counter);
  }
  // return
};

// countDown(10);

const arrMin = (index, arr) => {
  if (index === 1) {
    return arr[0];
  }
  return Math.min(arr[index - 1], arrMin(index - 1, arr));
};

// console.log(arrMin(5, [1, 2, -5, 0, 7]));

const fibo = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

// for (let i = 0; i < 1000; i++) {
//   process.stdout.write(fibo(i) + ' ');
// }

const table = require('table');
const source = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(table.table(source));

const factorial = (n) => {
  return (n <= 1 ? 1 : n * factorial(n - 1));
  // if (n > 1) return n * factorial(n - 1);
  // return 1;
};

const factorialIterative = (n) => {
  let res = 1;
  for (let i = n; i > 1; i--) {
    res *= i;
  }
  return res;
};

console.log(factorial(171));
console.log(Number.MAX_SAFE_INTEGER);
