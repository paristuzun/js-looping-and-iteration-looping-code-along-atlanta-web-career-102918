// Code your solutions in this file
function printBadges(employeenames) {
  for (let i = 0; i < employeenames.length; i++) {
    console.log(`Welcome ${employeenames[i]}! You are employee #${i + 1}.`);
  }
  return employeenames;
}

function tailsNeverFails() {
  let counter = 0;
  while (Math.random() >= 0.5) {
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}
