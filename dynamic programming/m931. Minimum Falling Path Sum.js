//https://leetcode.com/problems/minimum-falling-path-sum/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    let row = matrix.length + 1
    let col = matrix[0].length + 1
    let array = Array.from({ length: row }, () => Array.from({ length: col }, () => 0))
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            let left = j - 1 > 0 ? matrix[i - 1][j - 1] + array[i - 1][j - 1] : Infinity
            let mid = matrix[i - 1][j - 1] + array[i - 1][j]
            let right = j + 1 < col ? matrix[i - 1][j - 1] + array[i - 1][j + 1] : Infinity
            array[i][j] = Math.min(left, mid, right)
        }
    }
    let resArray = array[row - 1].slice(1)
    return Math.min(...resArray)
};