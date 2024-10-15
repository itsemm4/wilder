import chalk from 'chalk';

const wilder = ["Flo", "Cédric", "Mike", "Julien"];

console.log(chalk.blue(wilder[0]));
console.log(chalk.magenta.bold(wilder[1]));
console.log(chalk.green.underline(wilder[2]));
console.log(chalk.cyan(wilder[3]));
