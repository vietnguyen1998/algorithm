/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let result = -1
    
    //convert
    let adjList = {}
    for(const [u,v,w] of times){
        if(!adjList[u]) adjList[u] = {}
        adjList[u][v] = w
    }
    
    // init 
    let nodes = Array.from({length: n}, (_, i) => i+1)
    let distance = {}
    nodes.map(e => distance[e] = Infinity)
    distance[k] = 0
    let visited = new Map()

    // dij
    while(nodes.length > 0){
        nodes.sort((a,b) => distance[a] -distance[b])
        let closest = nodes.shift()
        visited[closest] = true
        for(let item in adjList[closest]){
            if(!visited[item]){
                let newDistance = distance[closest] + adjList[closest][item]
                if(newDistance < distance[item]){
                    distance[item] = newDistance
                }
            }
        }
    }
    let arr = Object.values(distance)
    result = Math.max(arr)
    return result
};

let times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
networkDelayTime(times, n, k)