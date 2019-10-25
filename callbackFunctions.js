
const doSth = (data) => {
  console.log('Do something ' + data);
};

// setInterval(() => { doSth('cica'); }, 100);
const sth = setInterval(doSth, 100, 'cica');

const keyboardFn = (key) => { 	// Callback függvény
  console.log('You pressed: ', key);
  if (key === 'a') {
    clearInterval(sth);
  }
  if (key === 'q') {
    process.exit();
  }
};

const stdin = process.stdin;
stdin.setRawMode(true); // Ne várjon enterre
stdin.resume(); // Csak process.exit-el lehet kilépni
stdin.setEncoding('utf8'); // Karaktereket kapjunk vissza
stdin.on('data', keyboardFn);
