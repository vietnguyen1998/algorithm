//https://leetcode.com/problems/implement-trie-prefix-tree
class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}
var Trie = function () {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let current = this.root
    console.log(current)
    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (!current.children[char]) {
            current.children[char] = new TrieNode()
        }
        current = current.children[char]
    }
    current.isEndOfWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (!current.children[char]) {
            return false
        }
        current = current.children[char]
    }
    return current.isEndOfWord
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let current = this.root
    for (let i = 0; i < prefix.length; i++) {
        let char = prefix[i]
        if (!current.children[char]) {
            return false
        }
        current = current.children[char]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */