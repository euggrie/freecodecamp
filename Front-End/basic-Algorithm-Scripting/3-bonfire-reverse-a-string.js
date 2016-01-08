function reverseString(str) {
    var arr = str.split("");
    var newArr = arr.join([separator = ',']);
    var revArr = newArr.reverse();
    var revStr = revArr.join([separator = ',']);
    return revStr;
}

reverseString("hello");