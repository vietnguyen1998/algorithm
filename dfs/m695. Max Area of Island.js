//https://leetcode.com/problems/max-area-of-island/description/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let m = grid.length
    let n = grid[0].length
    visited = new Array(m).fill().map(() => [])
    let result = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && grid[i][j] == 1) {
                count = 1
                dfs(grid, i, j)
                result.push(count)
            }
        }
    }
    return result.length > 0 ? Math.max(...result) : 0
};

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

var dfs = function (grid, i, j) {
    visited[i][j] = true
    for (let k = 0; k < 4; k++) {
        let x = i + dx[k]
        let y = j + dy[k]
        if (x >= 0 && y >= 0 && y < grid[0].length && x < grid.length && !visited[x][y] && grid[x][y] == 1) {
            count++
            dfs(grid, x, y)
        }
    }
}
