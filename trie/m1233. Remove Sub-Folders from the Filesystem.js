/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    let trie = new Trie()
    for(let i=0;i<folder.length;i++){
        let item = folder[i]
        trie.insert(item)
    }
    let result = []
    for(let i=0;i<folder.length;i++){
        let item = folder[i]
        if(trie.searchParent(item) == 1){
            result.push(item)
        }
    }
    return result
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
        let folder = word.split('/')
        for (let i = 0; i < folder.length; i++) {
            let char = folder[i]
            if (!current.children[char]) {
                current.children[char] = new TrieNode()
            }
            current = current.children[char]
        }
        current.isEndOfWord = true
    }

    searchParent(word) {
        let current = this.root
        let folder = word.split('/')
        let count = 0
        for (let i = 0; i < folder.length; i++) {
            let char = folder[i]
            if (current.children[char].isEndOfWord) {
                count = count + 1
            }
            current = current.children[char]
        }
        return count
    }
}