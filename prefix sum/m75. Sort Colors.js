//https://leetcode.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let numberOfZero = 0
    let numberOfOne = 0
    let numberOfTwo = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) numberOfZero++
        if (nums[i] == 1) numberOfOne++
        if (nums[i] == 2) numberOfTwo++
    }
    for (let i = 0; i < nums.length; i++) {
        if (numberOfZero-- > 0) nums[i] = 0
        else if (numberOfOne-- > 0) nums[i] = 1
        else if (numberOfTwo-- > 0) nums[i] = 2
    }
};