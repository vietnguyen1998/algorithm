//https://leetcode.com/problems/4sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    let result = []
    let n = nums.length
    for (let i = 0; i < n - 3; i++) {
        if(nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < n - 2; j++) {
            if (nums[j] == nums[j - 1] && j > (i + 1)) continue
            let left = j + 1
            let right = n - 1
            while (left != right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum == target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    while (nums[left] == nums[left + 1]) left++
                    if(left < right) left++
                }
                else if (sum > target) right--
                else left++
            }
        }
    }
    return result
};

let nums = [-2,-1,-1,1,1,2,2], target = 0
fourSum(nums, target)