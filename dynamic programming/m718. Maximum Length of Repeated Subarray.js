//https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    let row = nums1.length + 1
    let col = nums2.length + 1
    let db = Array.from({ length: row }, () => Array.from({ length: col }, () => 0))
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                db[i][j] = db[i - 1][j - 1] + 1
            }
        }
    }
    let result = 0
    for (let i = 0; i < row; i++) {
        result = Math.max(result, ...db[i])
    }
    return result
};