//https://leetcode.com/problems/search-a-2d-matrix-ii/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
    let row = 0
    let col = n - 1
    while (row < m && col >= 0) {
        let value = matrix[row][col]
        if (value > target) {
            col--
        } else if (value < target) {
            row++
        } else {
            return true
        }
    }
    return false
};