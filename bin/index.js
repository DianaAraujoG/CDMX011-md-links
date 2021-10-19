#!/usr/bin/env node
const chalk = require('chalk');
const pathLi = require('path');
const mdLinks = require('../src/mdlinks.js');
// 'C:/Cursos/GitHub/CDMX011-md-links/Prueba' // la ruta absoluta de donde estoy
const path = process.argv[2];
const op1 = process.argv[3];
const op2 = process.argv[4];

console.log('-──▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───');
console.log('───█▒▒░░░░░░░░░▒▒█───');
console.log('────█░░█░░░░░█░░█────');
console.log('─▄▄──█░░░▀█▀░░░█──▄▄─');
console.log('█░░█─▀▄░░░░░░░▄▀─█░░█');
console.log('█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█');
console.log('█ (♥)  MD LINKS (♥) █');
console.log('▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀');

if (!op1 && !op2) {
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
        const file = pathLi.parse(stat.file).base;
        console.log(`-------${chalk.bold.green(file)}`);
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
        const file = pathLi.parse(stat.file).base;
        console.log(`-------${chalk.bold.green(file)}`);
        console.log(chalk.magenta('Total: ') + stat.total);
        console.log(chalk.magenta('Unique: ') + stat.unique);
        console.log(chalk.magenta('Broken: ') + stat.broken);
      });
    })
    .catch((err) => { console.log(err); });
}
