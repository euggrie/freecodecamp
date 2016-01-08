/**
 Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

 For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 */

function titleCase(str) {


    var arr = str.split(" ");
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        var word = arr[i];
        var newWord;

        var first = word.charAt(0).toUpperCase();
        var rest = word.slice(1, word.length).toLowerCase();


        if(word.length > 1){
            newWord = first + rest;
        } else {
            newWord = first;
        }

        newArr.push(newWord);

        result = newArr.join(" ");
    }

    return result;
}

titleCase("I'm a little tea pot");