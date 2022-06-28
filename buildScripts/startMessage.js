// const chalk = require('chalk');//reference to chalk, which is a library that allows me to specify the color of the ouput to the console

//^Typically in Node you use CommonJS "require" to import files. Now that we're transpiling vie Babel, we can use JavaScripts import.
//so instead of the above chalk = require:
import chalk from "chalk";

console.log(chalk.cyanBright("Starting app in dev mode..."));// eslint-disable-line no-console