"use strict";

/** this function accepts an array of non-zero integers and returns the same array with the integers separated--positives to the left and negatives to the right */
function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right){
        if (nums[left] > 0) left++;
        if (nums[right] < 0) right--;
        if (nums[left] < 0 && nums[right] > 0) {
            // let tempLeft = nums[left];
            // nums[left] = nums[right];  //[arr[0], arr[1]] = [arr[1], arr[0]] [nums[left], nums[right]] = [nums[right], nums[left]];
            // nums[right] = tempLeft;
            // left++;
            // right--;

            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }

    return nums;
}


//pseudocode
//make two pointers, one is at index[0](left) and the other is at the end index[arr.length-1](right)
//use a while loop iterate over array, as long as left < right
    //check if the arr[left] > 0, move right (left++)
    //if arr[left] < 0 && arr[right] > 0, inline switch 
    //check if the arr[right] < 0, move left (right--)


/**this is an alternate solution we found using a temp variable instead of an inline swap  */
   /* function separatePositive(nums) {
        let left = 0;
        let right = nums.length - 1;
    
        while (left < right){
            if (nums[left] > 0) left++;
            if (nums[right] < 0) right--;
            if (nums[left] < 0 && nums[right] > 0) {
                let tempLeft = nums[left];
                nums[left] = nums[right];  //[arr[0], arr[1]] = [arr[1], arr[0]] [nums[left], nums[right]] = [nums[right], nums[left]];
                nums[right] = tempLeft;
                left++;
                right--;
            }
        }
    
        return nums;
    }
    */
/*
Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).

Examples:

separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
separatePositive([5, 10, -15, 20, 25])   // [5, 10, 25, 20, -15]
separatePositive([-5, 5])                // [5, -5]
separatePositive([1, 2, 3])              // [1, 2, 3]
Constraints

Time Complexity: O(n)
*/