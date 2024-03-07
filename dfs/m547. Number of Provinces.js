/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let result = 0
    visited = []
    for (let i = 0; i < isConnected.length; i++) {
        if (!visited[i]) {
            result++
            dfs(isConnected, i)
        }
    }
    return result
};

var dfs = function (isConnected, index) {
    let value = isConnected[index]
    visited[index] = true
    for (let i = 0; i < value.length; i++) {
        if (value[i] == 1 && !visited[i]) dfs(isConnected, i)
    }
}