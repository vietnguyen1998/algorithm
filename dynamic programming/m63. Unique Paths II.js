//https://leetcode.com/problems/unique-paths-ii/description/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let row = obstacleGrid.length
    let col = obstacleGrid[0].length
    let arr = Array.from({ length: row }, () => Array.from({ length: col }, () => 1))
    let number = 1
    for (let i = 0; i < col; i++) {
        if (obstacleGrid[0][i] == 1) number = 0
        arr[0][i] = number
    }
    number = 1
    for (let i = 0; i < row; i++) {
        if (obstacleGrid[i][0] == 1) number = 0
        arr[i][0] = number
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (obstacleGrid[i][j] == 1) arr[i][j] = 0
            else arr[i][j] = arr[i][j - 1] + arr[i - 1][j]
        }
    }
    return arr[row - 1][col - 1]
};