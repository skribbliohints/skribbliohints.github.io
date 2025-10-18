# skribbliohints.github.io

This GitHub site can be used to search and analyze the default word list of skribbl.io.  Enter the hint exactly as it appears at the top of skribbl.io, and this site will give you all the matching words.

Here is a link to this GitHub site: [https://skribbliohints.github.io](https://skribbliohints.github.io)

When this site first went online in late 2019, it became the source of the complete skribbl.io word list.  This site's original word list was collected by a bot.  For the English word list, the bot played both public and private games.  The public game data included information about the popularity and difficulty of each word.  German and Spanish word lists were added later, but they had little to no public game data.

On November 9, 2022, skribbl.io released an update that added more words to the English and German word lists.  So this site's English and German word lists were outdated.  And the bot couldn't collect the new word lists because it ran on Heroku's free tier, which was discontinued in late 2022.

In 2025, this site updated its data by copying the data files from [wlauyeung/Skribblio-Word-Bank](https://github.com/wlauyeung/Skribblio-Word-Bank) and restructuring them to the format used by this site.  So this site's word list is accurate again.  This site is no longer the source of the word list, but just a site that uses the word list.

This site has some data analysis tools written in JavaScript.  The `r=` number below the graph is the [Pearson correlation coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient) of the data shown in the graph.



