/*
  npm packages:
  chalk: Just for UX/Readability
*/
const chalk = require('chalk')

// console.log variables
const logger = console.log
const blue = chalk.hex('#00d8ff')
const red = chalk.hex('#c90016')
const green = chalk.hex('#6cc24a')
const orange = chalk.hex('#ff3000')
const bold = chalk.bold
const underline = chalk.underline

module.exports = {
  logger,
  blue,
  red,
  green,
  orange,
  bold,
  underline
}
