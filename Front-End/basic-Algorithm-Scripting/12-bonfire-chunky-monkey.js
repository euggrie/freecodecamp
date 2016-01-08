/**
 Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
 */

function chunk(arr, size) {

    var newArr = [];
    var arr1 = arr.slice(0, size);
    var arr2 = arr.slice(size, size * 2);

    var arr3 = arr.slice(size * 2, size * 3);


    newArr.push(arr1);
    newArr.push(arr2);

    if(arr3.length >0){
        newArr.push(arr3);
    }


    return newArr;

}

chunk([0, 1, 2, 3, 4, 5], 4);
