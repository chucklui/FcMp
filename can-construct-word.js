"use strict";


/** compares two string objects (one for word, one for letters) and returns true if the word can be built with the letters given, else returns false */
function canConstructWord(word, letters) {
    if (letters.length < word.length) return false ;

    let wordObj = makeObj(word);
    let lettersObj = makeObj(letters);

    for (let wordKey in wordObj) {
        if (!(lettersObj[wordKey] >= wordObj[wordKey])){
            return false;
        } 
    }
    return true;

}

/** creates an object for a string argument and counts the freq of each letter in the string */
function makeObj(string){
    let strObj = {};
    for (let char of string) {
        strObj[char] = (strObj[char] || 0) + 1;
    }
    return strObj;
}

//pseudocode
//create two objs, one for the word str and the other for the letters str
//check that the same letter key exists in each obj, else return false
//loop over letter obj, 

//as long as they have the same keys and the val of the key in the letter obj is greater than or equal to the val of the same key in the word obj


/*
canConstructWord»
Write a function called canConstructWord, which accepts two strings: a word and some letters. The function should return true if the word can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the word and the letters.

Constraints:

Time Complexity: O(m + n) (if m is the length of word and n is the length of letters)

Examples:

canConstructWord('aa', 'abc')
  // false -- can't build "aa" with only 1 "a"

canConstructWord('abc', 'dcba')
  // true -- can build "abc" with letters "abcd"

canConstructWord('aabbcc', 'bcabcaddff')
  // true -- can build "aabbcc" with those letters
*/