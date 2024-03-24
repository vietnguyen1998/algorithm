//https://leetcode.com/problems/sort-array-by-parity-ii/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    // sort even -> old
    let left = 0
    let right = nums.length - 1
    while (left != right) {
        if (nums[left] % 2 == 0) left++
        else if (nums[right] % 2 != 0) right--
        else {
            let temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            left++
        }
    }
    // change to even-odd-even-odd
    left = 1
    right = nums.length - 2
    while (left <= right) {
        let temp = nums[right]
        nums[right] = nums[left]
        nums[left] = temp
        left += 2
        right -= 2
    }
    return nums
};