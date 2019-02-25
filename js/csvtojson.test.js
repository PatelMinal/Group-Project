var Methods = require("./csvtojson.js");
var outputJSON = Methods.outputJSON;
var inputCSVArray = Methods.inputCSVArray;

describe("JSON formatting test", function() {
    test("First 2 characters should be '{['", () => {
        expect(outputJSON.substring(0, 2).toBe("{["));
    });
    test("Last 2 characters should be ']}'", () => {
	expect(outputJSON.slice(-2).toBe("]}"));
    });
});

describe("Data test", function() {
    test("The first value should equal to Alpha, as is described in the test CSV", () => {
        expect(outputJSON[0].Name.toBe(inputCSVArray[0]));
    });
    test("The Score should equal to Alpha's score value (1), as is described in the test CSV", () => {
        expect(outputJSON[0].Score.toBe(inputCSVArray[1]*1));
    });
});
/*
describe("Equal?", function() {
    test("Equal?: Inputting 69 and 420 should return false", () => {
        expect(checkEqual(69, 420)).toBe(false);
    });
    test("Equal?: Inputting 69 and 69 should return true", () => {
        expect(checkEqual(69, 69)).toBe(true);
    });
});
*/