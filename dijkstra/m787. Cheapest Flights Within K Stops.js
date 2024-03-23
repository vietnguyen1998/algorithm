//https://leetcode.com/problems/cheapest-flights-within-k-stops/
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let result = Infinity

    //convert
    let adjList = {}
    for (const [u, v, w] of flights) {
        if (!adjList[u]) adjList[u] = {}
        adjList[u][v] = w
    }

    // init
    let travel = [[src, 0]]
    let distance = {}
    Array.from({length: n}, (_, i) => distance[i] = Infinity)
    distance[src] = 0

    // dij
    k++
    while (k >= 0 && travel.length > 0) {
        let size = travel.length
        for (let i = 0; i < size; i++) {
            let [u, w] = travel.shift()
            if (u == dst) result = Math.min(result, w)
            for (let item in adjList[u]) {
                let newDistance = w + adjList[u][item]
                if(newDistance < distance[item]){
                    distance[item] = newDistance
                    travel.push([item, newDistance])
                }
            }
        }
        k--
    }
    return result == Infinity ? -1 : result
}

let n = 5, flights = [[0, 1, 5], [1, 2, 5], [0, 3, 2], [3, 1, 2], [1, 4, 1], [4, 2, 1]], src = 0, dst = 2, k = 2
findCheapestPrice(n, flights, src, dst, k)