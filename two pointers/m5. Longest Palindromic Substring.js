// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let result = [0, 1]
    let n = s.length
    let max = 1
    for (let i = 0; i < n; i++) {
        let left = i
        let right = i
        while (left >= 0 && right < n && s[left] == s[right]) {
            left--
            right++
        }
        if (max < right - left - 1) {
            result = [left + 1, right]
            max = right - left - 1
        }
    }

    for (let i = 0; i < n; i++) {
        let left = i
        let right = i + 1
        while (left >= 0 && right < n && s[left] == s[right]) {
            left--
            right++
        }
        if (max < right - left - 1) {
            result = [left + 1, right]
            max = right - left - 1
        }
    }
    return s.substring(result[0], result[1])
}
longestPalindrome("babad")