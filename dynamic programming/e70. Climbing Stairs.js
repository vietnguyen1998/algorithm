// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 1) return 1
    if (n == 2) return 2
    let map = new Map()
    map.set(1, 1)
    map.set(2, 2)
    for (let i = 3; i <= n; i++) {
        map.set(i, map.get(i - 1) + map.get(i - 2))
    }
    return map.get(n)
};