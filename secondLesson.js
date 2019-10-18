const name = 'Feri'; // Globális változó

const printName = () => {
  console.log(name);
  let k = 5; // Függvényen belül látható
  console.log(k);
  if (name === 'Feri') {
    k = 10;
  }
};
// const name = 'Géza';
printName();
console.log(name);
// console.log(k); A függvényen kívül nem érető el 'k'

const testBlockScope = () => {
  let index = 0;
  if (name === 'Mate') {
    index = 0;
    console.log('Index', index);
  }
  if (name === 'Joska') {
    index++;
  }
};

testBlockScope();

const testBinding = () => {
  const num = 1;
  if (name === 'Feri') {
    const num = 5;
    console.log(num);
  }
  console.log(num);
};

const setToTen = (n) => { // Érték szerinti paraméterátadás
  n = 10;
  console.log('In function', n);
  return n;
};
let a = 5;
a = setToTen(a);
console.log('Out', a);

const addToArray = (source) => {
  // source = ['C'];
  source.push('Cica');
  source[0] = 'Almafa';
};

const strings = ['Kutya', 'alpaka'];
addToArray(strings);
console.log(strings);

const union = (source1, source2) => {
  const solution = [];
  for (let i = 0; i < source1.length; i++) {
    let j = 0;
    while (j < solution.length && solution[j] !== source1[i]) {
      j++;
    }
    if (j === solution.length) {
      solution.push(source1[i]);
    }
  }
  for (let i = 0; i < source2.length; i++) {
    let j = 0;
    while (j < solution.length && solution[j] !== source2[i]) {
      j++;
    }
    if (j === solution.length) {
      solution.push(source2[i]);
    }
  }
  return solution;
}
;
console.log('Union', union([1, 2, 3, 4, 1], [1, 5, 2, 8]));
