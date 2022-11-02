const sumAll = function(num1, num2) {
    let tmpNum = 0;
    let a, b, i;
    if (((num1 < 0) || (num2 < 0)) || ((typeof num1 != 'number') || (typeof num2 != 'number'))){
        return("ERROR");
    }
    if (num1 > num2) {
        a = num2;
        b = num1;
    }
    else {
        a = num1;
        b = num2;
    }
    for (i = a; i <= b; i++) {
        tmpNum += i;
    }
    return tmpNum;
  };

// Do not edit below this line
module.exports = sumAll;
