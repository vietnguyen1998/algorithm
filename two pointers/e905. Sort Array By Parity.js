//https://leetcode.com/problems/sort-array-by-parity/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let left = 0
    let right = nums.length - 1
    while (left != right) {
        if(nums[left] % 2 == 0) left++
        else if(nums[right] % 2 != 0) right--
        else{
            let temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            left++
        }
    }
    return nums
};