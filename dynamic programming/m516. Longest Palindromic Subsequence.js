//https://leetcode.com/problems/longest-palindromic-subsequence/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    // dp[i][j] = the longest palindromic subsequence's length
    // if(s[i]==s[j]) dp[i][j] = dp[i+1][j-1] + 2
    // else dp[i][j] = max(dp[i+1][j], dp[i][j-1])
    // f[i][i] = 1
    // f[i][i+1] = s[i] == s[i+1] ? 2 : 1

    let n = s.length
    let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1
        if (i < n - 1)
            dp[i][i + 1] = (s[i] == s[i + 1]) ? 2 : 1
    }

    for (let k = 2; k < n; k++) {
        for (let i = 0; i < n - k; i++) {
            let j = i + k
            if (s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[0][n - 1]
};