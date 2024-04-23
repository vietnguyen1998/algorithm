//https://leetcode.com/problems/prefix-and-suffix-search/description/
/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
    this.trie = new Trie()
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        for (let j = word.length - 1; j >= 0; j--) {
            let wordForInsert = `${word.substring(j, word.length)}#${word}`
            this.trie.insert(wordForInsert, i)
        }
    }
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
    let search = `${suff}#${pref}`
    return this.trie.startsWith(search)
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */

class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
        this.index = -1
    }

}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word, index) {
        let current = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!current.children[char]) {
                current.children[char] = new TrieNode()
            }
            current.children[char].index = index
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
                return -1
            }
            current = current.children[char]
        }
        return current.index
    }
}