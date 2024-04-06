//https://leetcode.com/problems/longest-palindromic-subsequence/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let n = s.length
    let result = 1
    let db = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
    for (let i = 0; i < n; i++) {
        db[i][i] = 1
        db[i][i + 1] = 1
        if (s[i] == s[i + 1]) {
            db[i][i + 1] = 2
            result = 2
        }
    }
    for (let k = 2; k < n; k++) {
        for (i = 0; i < n - k; i++) {
            let j = i + k
            if (s[i] == s[j]) {
                let newValue = db[i + 1][j - 1] + 2
                db[i][j] = newValue
                if(newValue > result) result = newValue
            } else {
                db[i][j] = Math.max(db[i + 1][j], db[i][j - 1])
            }
        }
    }
    return result
}

longestPalindromeSubseq("abcabc")