//https://leetcode.com/problems/delete-operation-for-two-strings/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let row = word1.length + 1
    let col = word2.length + 1
    let array = Array.from({ length: row }, () => Array.from({ length: col }, () => 0))
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                array[i][j] = array[i - 1][j - 1] + 1
            } else {
                array[i][j] = Math.max(array[i - 1][j], array[i][j - 1])
            }
        }
    }
    return (word1.length + word2.length) - (array[row - 1][col - 1] * 2)
};