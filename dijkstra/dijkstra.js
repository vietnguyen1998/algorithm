// Define a graph using an adjacency list
const graph = {
    A: { B: 1, C: 4 },      // Node A is connected to Node B with a weight of 1 and Node C with a weight of 4
    B: { A: 1, C: 2, D: 5 },  // ... and so on for other nodes
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

function dijkstra(graph, start) {
    // init
    let result = {};
    let visited = new Map();
    let nodes = Object.keys(graph);
    for (let node of nodes) { result[node] = Infinity;}
    result[start] = 0;

    while (nodes.length > 0) {
        // get min
        nodes.sort((a, b) => result[a] - result[b]);
        let closestNode = nodes.shift();

        if (result[closestNode] === Infinity) break;

        visited.set(closestNode, true);

        for (let item in graph[closestNode]) {
            if (!visited.has(item)) {
                // Update the shortest distance to this item
                let newDistance = result[closestNode] + graph[closestNode][item];
                if (newDistance < result[item]) result[item] = newDistance;
            }
        }
    }
    return result;
}

// Example: Find shortest result from node A to all other nodes in the graph
console.log(dijkstra(graph, "A")); // Outputs: { A: 0, B: 1, C: 3, D: 4 }
