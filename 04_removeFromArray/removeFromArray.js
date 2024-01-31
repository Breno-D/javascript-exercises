const removeFromArray = function(arrayReceived, ...removedObjects) {
    let arrayToReturn = [] 
    
    arrayReceived.forEach((element) => 
    {
        if(!removedObjects.includes(element))
        {
            arrayToReturn.push(element)
        }
    });
    return arrayToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
