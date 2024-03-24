//https://leetcode.com/problems/move-zeroes/
/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
var moveZeroes = function (nums) {
    let left = 0
    let right = 0
    while (left < nums.length && right < nums.length) {
        if (nums[left] == 0 && nums[right] != 0) {
            let temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            left++
        }
        while (nums[left] != 0 && left < nums.length) left++
        if (right < left) right = left
        right++
    }
};