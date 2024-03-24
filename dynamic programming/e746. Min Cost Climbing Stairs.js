/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let arr = []
    arr[0] = cost[0]
    arr[1] = cost[1]
    for (let i = 2; i < cost.length; i++) {
        arr[i] = Math.min(arr[i - 1] + cost[i], arr[i - 2] + cost[i])
    }
    return Math.min(arr[arr.length - 1], arr[arr.length - 2])
};