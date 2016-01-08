/*Return true if the given string is a palindrome. Otherwise, return false.

 A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

 You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.*/


function palindrome(str) {

    var str1 = str.toLowerCase().replace(/\W|_/g, '');
    var str2 = str1.split("").reverse().join('');


    return(str1 === str2);
}

palindrome("A man, a plan, a canal. Panama");