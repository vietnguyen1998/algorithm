//https://leetcode.com/problems/longest-common-subsequence/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let length1 = text1.length + 1
    let length2 = text2.length + 1
    let array = Array.from({ length: length1 }, (e) => Array.from({ length: length2 }, (i) => 0))
    for (let i = 1; i < length1; i++) {
        for (let j = 1; j < length2; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                array[i][j] = array[i - 1][j - 1] + 1
            } else {
                array[i][j] = Math.max(array[i - 1][j], array[i][j - 1])
            }
        }
    }
    return array[length1 - 1][length2 - 1]
};