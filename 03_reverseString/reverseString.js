const reverseString = function(string) {
    let tempString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        tempString += string[i];
    }
    return tempString;
};

// Do not edit below this line
module.exports = reverseString;
