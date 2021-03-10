const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number of seconds for TIMER:', (sec) => {
  if (Number(sec) && sec >= 0) {
    setTimeout(() => {
      (process.stdout.write('\x07'));
    }, sec * 1000);
  }
  rl.on('SIGINT', () => {
    rl.question('Exit (y or n)? ', (input) => {
      if (input.match(/^y(es)?$/i)) { 
        process.stdout.write('Thanks for using me, ciao! \n');
        rl.close();
       }
    });
  });
});


