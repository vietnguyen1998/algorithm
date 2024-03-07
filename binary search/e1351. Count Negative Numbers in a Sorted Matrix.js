// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

/**
 * @param {number[][]} grid
 * @return {number}
 * time O(nlogn)
 * space O(1)
 */
var countNegatives = function (grid) {
    if (grid.length == 0) return 0
    let count = 0
    for (const item of grid) {
        let l = 0
        let r = grid[0].length - 1
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            if (item[mid] < 0) {
                count += r - mid + 1
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }
    return count
};

let a = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]

let b = countNegatives(a)
''