//https://leetcode.com/problems/min-cost-to-connect-all-points/description/
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    // convert
    let n = points.length
    let graphs = []
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let [u1, v1] = points[i]
            let [u2, v2] = points[j]
            let w = Math.abs(u1 - u2) + Math.abs(v1 - v2)
            graphs.push([i, j, w])
        }
    }
    graphs.sort((a, b) => a[2] - b[2])
    // mst
    let result = 0
    let set = new DisjointSets(graphs.length)
    for (let i = 0; i < graphs.length; i++) {
        let [u, v, w] = graphs[i]
        if (set.Find(u) != set.Find(v)) {
            result += w
            set.Union(u, v)
        }
    }
    return result
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