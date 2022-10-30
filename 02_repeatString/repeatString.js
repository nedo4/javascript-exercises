const repeatString = function(string, num) {
    var tmpstrin = ""
    if(num < 0) {
        return("ERROR");
    }
    else {
        for (var i = 0; i < num; i++) {
            tmpstrin += string;
        }
    }
    return tmpstrin;
};

// Do not edit below this line
module.exports = repeatString;
