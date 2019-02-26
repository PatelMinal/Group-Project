const fileAnalyser = require('../FileAnalysis.js');
var analyseFile = fileAnalyser.analyseDocument;

var testDoc1 = {
    name: "testFile",
    filename: "122h2bab2.pdf",
    status: "pending",
    score: 0,
    time_stored: "",
    time_started: "",
    time_finished: "",
    ownder_id: 1,
    flaggedWordsList: "harryPotter",
    words: [
        {
            word: "harry",
            count: 50
        },
        {
            word: "wand",
            count: 5
        },
        {
            word: "test",
            count: 2
        },
        {
            word: "thing",
            count: 8
        }
    ]
}

var testDoc2 = {
    name: "testFile",
    filename: "122h2bab2.pdf",
    status: "pending",
    score: 0,
    time_stored: "",
    time_started: "",
    time_finished: "",
    ownder_id: 1,
    flaggedWordsList: "harryPotter",
    words: [
        {
            word: "harry",
            count: 2
        },
        {
            word: "reformat",
            count: 99
        },
        {
            word: "me",
            count: 2
        },
        {
            word: "daddy",
            count: 1
        },
        {
            word: "wand",
            count: 5
        },
        {
            word: "test",
            count: 2
        },
        {
            word: "thing",
            count: 7
        }
    ]
}

var testFlagdWords = {
    name: "Harry Potter",
    words: [
        {
            word: "wand",
            score: 2
        },
        {
            word: "harry",
            score: 1
        },
        {
            word: "daddy",
            score: 3
        }
    ]
}


describe("File Analyser", function () {
    describe("Testing Document 1", function () {
        let testReport1 = analyseFile(testDoc1, testFlagdWords);
        test("Document 1 should have a total word count of 65", () => {
            expect(testReport1.wordCount).toBe(65);
        });
        test("Document 1 should have a score of 60", () => {
            expect(testReport1.score).toBe(60);
        })
        test('Document 1 should have a flagged percentage of 84.6%', () => {
            expect(testReport1.flagPercent).toBe("0.846");
        })
        test('Document 1 should be set to analysed', () => {
            expect(testReport1.status).toBe("analysed");
        })
        test('Document 1 should be classified as High Priority', () => {
            expect(testReport1.rank).toBe("High Priority");
        })
    })

    describe("Testing Document 2", function () {
        let testReport2 = analyseFile(testDoc2, testFlagdWords);
        test("Document 2 should have a total word count of 118", () => {
            expect(testReport2.wordCount).toBe(118);
        });
        test("Document 2 should have a score of 15", () => {
            expect(testReport2.score).toBe(15);
        })
        test('Document 2 should have a flagged percentage of 6.78%', () => {
            expect(testReport2.flagPercent).toBe("0.0678");
        })
        test('Document 2 should be set to analysed', () => {
            expect(testReport2.status).toBe("analysed");
        })
        test('Document 2 should be classified as Lowest Priority', () => {
            expect(testReport2.rank).toBe("Lowest Priority");
        })
    })
})