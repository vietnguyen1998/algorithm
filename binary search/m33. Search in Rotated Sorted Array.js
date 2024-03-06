// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) return mid;
        if (nums[mid] >= nums[left]) {
            if (target >= nums[left] && target < nums[mid]) right = mid - 1
            else left = mid + 1
        } else {
            if (target <= nums[right] && target > nums[mid]) left = mid + 1
            else right = mid - 1
        }
    }
    return -1;
}

let nums = [4,5,6,7,0,1,2], target = 0
search(nums, target)