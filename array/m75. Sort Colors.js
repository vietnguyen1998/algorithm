//https://leetcode.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let numZero = 0
    let numOne = 0
    let numTwo = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) numZero++
        if (nums[i] == 1) numOne++
        if (nums[i] == 2) numTwo++
    }
    for (let i = 0; i < nums.length; i++) {
        if (numZero-- > 0) nums[i] = 0
        else if (numOne-- > 0) nums[i] = 1
        else if (numTwo-- > 0) nums[i] = 2
    }
};