module.exports = {

    analyseDocument: function (document, flaggedWords) {
        let report = {};
        let wordCount = 0;
        let flaggedWordCount = 0;
        let score = 0;
        let scoreRank;

        document.words.forEach(function (docWord) {
            wordCount = wordCount + docWord.count;

            flaggedWords.words.forEach(function (flagWord) {
                if (docWord.word == flagWord.word) {
                    score = score + (docWord.count * flagWord.score);
                    flaggedWordCount = flaggedWordCount + docWord.count;
                }
            })
        });
        report.wordCount = wordCount;
        report.score = score;
        report.flaggedWordCount = flaggedWordCount;

        report.flagPercent = (flaggedWordCount / wordCount).toPrecision(3);

        return report;
    }

}