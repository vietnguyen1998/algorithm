//https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] == target) return true
        if (nums[left] === nums[mid]) {
            left++;
            continue;
        }
        if (nums[mid] >= nums[left]) {
            if (target >= nums[left] && target <= nums[mid]) right = mid - 1
            else left = mid + 1
        } else {
            if (target >= nums[mid] && target <= nums[right]) left = mid + 1
            else right = mid - 1
        }
    }
    return false
};
let nums = [1,0,1,1,1], target = 0
search(nums, target)