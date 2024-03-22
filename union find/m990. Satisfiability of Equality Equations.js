//https://leetcode.com/problems/satisfiability-of-equality-equations/
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
    let start = "a".charCodeAt(0)
    let set = new DisjointSets(26)

    for (let i = 0; i < equations.length; i++) {
        let value = equations[i]
        x = value[0], y = value[3], e = value[1]
        if (e == "=") {
            set.Union(x.charCodeAt(0) - start, y.charCodeAt(0) - start)
        }
    }
    for (let i = 0; i < equations.length; i++) {
        let value = equations[i]
        x = value[0], y = value[3], e = value[1]
        if (e == "!") {
            if (set.Find(x.charCodeAt(0) - start) == set.Find(y.charCodeAt(0) - start)) {
                return false
            }
        }
    }
    return true
};


class DisjointSets {
    parents = [];
    rank = [];

    constructor(n) {
        this.parents = new Array(n);
        this.rank = new Array(n);

        for (let i = 0; i < n; i++) {
            this.parents[i] = i;
            this.rank[i] = i;
        }
    }

    Union(a, b) {
        let rootA = this.Find(a);
        let rootB = this.Find(b);
        if (rootA == rootB) return
        if (this.rank[rootA] > this.rank[rootB]) this.parents[rootB] = rootA;
        else this.parents[rootA] = rootB;
        if (this.rank[rootA] == this.rank[rootB]) rank[rootB] += 1
    }

    Find(a) {
        while (a !== this.parents[a]) a = this.parents[this.parents[a]];
        return a;
    }
}