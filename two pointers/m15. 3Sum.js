//https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    if (nums.length < 3) return null
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break
        if (nums[i] == nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1
        let target = -nums[i]
        while (left < right) {
            let sum = nums[left] + nums[right]
            if (sum > target) right--
            else if (sum < target) left++
            else {
                result.push([nums[i], nums[left], nums[right]])
                while (nums[left] == nums[left + 1]) left++
                left++
            }
        }
    }
    return result
};



let nums = [-1,0,1,2,-1,-4]
threeSum(nums)