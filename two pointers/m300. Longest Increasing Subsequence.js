//https://leetcode.com/problems/longest-increasing-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // A[i] = length of the longest strictly increasing 
    // if(nums[i] > nums[j]) 
    // 	    A[i] = max(A[i], A[j] + 1)
    // A[i] = 1
    let array = Array.from({ length: nums.length }, () => 1)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) array[i] = Math.max(array[i], array[j] + 1)
        }
    }
    return Math.max(...array)
};