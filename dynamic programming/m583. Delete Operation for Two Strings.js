//https://leetcode.com/problems/delete-operation-for-two-strings/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let row = word1.length + 1
    let col = word2.length + 1
    let db = db.from({ length: row }, () => db.from({ length: col }, () => 0))
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                db[i][j] = db[i - 1][j - 1] + 1
            } else {
                db[i][j] = Math.max(db[i - 1][j], db[i][j - 1])
            }
        }
    }
    return (word1.length + word2.length) - (db[row - 1][col - 1] * 2)
};