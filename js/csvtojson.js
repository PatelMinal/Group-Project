var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let allText="";
function inputCSVFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
	arrayOfWords = allText.split(/(?:\r\n)|(?:(?:\,))/);
	return arrayOfWords;
}

function outputJSON(input){
let inputArray = input;

//console.log(inputArray);
let finalArray = new Array();
let i;
for(i=0; i<inputArray.length; i++){
	var addJsonData = new Object();
	addJsonData.Name = inputArray[i];
	addJsonData.Score = inputArray[i+1];
	finalArray.push(addJsonData);
	i++;
}
var jsonArray = JSON.parse(JSON.stringify(finalArray))
//console.log(jsonArray);
return jsonArray;
}
//outputJSON(inputCSVFile("file://C:/Users/stuar/Documents/!Work/Node/harrypotternames.csv"));
module.exports = {outputJSON, inputCSVFile};