// https://leetcode.com/problems/longest-palindromic-substring/
function longestPalindrome(s) {
    let n = s.length;
    let result = s[0]
    let db = Array.from({ length: n }, () => Array.from({ length: n }, () => false))
    for (let i = 0; i < n; i++) {
        db[i][i] = true
        if (s[i] == s[i + 1]) {
            db[i][i + 1] = true
            result = s.substring(i, i + 2)
        }
    }

    for (let k = 2; k < n; k++) {
        for (let i = 0; i < n - k; i++) {
            let j = i + k
            if (s[i] == s[j] && db[i + 1][j - 1]) {
                db[i][j] = true
                if (result.length < k + 1) {
                    result = s.substring(i, j + 1)
                }
            }
        }
    }
    return result;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function (s) {
    // s2 = reverse s
    // dp[i][j] = longest palindromic substring
    // if(s[i]==s[j] && dp[i+1][j-1]) dp[i][j] = true
    // dp[i][i] = true
    // dp[i][i+1] = s[i] == s[i+1]
    let ans = [0, 0]
    let n = s.length
    let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => false))
    for (let i = 0; i < n; i++) {
        dp[i][i] = true
        if (s[i] == s[i + 1]) {
            dp[i][i + 1] = true
            ans[0] = i;
            ans[1] = i + 1;
        }
    }
    for (let k = 2; k < n; k++) {
        for (let i = 0; i < n - k; i++) {
            let j = i + k
            if (s[i] == s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true
                ans[0] = i;
                ans[1] = j;
            }
        }
    }
    return s.slice(ans[0], ans[1] + 1)
}