"use strict";

/** This function takes in two arrays and returns an object with keys from one array and values for the keys from the other array. */

function twoArrayObject(keys, values) {
    const propertiesObj = {};

    for (let i = 0; i < keys.length; i++){
        propertiesObj[keys[i]] = values[i] || null;
    }

    return propertiesObj;
}

//O(n)

//pseudocode
//create a variable set to an empty obj
//loop over the key array
    //add the current element along with the second array element to the object
//return the variable 


/*
twoArrayObject»
Write a function called twoArrayObject which accepts two arrays of varying lengths. The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

Examples:

twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])
  // {'a': 1, 'b': 2, 'c': 3, 'd': null}

twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])
  // {'a': 1, 'b': 2, 'c': 3}

twoArrayObject(['x', 'y', 'z'], [1, 2])
  // {'x': 1, 'y': 2, 'z': null}
*/