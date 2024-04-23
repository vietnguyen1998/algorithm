//https://leetcode.com/problems/search-suggestions-system/description/
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    // trie: add products
    var trie = new Trie()
    products.sort()
    for (let i = 0; i < products.length; i++) {
        trie.insert(products[i])
    }

    // dfs
    let result = []
    for (let i = 1; i <= searchWord.length; i++) {
        let word = searchWord.substring(0, i)
        let matches = trie.startWith(word)
        result.push(matches)
    }
    return result
};

class TrieNode {
    constructor() {
        this.chirdren = {}
        this.word = ""
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
        this.result = []
    }

    insert(word) {
        let current = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!current.chirdren[char]) {
                current.chirdren[char] = new TrieNode()
            }
            current = current.chirdren[char]
        }
        current.isEndOfWord = true
        current.word = word
    }

    startWith(prefix) {
        let current = this.root
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i]
            if (!current.chirdren[char]) return []
            current = current.chirdren[char]
        }
        this.result = []
        this.dfs(current)
        return this.result
    }

    dfs(trie) {
        if (trie.isEndOfWord && this.result.length < 3) {
            this.result.push(trie.word)
        }
        let ls = Object.keys(trie.chirdren)
        for (let i = 0; i < ls.length; i++) {
            this.dfs(trie.chirdren[ls[i]])
        }
    }
}