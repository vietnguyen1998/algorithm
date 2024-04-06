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