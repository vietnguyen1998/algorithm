//https://leetcode.com/problems/largest-component-size-by-common-factor/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestComponentSize = function (nums) {
    let result = 1
    let set = new DisjointSets(Math.max(...nums))

    let mapFactor = new Map()
    for (const num of nums) {
        let factors = getAllFactor(num)
        mapFactor.set(num, factors[0])
        for (let i = 0; i < factors.length - 1; i++) {
            set.Union(factors[i], factors[i + 1])
        }
    }

    let mapResult = new Map()
    for (const num of nums) {
        let parent = set.Find(mapFactor.get(num))
        let count = mapResult.has(parent) ? mapResult.get(parent) + 1 : 1
        if(count > result) result = count
        mapResult.set(parent, count)
    }

    return result
}

var getAllFactor = function (num) {
    let set = new Set()
    let factor = 2
    while (num >= factor * factor) {
        if (num % factor == 0) {
            set.add(factor)
            num /= factor
        } else factor++
    }
    set.add(num)
    return [...set]
}

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

let nums = [4,6,15,35]
largestComponentSize(nums)
''