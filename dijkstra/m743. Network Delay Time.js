//https://leetcode.com/problems/network-delay-time/

const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
  } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    let result = -1

    //convert
    let adjList = {}
    for (const [u, v, w] of times) {
        if (!adjList[u]) adjList[u] = {}
        adjList[u][v] = w
    }

    // init 
    let queue = new MinPriorityQueue({ compare: (a, b) => a[1] - b[1] })
    queue.enqueue([k, 0])
    let visited = new Map()

    // dij
    while (queue.size() > 0) {
        let [node, distance] = queue.dequeue()
        if (visited.has(node)) continue
        visited.set(node.toString(), true)
        result = Math.max(result, distance)
        for (let item in adjList[node]) {
            if (!visited.has(item)) {
                let newDistance = distance + adjList[node][item]
                queue.enqueue([item, newDistance])
            }
        }
    }
    return visited.size == n ? result : -1
};

let  times = [[1,2,1],[2,3,2],[1,3,2]], n = 3, k = 1
networkDelayTime(times,n,k)
