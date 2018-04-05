/*
  npm packages:
  Axios: Make api requests
*/
const Axios = require('axios')

// Google Api keys Constants
const api_key = 'AIzaSyCjP4mtU8k9sQDYfGlQcxn_C2T49r7owWw'
const cse_id = '017453709220719975631:x16duna8nca'
const searchURL = `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${cse_id}`

// import console.log utils
const {
  logger,
  blue,
  red,
  green,
  orange,
  bold,
  underline
} = require('./utils')

// Google's Custom Search Engine
// (free version, limited to 100 queries a day)
// Could've used a npm library (google, google-scraper) as well but I chose this as i just needed something very lightweight and customizable
const Google = async (query) => {
  return Axios({
    method: 'get',
    url: searchURL,
    params: {
      q: encodeURIComponent(query)
    }
  })
  .then(res => res.data)
  .then(data => {
    logger(green(bold(
      '\n',
      'This is Google\'s favorite choice!',
      '\n',
      '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
      '\n\n')))
    logger(bold('Title: '), red(data.items[0].title))
    logger(bold('Link:  '), blue(underline(data.items[0].link)))
    logger('\n\n\n')
    return data.items[0]
  })
  .catch(err => logger(bold('There was a problem:\n'), orange(err)))
}
module.exports = Google
