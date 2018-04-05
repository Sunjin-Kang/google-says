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










====
These programming tasks are property of dMetrics Inc. and cannot be shared with others, in public forums or otherwise.
====

Please provide a complete and working solution. It needs to compile and run. Please supply everything needed to run the application (makefiles / scripts / 3rd party libraries) or give clear instructions on how to build your submission. This is an exercise in code quality, not speed (within reason).

1. Search engine query

Write a Javascript application (command-line or GUI) that prompts the user for a text string, performs a Web search (Google/Yahoo/Bing/etc - your choice) and returns the title and URL of the first result. Use any tools / libraries you wish, but you must provide instructions on how to build and run your application. Please include a brief description of your application and why you implemented it the way you did.


2. Pattern matching

You are given two text files: (a) input.txt - a free-text document composed of 1 or more lines of text, and (b) patterns.txt - a set of search strings (1 per line). Write a Javascript application (command-line or GUI) that can run in three following modes:

Required:
Mode 1: output all the lines from input.txt that match exactly any pattern in patterns.txt

Optional:
Mode 2: output all the lines from input.txt that contain a match from patterns.txt somewhere in the line.
Mode 3: output all the lines from input.txt that contain a match with edit distance <= 1 patterns.txt


### An example:


> input.txt
> Hello.  This is line 1 of text.
> and this is another.
> line 3 here
> the end

> patterns.txt
> the end
> matches
> line 3
> and this is anoother.

- Mode 1 outputs:
the end

- Mode 2 outputs:
line 3 here
the end

- Mode 3 outputs:
and this is another.
the end


#Notes
Please feel free to use any tools / libraries you wish, as long as you provide complete and clear instructions on how to build and run your application.

Please include a brief description of your application and why you implemented it the way you did.
