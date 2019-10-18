const source = [5, 2, 4, 8, 6, 3];

const minimumSelectionSort = (source) => {
  for (let i = 0; i < source.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < source.length; j++) {
      if (source[j] < source[minIndex]) {
        minIndex = j;
      }
    }
    console.log(source);
    if (i !== minIndex) {
      const temp = source[i];
      source[i] = source[minIndex];
      source[minIndex] = temp;
    }
  }
};

const insertionSort = (source) => {
  for (let i = 1; i < source.length; i++) {
    const temp = source[i];
    let j = i - 1;
    while (j >= 0 && source[j] > temp) {
      source[j + 1] = source[j];
      j--;
    }
    source[j + 1] = temp;
    console.log(source);
  }
};

const bubbleSort = (source) => {
  for (let i = source.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (source[j] > source[j + 1]) {
        const temp = source[j + 1];
        source[j + 1] = source[j];
        source[j] = temp;
      }
    }
  }
};

// minimumSelectionSort(source);
// insertionSort(source);
bubbleSort(source);
console.log(source);
