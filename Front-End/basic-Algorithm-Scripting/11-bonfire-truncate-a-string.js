/**
 Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.

 Note that the three dots at the end add to the string length.

 If the num is less than or equal to 3, then the length of the three dots is not added to the string length.
 */

function truncate(str, num) {

    var len = str.length;
    var subString = "";


    if(len > num){
        if (num > 3){
            subString = str.substr(0, num-3);
            return subString + "...";
        } else {
            subString = str.substr(0, num);
            return subString + "...";
        }
    } else {
        subString = str;
        return subString;
    }
}
truncate("A-tisket a-tasket A green and yellow basket", 11);
