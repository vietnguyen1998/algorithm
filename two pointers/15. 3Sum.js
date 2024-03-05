/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort()
    let i = 0
    let result = []
    while (i < nums.length - 2) {
        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]
            if (sum == 0) {
                result.push([nums[i], nums[l], nums[r]])
                while (nums[l] == nums[l + 1]) {
                    l++
                }
                l++
            } else if (sum > 0) {
                r--
            } else {
                l++
            }
        }
        while (nums[i] == nums[i + 1]) {
            i++
        }
        i++
    }
    return result
};

let nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
threeSum(nums)