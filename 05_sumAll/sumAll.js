const sumAll = function(num1, num2) {
    let numberToReturn = 0;
    if(!(typeof num1 === 'number') || !(typeof num2 === 'number') || num1<0 || num2<0)
    {
        return "ERROR";
    }
    else if(num1>num2)
    {
        for(num2; num2<=num1;num2++)
        {
            numberToReturn += num2;
        }
    }
    else
    {
        for(num1; num1<=num2;num1++)
        {
            numberToReturn += num1;
        }
    }
    return numberToReturn;
};

// Do not edit below this line
module.exports = sumAll;
