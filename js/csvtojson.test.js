var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var Methods = require("./csvtojson.js");
var outputJSON = Methods.outputJSON;
var inputCSVFile = Methods.inputCSVFile;
const fileLocation = "file://C:/Users/Administrator/Documents/Final_Project/test.txt";
const outputJSONConst = outputJSON(inputCSVFile(fileLocation));
const inputCSVFileText = inputCSVFile(fileLocation);

console.log(outputJSONConst);
console.log(inputCSVFile(fileLocation));

describe("JSON formatting test", function() {
    test("First 2 characters should be '[{'", function() {
		let firstTwo = JSON.stringify(outputJSONConst).substring(0, 2);
        expect(firstTwo).toBe("[{");
    });
    test("Last 2 characters should be '}]'", function() {
		let lastTwo = JSON.stringify(outputJSONConst).slice(-2);
	expect(lastTwo).toBe("}]");
    });
});

describe("Data test", function() {
    test("The first value should equal to the first part of the CSV's name", function() {
        expect(outputJSONConst[0].Name).toBe(inputCSVFileText[0]);
    });
    test("The Score should equal to the first part of the CSV's score", function() {
        expect(outputJSONConst[0].Score).toBe(inputCSVFileText[1]);
    });
});

describe("No file test", function() {
    test("An error should be returned or something", function() {
        expect(inputCSVFile("file://C:/Users/stuar/Documents/!Work/Node/fakeFile.txt")[0]).toBe('Error: ENOENT: no such file or directory');
    });
});