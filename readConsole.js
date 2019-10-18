const readLine = require('readline-sync');
// const name = readLine.question("What's your name?");
// console.log('Welcome ', name);

while (true) {
  const key = readLine.keyIn('Press a key');
  if (key === 'q') {
    process.exit(0);
  }
  if (key === 'a') {
    break;
  }
  console.log(key);
}
// console.log('Cica');

// CALLBACK

const callIfPositive = (source, callable) => {
  if (source >= 0) {
    callable();
  }
};

callIfPositive(5, () => {
  console.log('Kutya');
});

// Aszinkron beolvasás

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  console.log('Pressed async', key);
  if (key === 'q') {
    process.exit();
  }
})
;

// while (true) {
//   console.log('-----');
// }
const printDelimiters = () => {
  console.log('.-.-.-.-.--.');
};

// setInterval(printDelimiters, 1000);

const timeoutFunction = (time) => {
  console.log('Time', time);
  time -= 100;
  if (time < 100) {
    console.log('Time is up');
  } else {
    setTimeout(() => { timeoutFunction(time); }, time);
  }
}
;

timeoutFunction(1000);

const isOld = (age) => {
//   if (age > 65) {
//     return 'Old';
//   } else {
//     return 'Young';
//   }
  (age > 65 ? console.log('Old') : console.log('young'));
  return (age > 65 ? 'Old' : 'Young');
};
