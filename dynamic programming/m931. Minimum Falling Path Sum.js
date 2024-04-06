//https://leetcode.com/problems/minimum-falling-path-sum/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    let n = matrix.length
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let left = j == 0 ? Infinity : matrix[i - 1][j - 1] + matrix[i][j]
            let mid = matrix[i - 1][j] + matrix[i][j]
            let right = j == n - 1 ? Infinity : matrix[i - 1][j + 1] + matrix[i][j]
            matrix[i][j] = Math.min(left, mid, right)
        }
    }
    return Math.min(...matrix[n - 1])
};