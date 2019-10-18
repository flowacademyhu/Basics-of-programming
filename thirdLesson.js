const source = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(source);

const generate2D = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const print2D = (source) => {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      process.stdout.write(source[i][j] + ' ');
    }
    console.log();
  }
};

const fill2D = (source) => {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      source[i][j] = Math.floor(Math.random() * 10) + 1;
    }
  }
};

const sum2D = (source) => {
  let sum = 0;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      sum += source[i][j];
      // console.log(i, j, source[i][j]);
    }
  }
  return sum;
};

const map = generate2D(3, 3);
console.log(map);
fill2D(map);
print2D(map);
console.log('Sum: ', sum2D(map))
;
