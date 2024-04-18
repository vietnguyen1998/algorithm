//https://leetcode.com/problems/redundant-connection/
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let n = edges.length
    let set = new DisjointSets(n)
    for (let i = 0; i < n; i++) {
        let u = edges[i][0] - 1
        let v = edges[i][1] - 1
        if (set.Find(u) != set.Find(v))
            set.Union(u, v)
        else
            return edges[i]
    }
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