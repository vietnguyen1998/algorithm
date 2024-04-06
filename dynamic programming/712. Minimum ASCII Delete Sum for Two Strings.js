//https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
    let row = s1.length + 1
    let col = s2.length + 1
    let db = Array.from({ length: row }, () => Array.from({ length: col }, () => 0))

    for (let i = 1; i < col; i++)
        db[0][i] = db[0][i - 1] + s2[i - 1].charCodeAt(0)
    for (let i = 1; i < row; i++)
        db[i][0] = db[i - 1][0] + s1[i - 1].charCodeAt(0)

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                db[i][j] = db[i - 1][j - 1]
            } else {
                db[i][j] = Math.min(
                    db[i - 1][j] + s1[i - 1].charCodeAt(0),
                    db[i][j - 1] + s2[j - 1].charCodeAt(0)
                )
            }
        }
    }
    return db[row - 1][col - 1]
};