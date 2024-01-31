const repeatString = function(repeatedString, numberOfRepetitions) {
    let stringToReturn = "";
    for(let i=0; i<numberOfRepetitions; i++)
    {
        stringToReturn += repeatedString;
    }

    if(numberOfRepetitions<0)
    {
        return "ERROR";
    }
    else
    {
        return stringToReturn;
    }
};


 
// Do not edit below this line
module.exports = repeatString;
