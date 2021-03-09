const setTime = process.argv.slice(2);
setTime.sort(function(a, b){return a - b});

console.log (setTime)
for (const sec of setTime) {
  if (Number(sec) && sec >= 0) {
    setTimeout(() => {
      (process.stdout.write('\x07'));
    }, sec * 1000);
  }
}