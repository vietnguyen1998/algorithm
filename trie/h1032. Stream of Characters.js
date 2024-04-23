//https://leetcode.com/problems/stream-of-characters/description/
/**
 * @param {string[]} words
 */
var StreamChecker = function (words) {
    prefix = ""
    this.trie = new Trie()
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        word = word.split('').reverse().join('')
        this.trie.insert(word)
    }
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
var prefix = ""
StreamChecker.prototype.query = function (letter) {
    prefix = letter + prefix
    return this.trie.startWith(prefix)
};

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
            if (!current.children[char])
                current.children[char] = new TrieNode()
            current = current.children[char]
        }
        current.isEndOfWord = true
    }

    startWith(prefix) {
        let current = this.root
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i]
            if (!current.children[char]) return false
            else if(current.children[char].isEndOfWord) {
                return true
            }
            current = current.children[char]
        }
        return false
    }
}
/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */