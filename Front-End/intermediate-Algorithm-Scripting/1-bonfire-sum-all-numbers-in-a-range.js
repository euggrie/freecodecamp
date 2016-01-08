/**
 We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

 The lowest number will not always come first.
 */
function sumAll(arr) {

    var a = arr[0];
    var b = arr[1];
    var result;
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    var myArr = [min];

    for(var i = min; i< max; i++){
        if (i < max){
            result = min +i;
            myArr.push(result);
        }
    }

    return myArr.reduce(function(previousValue, currentValue,arr) {
        return previousValue + currentValue;
    });
}

sumAll([1, 4]);
