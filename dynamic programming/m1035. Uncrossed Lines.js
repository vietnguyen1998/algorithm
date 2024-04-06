//https://leetcode.com/problems/uncrossed-lines/description/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
    // B1: arr[i][j] = maximum number of connecting lines
    // B2: if nums1[i] == nums2[j] => arr[i][j] = arr[i-1][j-1] + 1
    //     else arr[i][j] = max(arr[i-1][j], arr[i][j-1])
    // B3: return arr[n1-1][n2-1]
    let row = nums1.length + 1
    let col = nums2.length + 1
    let db = Array.from({ length: row }, () => Array.from({ length: col }, () => 0))
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                db[i][j] = db[i - 1][j - 1] + 1
            } else {
                db[i][j] = Math.max(db[i][j - 1], db[i - 1][j])
            }
        }
    }
    return db[row - 1][col - 1]
};