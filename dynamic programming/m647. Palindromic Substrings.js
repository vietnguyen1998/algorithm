//https://leetcode.com/problems/palindromic-substrings/
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    // dp[i][j] = is palindromic substrings not have to continue
    // dp[i][j] = if(s[i] == s[j]) dp[i][j] = true
    // dp[i][i] = true
    // dp[i][i + 1] == s[i] == s[i+1]
    let n = s.length;
    let result = 0
    let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => false))
    for (let i = 0; i < n; i++) {
        dp[i][i] = true
        result++
        if (s[i] == s[i + 1]) {
            dp[i][i + 1] = true
            result++
        }
    }

    for (let k = 2; k < n; k++) {
        for (let i = 0; i < n - k; i++) {
            let j = i + k
            if (s[i] == s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true
                result++
            }
        }
    }
    return result;
};