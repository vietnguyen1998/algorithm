/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let result = -1

    //convert
    let adjList = {}
    for (const [u, v, w] of flights) {
        if (!adjList[u]) adjList[u] = {}
        adjList[u][v] = w
    }

    // init
    let nodes = Array.from({ length: n }, (_, i) => i)
    let distance = {}
    nodes.map(e => distance[e] = Infinity)
    distance[src] = 0
    let visited = new Map()

    // dij
    let contains = [[src, 0]]
    while (k >= 0 && contains.length > 0) {
        let size = contains.length
        contains.sort(([a, w1], [b, w2]) => w1-w2)
        for (let i = 0; i < size; i++) {
            let [u, w] = contains.shift()
            visited.set(u.toString(), true)
            for (let item in adjList[u]) {
                if (!visited.has(item)) {
                    let newDistance = w + adjList[u][item]
                    if (newDistance < distance[item]) {
                        distance[item] = newDistance
                    }
                    contains.push([item, distance[item]])
                }
            }
        }
        k--
    }
    return result[dst]
}

let n = 5
let flights = [[0, 1, 5], [1, 2, 5], [0, 3, 2], [3, 1, 2], [1, 4, 1], [4, 2, 1]]
let src = 0, dst = 2, k = 2
findCheapestPrice(n, flights, src, dst, k)