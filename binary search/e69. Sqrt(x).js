// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x == 1) return 1
    if (x == 2) return 1
    let left = 1
    let result = 0
    let right = Math.floor(x / 2)
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (mid * mid <= x) {
            result = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return result
};