/**
 Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
 */
function repeat(str, num) {

    if(num > 0){
        str = str.repeat(num);
    } else{
        str = "";
    }

    return str;

}

repeat("abc", 3);
