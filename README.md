# skribbliohints.github.io
Most complete skribbl.io word list as of now (2019).  The data was collected by a bot that played skribbl.io for a few months.  Once enough data was collected, the bot was taken down, but it may run again some day.

[https://skribbliohints.github.io](https://skribbliohints.github.io)

Information about the data, added April 2021:

The raw data has been placed in 3 files in this repository: words.json (English), German.json (German), and Spanish.json (Spanish).  The data was collected by a bot that played both public and private games on skribbl.io.  It played private games against itself in two separate browser tabs, and it played public games against actual humans.  However, on approximately March 2, 2020, skribbl.io added reCAPTCHA, and since then it has placed the bot in public games with no other players, so the bot cannot play against humans.  The English data was collected in late 2019, but the German and Spanish data were not collected until after reCAPTCHA had been added, so they do not have public game data.

Each data file uses JSON (JavaScript Object Notation) with the words themselves as the keys in the outermost object.  Each word maps to an object with the following keys:
- `count` The total number of times the word was seen in both public and private games.  Since the bot played a lot more rounds in private games than public games, most of count comes from private games.
- `lastSeenTime` The timestamp when the word was last seen by the bot.  This is in the format returned by the JavaScript [`Date.now()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) function.  So it is the number of milliseconds elapsed since January 1, 1970.
- `publicGameCount` Unfortunately, this field has a bug.  This was supposed to be the number of times the bot saw the word in public games.  But due to a bug in the bot's code, it updated publicGameCount only if it guessed the word correctly.  The bot guessed words based on the hint displayed by skribbl.io, so words with unique patterns ended up having higher publicGameCount.  The bug was fixed on April 23, 2020, but corrected data could not be collected because skribbl.io had introduced reCAPTCHA.
- `difficulty` The portion of players that did not guess the word correctly in public games, including the bot.
- `difficultyWeight` The number of players used to calculate the difficulty.  Due to the bug in publicGameCount, this is the most accurate measurement of the frequency of the word in public games.

If a word has not been seen in a public game, it will not have the public game keys.

This website has some data analysis tools written in JavaScript.  It does not use the raw field names.  Instead, it uses descriptive text and it manipulates some fields.  For example, instead of `difficulty`, the website has "Percent of players that guess correctly (including the bot)" which is `1 - difficulty`.  It also adds the "Difficulty percentile" field to each word.  The percentile is calculated by the JavaScript code, so it is not stored in the data.  The `r=` number below the graph is the [Pearson correlation coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient) of the data shown in the graph.



