//https://leetcode.com/problems/optimize-water-distribution-in-a-village/
/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function (n, wells, pipes) {
    // addition a well connect all houses
    for (let i = 0; i < n; i++) {
        pipes.push([n + 1, i + 1, wells[i]])
    }
    pipes.sort((a, b) => a[2] - b[2])
    // mst
    let set = new DisjointSets(n + 1)
    let result = 0
    for (let i = 0; i < pipes.length; i++) {
        let u = pipes[i][0] - 1
        let v = pipes[i][1] - 1
        let w = pipes[i][2]
        if (set.Find(u) != set.Find(v)) {
            result += w
            set.Union(u, v)
        }
    }
    return result;
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