/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let res = [-1, -1]
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] > target) right = mid - 1
        else if (nums[mid] < target) left = mid + 1
        else {
            let index = mid
            if (nums[index] == nums[mid]) while (nums[index] == nums[mid]) index--
            res[0] = index + 1

            index = mid + 1
            if (nums[index] == nums[mid]) while (nums[index] == nums[mid]) index++
            res[1] = index -1
            return res
        }
    }
    return res
};

let nums = [5, 7, 7, 8, 8, 10], target = 8
let a = searchRange(nums, target)
''