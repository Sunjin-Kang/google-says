/*
   npm packages:
   inquirer: launches prompt interface
*/
const inquirer = require('inquirer')

// Prompts user for a Search Query then returns object of answers
const promptUserSearchQuery = () => {
  return inquirer.prompt({
    type: 'input',
    message: 'Ask Google~',
    name: 'query'
  })
}
module.exports = { promptUserSearchQuery }
