//https://leetcode.com/problems/kth-largest-element-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let pivotIndex = Math.floor(nums.length / 2)
    let pivot = nums[pivotIndex]

    let left = []
    let mid = []
    let right = []

    for (let num of nums) {
        if (num > pivot) {
            left.push(num)
        } else if (num < pivot) {
            right.push(num)
        } else {
            mid.push(num)
        }
    }

    if (k <= left.length) {
        return findKthLargest(left, k)
    }

    if (left.length + mid.length < k) {
        return findKthLargest(right, k - left.length - mid.length)
    }

    return pivot
}
