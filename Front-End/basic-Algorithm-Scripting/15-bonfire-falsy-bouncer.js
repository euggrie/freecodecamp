/**
 Remove all falsy values from an array.

 Falsy values in javascript are false, null, 0, "", undefined, and NaN.
 */

function bouncer(arr) {

    for(var i=0; i<arr.length;i++){

        while(!arr[i]){

            var index = arr.indexOf(arr[i]);
            arr.splice(index, 1);

        }
    }
    return arr;
}

bouncer([7, "ate", "", false, 9]);
