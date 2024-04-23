//https://leetcode.com/problems/longest-word-in-dictionary/description/
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    // using trie
    let trie = new Trie()
    words.sort()
    for (let i = 0; i < words.length; i++) {
        trie.insert(words[i])
    }
    // dfs: find longest with endOfWord = true
    result = ""
    dfs(trie.root, "")
    return result
};

var dfs = function (trie, word) {
    if (!trie) return
    if (word.length > result.length) {
        result = word
    }

    let ls = Object.entries(trie.children)
    for (let i = 0; i < ls.length; i++) {
        const [key, value] = ls[i]
        if (value.isEndOfWord) {
            dfs(trie.children[key], word + key)
        }
    }
}

class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
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
    }

    search(word) {
        let current = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!current.children[char]) {
                return false
            }
            current = current.children[char]
        }
        return current.isEndOfWord
    }

    startsWith(prefix) {
        let current = this.root
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i]
            if (!current.children[char]) {
                return false
            }
            current = current.children[char]
        }
        return true
    }
}
