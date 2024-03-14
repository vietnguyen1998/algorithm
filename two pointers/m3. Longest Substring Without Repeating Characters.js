//https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let res = 0
    let right = 0
    let left = 0
    let n = s.length
    let map = new Map()
    while (right < n) {
        let char = s[right]
        if (map.has(char)) {
            map.delete(s[left])
            left++
        } else {
            map.set(s[right], true)
            res = Math.max(res, map.size)
            right++
        }
    }
    return res
};
let s = "pwwkew"
lengthOfLongestSubstring(s)