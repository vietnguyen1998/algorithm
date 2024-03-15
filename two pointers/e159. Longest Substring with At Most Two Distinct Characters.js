/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    let result = 0
    let left = 0
    let right = 0
    let n = s.length
    let map = new Map()
    map.set(s[0], 1)
    while (right < n) {
        if (map.size > 2) {
            result = Math.max(result, right - left)
            let count = map.get(s[left])
            if (count > 1) {
                map.set(s[left], count - 1)
            } else {
                map.delete(s[left])
            }
        }
        else {
            right++
            map.set(s[right], map.has(s[right]) ? map.has(s[right]) + 1 : 1)
        }
    }
    return result
};

let s = "eceba"
lengthOfLongestSubstringTwoDistinct(s)