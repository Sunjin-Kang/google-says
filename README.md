# Technical Question for dMetrics engineering position

This is submission for dMetrics Front-end Engineer position by Peter (Sunjin) Kang

## Instructions
> install node/npm
> type `npm install`
> type `npm start` to run Google search
> type `npm run pattern` to run pattern matcher

### Motivations
- I thought a search GUI would be excessive so I went with a simple command-line interface inquirer.
- As recompense, thought I'd add Chalk to make it a little more pleasant.
- I learned that it wasn't quite straightforward to get REST api from google searches due to their policies, so I found their free Custom Search Engine and also considered some npm libraries (Google, google-scraper, google-search-scraper).

- For the pattern matcher, I considered many different approaches to make it modular but this is what I ended up with.
- Currently, to compare different .txt files, you must replace the input.txt and patterns.txt in `./PatternMatcher/text`.
- I would have liked to add testing if I had more time.
- I had fun making it and learned new things! Although I did spend a bit more than 4 hours on it.
