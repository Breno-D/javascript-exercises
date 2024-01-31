const reverseString = function(stringToBeReversed) {
    reversedString = "";
    for(let i=stringToBeReversed.length-1; i>=0;i--)
    {
        reversedString += stringToBeReversed[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
