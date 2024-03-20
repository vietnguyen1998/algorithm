/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function (logs, n) {
    let result = -1
    logs.sort((a, b) => a[0] - b[0])
    let set = new DisjointSets(n)
    for (const [time, x, y] of logs) {
        if (set.Find(x) != set.Find(y)) {
            result = time
            set.Union(x, y)
        }
    }
    let parent = set.Find(0)
    for (let i = 0; i < n; i++) {
        if (set.Find(i) != parent) {
            return -1
        }
    }
    return result
};

class DisjointSets {
    parents = [];
    weights = [];

    constructor(n) {
        this.parents = new Array(n);
        this.weights = new Array(n);

        for (let i = 0; i < n; i++) {
            this.parents[i] = i;
            this.weights[i] = i;
        }
    }

    Union(a, b) {
        let rootA = this.Find(a);
        let rootB = this.Find(b);

        if (this.weights[rootA] > this.weights[rootB]) {
            this.parents[rootB] = rootA;
            this.weights[rootA] += this.weights[rootB];
        } else {
            this.parents[rootA] = rootB;
            this.weights[rootB] += this.weights[rootA];
        }
    }

    Find(a) {
        while (a !== this.parents[a]) {
            a = this.parents[this.parents[a]];
        }
        return a;
    }
}

let logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], n = 6
earliestAcq(logs, n)