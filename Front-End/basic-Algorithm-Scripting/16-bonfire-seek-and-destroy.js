/**
 You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 */
function destroyer(arr) {

    var toDelete = [];

    for(var i = 1; i < arguments.length; i++){
        toDelete.push(arguments[i]);
    }

    var toKeep = arguments[0].filter(function(element, index){
        var toReturn = true;

        for(var i = 0; i < toDelete.length; i++){
            if (element === toDelete[i]){
                toReturn = false;
            }
        }
        return toReturn;
    });
    return toKeep;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
