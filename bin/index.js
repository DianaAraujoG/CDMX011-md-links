#!/usr/bin/env node
const chalk = require('chalk');
const pathLi = require('path');
const mdLinks = require('../src/mdlinks.js');
// 'C:/Cursos/GitHub/CDMX011-md-links/Prueba' // la ruta absoluta de donde estoy
const path = process.argv[2];
const op1 = process.argv[3];
const op2 = process.argv[4];

console.log(chalk.bgYellow('-──▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───'));
console.log(chalk.bgYellow('───█▒▒░░░░░░░░░▒▒█───'));
console.log(chalk.bgYellow('────█░░█░░░░░█░░█────'));
console.log(chalk.bgYellow('─▄▄──█░░░▀█▀░░░█──▄▄─'));
console.log(chalk.bgYellow('█░░█─▀▄░░░░░░░▄▀─█░░█'));
console.log(chalk.bgYellow('█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█'));
console.log(chalk.bgYellow('█ (♥)  MD LINKS (♥) █'));
console.log(chalk.bgYellow('▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀'));

if (!path || path == '--validate' || path == '--stats') {
  console.log(chalk.bold.red('Enter the path please '), '😨');
} else if (!op1 && !op2) {
  mdLinks.f(path, 'justLinks')
    .then((res) => {
      //  console.log(res);
      res.forEach((e) => {
        const file = pathLi.parse(e.file).base;
        console.log(`${chalk.magenta(file)} ${chalk.bold.green(e.href)} ${chalk.cyan(e.text)}`);
      });
    })
    .catch((err) => { console.log(err); });
} else
if (op1 == '--validate' && !op2) {
  mdLinks.f(path, 'validate')
    .then((res) => {
      res.forEach((e) => {
        const file = pathLi.parse(e.file).base;
        if (e.txStatus == 'FAIL') {
          console.log(`${chalk.magenta(file)} ${chalk.bold.red(e.href)} ${chalk.underline.bgBlack(e.txStatus)} ${chalk.underline.yellow(e.status)} ${chalk.cyan(e.text)}`);
        } else {
          console.log(`${chalk.magenta(file)} ${chalk.bold.green(e.href)} ${chalk.underline.bgBlack(e.txStatus)} ${chalk.underline.yellow(e.status)} ${chalk.cyan(e.text)}`);
        }
      });
    })
    .catch((err) => { console.log(err); });
} else
if (op1 == '--stats' && !op2) {
  mdLinks.f(path, 'stast')
    .then((res) => {
      res.forEach((stat) => {
        console.log(chalk.magenta('Total: ') + stat.total);
        console.log(chalk.magenta('Unique: ') + stat.unique);
      });
    })
    .catch((err) => { console.log(err); });
} else
if (op1 == '--stats' && op2 == '--validate' || op1 == '--validate' && op2 == '--stats') {
  mdLinks.f(path, 'both')
    .then((res) => {
      res.forEach((stat) => {
        console.log(chalk.magenta('Total: ') + stat.total);
        console.log(chalk.magenta('Unique: ') + stat.unique);
        console.log(chalk.magenta('Broken: ') + stat.broken);
      });
    })
    .catch((err) => { console.log(err); });
}
