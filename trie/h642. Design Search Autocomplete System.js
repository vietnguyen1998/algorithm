//https://leetcode.com/problems/design-search-autocomplete-system/
/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function (sentences, times) {
    this.map = new Map()
    this.trie = new Trie()
    for (let i = 0; i < sentences.length; i++) {
        this.map.set(sentences[i], times[i])
        this.trie.insert(sentences[i])
    }
};

/** 
 * @param {character} c
 * @return {string[]}
 */
var search = ""
AutocompleteSystem.prototype.input = function (c) {
    // trie:startwith
    if (c == "#") {
        this.trie.insert(search)
        this.map.set(search, this.map.has(search) ? this.map.get(search) + 1 : 1)
        search = ""
        return []
    }
    search += c
    let searchResult = this.trie.startWith(search)
    // convert result
    let data = []
    for (let i = 0; i < searchResult.length; i++) {
        data.push([searchResult[i], this.map.get(searchResult[i])])
    }
    data.sort((a, b) => a[0].localeCompare(b[0]))
    data.sort((a, b) => b[1] - a[1])
    return data.slice(0, 3).map(e => e[0])
};

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */

class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
        this.word = ""
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
            if (!current.children[char]) {
                current.children[char] = new TrieNode()
            }
            current = current.children[char]
        }
        current.isEndOfWord = true
        current.word = word
    }

    startWith(prefix) {
        let current = this.root
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i]
            if (!current.children[char]) return []
            current = current.children[char]
        }

        this.result = []
        this.dfs(current)
        return this.result
    }

    dfs(node) {
        if (node.isEndOfWord) {
            this.result.push(node.word)
        }

        let ls = Object.values(node.children)
        for (let i = 0; i < ls.length; i++) {
            this.dfs(ls[i])
        }
    }
}