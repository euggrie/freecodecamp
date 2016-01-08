/**
 Return the length of the longest word in the provided sentence.

 Your response should be a number.
 */

function findLongestWord(str) {
    var arr = str.split(' ');
    var count = 0;
    var longest;

    for(var i=0; i < arr.length; i++){
        if(arr[i].length > count){
            count = arr[i].length;
            longest = arr[i];
        }
    }

    return count;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

