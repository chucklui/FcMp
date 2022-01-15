'use strict';
// add whatever parameters you deem necessary
/**this function takes two integer and returns boolean based on if they both have same freq */
function sameFrequency(num1, num2) {
    let num1Obj = numObj(num1);
    let num2Obj = numObj(num2);

    for(let num1key in num1Obj){
        if(num1Obj[num1key] !== num2Obj[num1key]){
            return false;
        }
    }
    return true;
}

//pseudo code
//helper function to create objects
//loop one object 
    //if !(obj[key] === obj2[key]) return false
//return true

/**helper function to make obj */
function numObj(num){
    let obj = {};
    let stringNum = num.toString();
    for(let char of stringNum){
        obj[char] = (obj[char] || 0) + 1;
    }
    return obj;
}