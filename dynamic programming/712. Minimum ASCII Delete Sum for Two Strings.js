//https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
    let row = s1.length + 1
    let col = s2.length + 1
    let arr = Array.from({ length: row }, () => Array.from({ length: col }, () => 0))

    for (let i = 1; i < col; i++)
        arr[0][i] = arr[0][i - 1] + s2[i - 1].charCodeAt(0)
    for (let i = 1; i < row; i++)
        arr[i][0] = arr[i - 1][0] + s1[i - 1].charCodeAt(0)

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                arr[i][j] = arr[i - 1][j - 1]
            } else {
                arr[i][j] = Math.min(
                    arr[i - 1][j] + s1[i - 1].charCodeAt(0),
                    arr[i][j - 1] + s2[j - 1].charCodeAt(0)
                )
            }
        }
    }
    return arr[row - 1][col - 1]
};