//https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
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
    while (right < n) {
        let value = s[right]
        map.set(value, map.has(value) ? map.get(value) + 1 : 1)
        while (map.size > 2) {
            let valueL = s[left]
            if (map.get(valueL) > 1) map.set(valueL, map.get(valueL) - 1)
            else map.delete(valueL)
            left++
        }
        result = Math.max(result, right - left + 1)
        right++
    }
    return result
};

let s = "eceba"
lengthOfLongestSubstringTwoDistinct(s)

/**
    "eceba"
    
    map = [ b: 1, a: 1]
    
    left =3

    result = max 3
    right = 5
 */

/**
while(right<n)
    while(map.size > 2)
        if map.get(left) > 1
            map.set(left, get(right) - 1)
        else
            map.delete(left)
        left++

    result = max(result, right - left + 1)
    right++
*/