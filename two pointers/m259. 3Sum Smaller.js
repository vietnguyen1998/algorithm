//https://leetcode.com/problems/3sum-smaller/submissions/1203048717/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function (nums, target) {
    nums.sort((a, b) => a - b)
    let result = 0
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1
        let right = nums.length - 1
        while (left != right) {
            let sum = nums[left] + nums[right] + nums[i]
            if (sum < target) {
                console.log(right - left)
                result += right - left
                left++
            }
            else right--
        }
    }
    return result
};

let nums = [-2, 0, 1, 3]
let b = threeSumSmaller(nums, 4)
''