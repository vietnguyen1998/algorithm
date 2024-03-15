//https://leetcode.com/problems/subarray-product-less-than-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        let move = i
        let sum = 1
        while (sum < k) {
            sum *= nums[move]
            if (sum < k) result++
            move++
        }
    }
    return result
};

/**
10,5,2,6
       r
sum = 50
res = 7
 */