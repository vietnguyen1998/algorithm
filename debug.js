/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let result = 0
    let count = 0
    let left = 0
    let right = 0
    let n = nums.length
    while (right < n) {
        if (nums[right] == 0) count++
        if (count > k) {
            while (nums[left] != 0) left++
            left++
            count--
        } else {
            result = Math.max(result, right - left + 1)
        }
        right++
    }
    return result
};