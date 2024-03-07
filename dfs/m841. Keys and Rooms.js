//https://leetcode.com/problems/number-of-provinces/
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let n = rooms.length
    visited = []
    let count = 0
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(rooms, i)
            count++
        }
    }
    return count == 1
};

var dfs = function (rooms, i) {
    if (rooms == null) return
    visited[i] = true
    let value = rooms[i]
    for (let i = 0; i < value.length; i++) {
        if (!visited[value[i]]) dfs(rooms, value[i])
    }
}