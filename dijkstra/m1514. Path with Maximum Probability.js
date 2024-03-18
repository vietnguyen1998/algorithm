/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {
    let result = -1

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
    let nodes = Array.from({ length: n }, (_, i) => i.toString())
    let distance = {}
    nodes.map((e) => distance[e] = -Infinity)
    distance[start_node] = 1
    let visited = new Map()

    // dif
    while (nodes.length > 0) {
        let closest = nodes.shift()
        visited.set(closest, true)
        for (let item in adjList[closest]) {
            let a = visited.has(item)
            if (!visited.has(item)) {
                let newDistance = distance[closest] * adjList[closest][item]
                console.log(newDistance)
                if (newDistance > distance[item]) {
                    distance[item] = newDistance
                }
            }
        }
    }
    result = distance[end_node]
    return result
};

let n = 5, edges = [[1,4],[2,4],[0,4],[0,3],[0,2],[2,3]], succProb = [0.37,0.17,0.93,0.23,0.39,0.04], start = 3, end = 2
maxProbability(n, edges, succProb, start, end)

(n+m)(nlogn)