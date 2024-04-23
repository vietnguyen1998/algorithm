// Node class to represent each node in the tree
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        const child = new Node(value);
        this.children.push(child);
        return child;
    }
}

// Depth-First Search function
function dfs(node, visited = new Set()) {
    if (!node) {
        return;
    }

    console.log(node.value);
    visited.add(node);

    for (const child of node.children) {
        if (!visited.has(child)) {
            dfs(child, visited);
        }
    }
}

// Example usage
const root = new Node(1);
const child1 = root.addChild(2);
const child2 = root.addChild(3);
const child3 = root.addChild(4);

child1.addChild(5);
child1.addChild(6);
child2.addChild(7);

console.log("DFS Traversal:");
dfs(root);
