//https://leetcode.com/problems/connecting-cities-with-minimum-cost/
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function (n, connections) {
    connections.sort((a, b) => a[2] - b[2])
    console.log(connections)
    let set = new DisjointSets(n)
    let res = 0
    let count = 0
    for (let i = 0; i < connections.length; i++) {
        let x = connections[i][0] - 1
        let y = connections[i][1] - 1
        let cost = connections[i][2]
        if (set.Find(x) != set.Find(y)) {
            res += cost
            count++
            set.Union(x, y)
        }
    }
    return count == n - 1 ? res : -1
};

class DisjointSets {
    constructor(n) {
        this.rank = new Array(n);
        this.parent = new Array(n);
        this.n = n;
        this.makeSet();
    }

    makeSet() {
        for (let i = 0; i < this.n; i++) {
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }

    Find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.Find(this.parent[x]);
        }
        return this.parent[x];
    }

    Union(x, y) {
        let xset = this.Find(x);
        let yset = this.Find(y);

        if (xset === yset) return;

        if (this.rank[xset] < this.rank[yset]) {
            this.parent[xset] = yset;
        } else if (this.rank[xset] > this.rank[yset]) {
            this.parent[yset] = xset;
        } else {
            this.parent[yset] = xset;
            this.rank[xset] = this.rank[xset] + 1;
        }
    }
}