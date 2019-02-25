var pdfParser = require('pdf-parser');

var PDF_PATH = 'StoneFull.pdf';

var wordList = [];
let tempList = [];

pdfParser.pdf2json(PDF_PATH, function (error, pdf) {
    if (error != null) {
        console.log(error);
    } else {
        for (let i = 0; i < pdf.pages.length; i++) {
            for (let j = 0; j < pdf.pages[i].texts.length; j++) {
                tempList = pdf.pages[i].texts[j].text.split(" ");
                //console.log(tempList.length);
                for (let k = 0; k < tempList.length; k++) {
                    //console.log(tempList[k]);
                    tempList[k] = removePunctuation(tempList[k]);
                    if (checkDuplicate(tempList[k], wordList) == null) {
                        tempWord = { "word": tempList[k].toLowerCase(), "count": 1 };
                        wordList.push(tempWord);
                    } else {
                        wordList[checkDuplicate(tempList[k], wordList)].count += 1;
                    }
                }
            }
        }
        console.log(wordList);
    }
});


function checkDuplicate(currentWord, wordList) {
    for (let i = 0; i < wordList.length; i++) {
        currentWord = currentWord.toLowerCase();
        if (wordList[i].word == currentWord) {
            return i;
        }
    }
    return null;
}

function removePunctuation(currentWord) {
    let punctuation = ["?", '"', ".", ",", "'", "!", ":", ";", "~", "*"];
    let lastChar = currentWord[currentWord.length -1];
    if (punctuation.includes(lastChar)) {
        return currentWord.substring(0, currentWord.length - 1);
    } else {
        return currentWord;
    }
}