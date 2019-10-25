const readLine = require('readline-sync');
const dictionary = ['alma', 'kutya', 'cica', 'poloska'];
let word = '';
let guessedWord = [];
let life = 0;

const generateWord = () => {
  const index = Math.floor(Math.random() * dictionary.length);
  word = dictionary[index];
  guessedWord = [];
  for (let i = 0; i < word.length; i++) {
    guessedWord.push('_');
  }
  life = Math.floor(word.length / 2);
};

const printGame = () => {
  console.log();
  for (const ch of guessedWord) {
    // process.stdout.write(ch + ' ');
    process.stdout.write(`${ch} `);
  }
  console.log();
  console.log(`Life: ${life}`);
};

const isSolved = () => {
  for (const ch of guessedWord) {
    if (ch === '_') {
      return false;
    }
  }
  return true;
};

const makeGuess = (guessedChar) => {
  let isFoundCharacter = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guessedChar) {
      guessedWord[i] = guessedChar;
      isFoundCharacter = true;
    }
  }
  return isFoundCharacter;
};

const main = () => {
  console.log('Hello darkness, my old friend!');
  generateWord();
  printGame();

  while (life > 0 && !isSolved()) {
    console.log('Press a key!');
    const key = readLine.keyIn();
    if (!makeGuess(key)) {
      life--;
      printGame();
      if (life === 0) {
        console.log(`You're dead! Word: ${word} New game? Y/N`);
        const key = readLine.keyIn();
        if (key === 'y') {
          generateWord();
        }
      }
    }
    printGame();
    if (isSolved()) {
      console.log('You win! New game? Y/N');
      const key = readLine.keyIn();
      if (key === 'y') {
        generateWord();
      }
    }
  }
};
main();
