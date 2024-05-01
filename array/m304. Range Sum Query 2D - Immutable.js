//https://leetcode.com/problems/range-sum-query-2d-immutable/description/   
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    let row = matrix.length
    let col = matrix[0].length
    this.prefix = Array.from({ length: row + 1 }, () => Array.from({ length: col + 1 }, () => 0))
    console.log(this.prefix)
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            this.prefix[i + 1][j + 1] = this.prefix[i][j + 1] + this.prefix[i + 1][j] + matrix[i][j] - this.prefix[i][j]
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
    return this.prefix[row2 + 1][col2 + 1] - this.prefix[row2 + 1][col1] - this.prefix[row1][col2 + 1] + this.prefix[row1][col1]
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */