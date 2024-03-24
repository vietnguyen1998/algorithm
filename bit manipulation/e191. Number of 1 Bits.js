//https://leetcode.com/problems/number-of-1-bits/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
let hammingWeight = function (n) {
    let count = 0;
    while (n > 0) {
        if (n % 2 != 0) count++
        n = n >> 1
    }
    return count;
};