/**
 * @param {number[]} nums
 * @return {number}
 */
var largestComponentSize = function (nums) {
    let result = 1

    let mapIndex = new Map()
    for (const num of nums) {
        if (!mapIndex.has(num)) mapIndex.set(num, mapIndex.size)
    }

    let set = new DisjointSets(mapIndex.size)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let num1 = nums[i]
            let num2 = nums[j]
            if (isCommonFactor(num1, num2) && set.Find(mapIndex.get(num1)) != set.Find(mapIndex.get(num2))) {
                let index1 = mapIndex.get(num1)
                let index2 = mapIndex.get(num2)
                set.Union(index1, index2)
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let count = 1
        for (let j = i + 1; j < nums.length; j++) {
            let index1 = mapIndex.get(nums[i])
            let index2 = mapIndex.get(nums[j])
            if(set.Find(index1) == set.Find(index2)) count++
        }
        if(count > result)  result = count
    }
    return result
}

var getAllFactor = function (num) {
    let set = new Set()
    let factor = 2
    while(num >= factor * factor){
        if(num % factor == 0){
            set.add(factor)
            num /= factor
        } else factor++
    }
    set.add(num)
    return [...set]
}

var isCommonFactor = function (num1, num2) {
    let arr1 = getAllFactor(num1)
    let arr2 = getAllFactor(num2)
    for (const item of arr1) {
        if (arr2.includes(item)) return true
    }
    return false
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

let nums = [5,4,6,15,35]
largestComponentSize(nums)
''