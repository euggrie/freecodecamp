/**
 Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

 Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .
 */

function largestOfFour(arr) {

    var newArr = [];

    for(var i = 0; i< arr.length; i++) {

        var subArr = arr[i];

        var max_of_subarray = Math.max.apply(Math, subArr);
        newArr.push(max_of_subarray);

    }
    return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
