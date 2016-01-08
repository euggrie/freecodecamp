/**
 Check if a string (first argument) ends with the given target string (second argument).
 */

function end(str, target) {


    var a = Number(target.length);
    var subString = str.substr(-a, a);

    return subString === target;

}

end("Bastian", "n");