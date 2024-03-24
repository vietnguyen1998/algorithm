//https://leetcode.com/problems/number-of-islands-ii/
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
const dx = [0, 0, -1, 1]
const dy = [1, -1, 0, 0]

var numIslands2 = function (m, n, positions) {
    // convert
    var result = []
    let num = m * n
    var set = new DisjointSets(num)
    var map = new Map()
    var count = 0
    for (let i = 0; i < positions.length; i++) {
        let [x, y] = positions[i]
        let index = x * n + y
        if (!map.has(index)) count++
        map.set(index, true)
        for (let j = 0; j < 4; j++) {
            let x1 = dx[j] + x
            let y1 = dy[j] + y
            if (x1 >= 0 && y1 >= 0 && x1 < m && y1 < n) {
                let index1 = x1 * n + y1
                if (set.Find(index) != set.Find(index1) && map.has(index1)) {
                    set.Union(index, index1)
                    count--
                }
            }
        }
        result.push(count)
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