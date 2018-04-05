// import modules
const Google = require('./google')
const { promptUserSearchQuery } = require('./interface')

// Run script: Google Search runs asynchronously & recursively for subsequent queries
const run = async () => {
  let search = await promptUserSearchQuery()
  await Google(search.query)
  run()
}
run()
