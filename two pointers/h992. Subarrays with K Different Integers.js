//https://leetcode.com/problems/subarrays-with-k-different-integers/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
    return subarrayMost(nums, k) - subarrayMost(nums, k - 1)
};

var subarrayMost = function (nums, k) {
    let left = 0
    let right = 0
    let result = 0
    let map = new Map()
    while (right < nums.length) {
        let value = nums[right]
        map.set(value, map.has(value) ? map.get(value) + 1 : 1)

        while (map.size > k) {
            let valueL = nums[left]
            if (map.get(valueL) > 1) {
                map.set(valueL, map.get(valueL) - 1)
            } else {
                map.delete(valueL)
            }
            left++
        }

        result += right - left + 1
        right++
    }
    return result
}

let nums = [1,2,1,2,3], k = 2
subarraysWithKDistinct(nums, k)