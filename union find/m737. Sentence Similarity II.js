// https://leetcode.com/problems/sentence-similarity-ii/
/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function (sentence1, sentence2, similarPairs) {
    if (sentence1.length != sentence2.length) return false
    let a = similarPairs.length
    let map = new Map()
    for (const [x, y] of similarPairs) {
        if (x == y) continue
        if (!map.has(x)) map.set(x, map.size)
        if (!map.has(y)) map.set(y, map.size)
    }

    var set = new DisjointSets(map.size)
    for (const [x, y] of similarPairs) {
        let indexX = map.get(x)
        let indexY = map.get(y)
        if (set.Find(indexX) != set.Find(indexY)) set.Union(indexX, indexY)
    }

    for (let i = 0; i < sentence1.length; i++) {
        if (sentence1[i] == sentence2[i]) continue
        if (!map.has(sentence1[i]) || !map.has(sentence2[i])) return false
        let indexX = map.get(sentence1[i])
        let indexY = map.get(sentence2[i])
        if (set.Find(indexX) != set.Find(indexY)) return false
    }

    return true
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