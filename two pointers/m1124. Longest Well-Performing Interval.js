//https://leetcode.com/problems/longest-well-performing-interval/
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    let result = 0
    let n = hours.length
    let map = new Map()
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += hours[i] > 8 ? 1 : -1
        if (!map.has(sum)) map.set(sum, i)
        if (sum > 0) result = i + 1
        else if (map.has(sum - 1)) result = Math.max(result, i - map.get(sum - 1))
    }
    return result
};
let h = [9, 0, 0, 9, 0, 0, 9, 0]
longestWPI(h)