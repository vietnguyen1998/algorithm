//https://leetcode.com/problems/two-sum-less-than-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
    let res = -1
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] < k){
                res = Math.max(res, nums[i] + nums[j])
            }
        }
    }
    return res
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK2 = function (nums, k) {
    let res = -1
    nums.sort((a, b) => a - b)
    let left = 0
    let right = nums.length - 1
    while (left != right) {
        let sum = nums[left] + nums[right]
        if (sum < k) {
            res = Math.max(res, sum)
            left++
        }
        else if (sum >= k) right--
    }
    return res
};

let nums = [1,2,4,5], k = 6

twoSumLessThanK2(nums, k)