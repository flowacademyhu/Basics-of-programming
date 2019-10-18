const arr = ['cica', 'kutya', 'alma']; // tömb definiálása
console.log(arr)
;
console.log(arr[2]); // Tömb adott elemének kiiratása
console.log(arr.length); // Tömb méretének kiírása
arr[0] = 'pocok'; // Adott tömb elem módosítása
arr.push('polip'); // Új elem tömbbe helyezése
arr[5] = 10;
const x = arr.pop(); // Utolsó tömbelem kivétele
console.log('x = ', x);
console.log(arr);
for (let i = 0; i < arr.length; i++) { // Tömb bejárása
  console.log(arr[i]);
}

const generateArray = (size) => {
  const randomNumbers = []; // new Array(size);
  for (let i = 0; i < size; i++) {
    // randomNumbers[i] = Math.floor(Math.random() * 10) + 1;
    randomNumbers.push(Math.floor(Math.random() * 10) + 1);
  }
  return randomNumbers;
};

const randomNumbers = generateArray(6);
console.log(randomNumbers);

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log('Sum: ', sumArray(randomNumbers));

const countElement = (element, arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      counter++;
    }
  }
  return counter;
};

console.log('3: ', countElement(3, randomNumbers));

const max = (arr) => {
  let maximum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
};

console.log('Max:', max(randomNumbers));

const containsElement = (element, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
};

const containsElement2 = (element, array) => {
  let i = 0;
  while (i < array.length && array[i] !== element) {
    i++;
  }
  return i < array.length;
  // if (i < array.length) {
  //   return true;
  // } else {
  //   return false;
  // }
};

console.log('Contains 3: ', containsElement(3, randomNumbers));
console.log('Contains 3: ', containsElement2(3, randomNumbers));

const indexOfArray = (element, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
};

console.log('Index of 3', indexOfArray(3, randomNumbers));

const copy2x = (original, modified) => {
  for (let i = 0; i < original.length; i++) {
    modified[i] = original[i] * 2;
  }
  return modified;
};

console.log('Copy 2x: ', copy2x(randomNumbers, []));

const selectEven = (array) => {
  const evens = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    }
  }
  return evens;
};

console.log('Even numbers: ', selectEven(randomNumbers));

const evenOddNumbers = (array) => {
  const evens = [];
  const odds = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    } else {
      odds.push(array[i]);
    }
  }
  return { even: evens, odd: odds, name: 'Mate' };
};

const obj = evenOddNumbers(randomNumbers);
console.log('Even: ', obj.even);
console.log('Odd: ', obj.odd);

const intersection = (array1, array2) => {
  const inters = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        inters.push(array1[i]);
        break;
      }
    }
  }
  return inters;
};

console.log('Intersection: ', intersection([1, 2, 3, 4, 3], [3, 5, 4, -1, 3]));
