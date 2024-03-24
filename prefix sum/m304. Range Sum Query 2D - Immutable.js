// https://leetcode.com/problems/range-sum-query-2d-immutable/
/**
 * @param {number[][]} matrix
 */
// f[x,y] = a[x,y] + f[x-1, y] + f[x, y-1] - f[x-1, y-1]
var NumMatrix = function (matrix) {
    // create prefix array
    let row = matrix.length
    let col = matrix[0].length
    prefix = Array.from({ length: row + 1 }, (e) => Array.from({ length: col + 1 }, (i) => 0))

    // calculation prefix
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            prefix[i + 1][j + 1] = matrix[i][j] + prefix[i + 1][j] + prefix[i][j + 1] - prefix[i][j]
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return prefix[row2 + 1][col2 + 1] - prefix[row2 + 1][col1] - prefix[row1][col2 + 1] + prefix[row1][col1]
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */