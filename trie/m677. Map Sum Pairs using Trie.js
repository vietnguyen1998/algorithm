
//https://leetcode.com/problems/map-sum-pairs/
class NodeTrie {
    constructor() {
        this.children = {}
        this.isEndOfWords = false
        this.cost = 0
    }
}
var MapSum = function () {
    this.root = new NodeTrie()
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    // re-calculate val if existed
    let temp = val
    if (this.map.has(key)) {
        val = val - this.map.get(key)
    }
    this.map.set(key, temp)

    // Trie: insert
    let current = this.root
    for (let i = 0; i < key.length; i++) {
        let char = key[i]
        let isNotExist = !current.children[char]
        if (isNotExist) {
            current.children[char] = new NodeTrie()
        }
        current.children[char].cost = isNotExist ? val : current.children[char].cost + val
        current = current.children[char]
    }
    current.isEndOfWords = true
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    // Trie: search
    let current = this.root
    for (let i = 0; i < prefix.length; i++) {
        // check for out of words
        if (!current) return 0
        let char = prefix[i]
        if (current.children[char] && i == prefix.length - 1) {
            return current.children[char].cost
        }
        current = current.children[char]
    }
    return 0
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */