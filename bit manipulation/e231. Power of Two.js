// https://leetcode.com/problems/power-of-two/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n <= 0) return false
    while (n > 1) {
        if (n % 2 != 0) return false
        n = n / 2
    }
    return true
};

var isPowerOfTwo2 = function (n) {
    if (n <= 0) return false
    return (n & (n - 1)) == 0
};