const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {
    let result = 0

    // convert
    let adjList = {}
    for (let i = 0; i < edges.length; i++) {
        let [u, v] = edges[i]
        if (!adjList[u]) adjList[u] = {}
        if (!adjList[v]) adjList[v] = {}
        adjList[u][v] = succProb[i]
        adjList[v][u] = succProb[i]
    }

    // init 
    let queue = new MaxPriorityQueue({ compare: (a, b) => b[1] - a[1] })
    queue.enqueue([start_node, 1])
    let distance = {}
    Array.from({ length: n }, (_, i) => distance[i] = -Infinity)
    distance[start_node] = 1
    let visited = new Map()

    // dif
    while (queue.size() > 0) {
        let [closest, w] = queue.dequeue()
        visited.set(closest.toString(), true)
        for (let item in adjList[closest]) {
            if (!visited.has(item)) {
                let newDistance = w * adjList[closest][item]
                if (newDistance > distance[item]) {
                    distance[item] = newDistance
                    if (item == end_node) result = Math.max(result, newDistance)
                    queue.enqueue([item, newDistance])
                }
            }
        }
    }
    return result
};