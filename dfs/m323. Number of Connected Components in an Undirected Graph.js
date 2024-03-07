/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
    let adj = converAdjList(n, edges)
    visited = []
    let count = 0
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            count++
            dfs(adj, i)
        }
    }
    return count
};

var dfs = function (adj, index) {
    visited[index] = true
    let child = adj[index]
    for (let i = 0; i < child.length; i++) {
        if (!visited[child[i]]) {
            dfs(adj, child[i])
        }
    }
}

var converAdjList = function (n, edges) {
    let result = new Array(n).fill().map(() => [])
    for (const [u, v] of edges) {
        result[u].push(v)
        result[v].push(u)
    }
    return result
}