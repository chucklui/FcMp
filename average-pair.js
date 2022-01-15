'use strict';
// add whatever parameters you deem necessary
/**this function takes in an array and an average number returns boolean if there is a pair 
 * where the two numbers === avg
*/
function averagePair(nums, targetAvg) {
    if(nums.length < 1) return false;
    
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        let tempAvg = (nums[left] + nums[right]) / 2;
        if(tempAvg < targetAvg) left++;
        if(tempAvg > targetAvg) right--;
        if(tempAvg === targetAvg) return true;
    }
    return false;
}

//left pointer start from the beginning
//right pointer start from the end of array
//while loop 
    //if < targetAvg, then move left pointer to right
    //if > targetAvg, then move right pointer to left
    //if average equals to targetAvg, then return true
//return false

/*averagePair([1, 2, 3], 2.5)                     // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)  // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1)           // false
averagePair([], 4)                              // false
*/
