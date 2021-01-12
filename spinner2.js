const spinner = () => {
  let time = 100;
  setInterval(() => {
    if (time === 100) {
      process.stdout.write('\r/   ');
    } else if (time === 300) {
      process.stdout.write('\r-   ');
    } else if (time === 500) {
      process.stdout.write('\r\\   ');
    } else if (time === 700) {
      process.stdout.write('\r|   ');
    }
    time += 200;
  }, 700);
};
console.log(spinner());