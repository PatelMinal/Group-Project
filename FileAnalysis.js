function analyseDocument(document, flaggedWords) {
    let wordCount = 0;
    let flaggedWordCount = 0;
    let score = 0;

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    document.time_started = date + time;

    document.words.forEach(function (docWord) {
        wordCount = wordCount + docWord.count;

        flaggedWords.words.forEach(function (flagWord) {
            if (docWord.word == flagWord.word) {
                score = score + (docWord.count * flagWord.score);
                flaggedWordCount = flaggedWordCount + docWord.count;
            }
        })
    });
    document.wordCount = wordCount;
    document.score = score;
    document.flaggedWordCount = flaggedWordCount;
    document.flagPercent = (flaggedWordCount / wordCount).toPrecision(3);
    document.status = "analysed";

    today = new Date();
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    time = ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    document.time_finished = date + time;

    document.rank = calculateRank(document);

    return document;
}

function calculateRank(document) {
    let wordCount = document.wordCount;
    let flaggedWordCount = document.flaggedWordCount;
    let flagPercent = document.flagPercent;
    let score = document.score;
    let myEval = 0;
    myEval = (score / flaggedWordCount) * flagPercent;

    if (eval > 5) {
        return "Maximum Priority";
    } else if (eval > 3) {
        return "High Priority";
    } else if (eval > 2) {
        return "Medium Priority";
    } else if (eval > 1) {
        return "Low Priority";
    } else {
        return "Lowest Priority";
    }
}

module.exports = { analyseDocument, calculateRank };