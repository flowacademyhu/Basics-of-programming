const source = [0, 1, 2];

const permutation = (index) => {
  if (index >= source.length) {
    console.log(source);
  } else {
    for (let k = index; k < source.length; k++) {
      console.log(`K: ${k} ${index}`);
      swap(index, k);
      permutation(index + 1);
      swap(index, k);
    }
  }
};

const swap = (i, k) => {
  console.log(`SWAP ${i} ${k}`);
  const temp = source[i];
  source[i] = source[k];
  source[k] = temp;
};

permutation(0);
