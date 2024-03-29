//https://leetcode.com/problems/unique-paths/description/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let arr = Array.from({ length: m }, () => Array.from({ length: n }, () => 1))
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
        }
    }
    return arr[m-1][n-1]
};