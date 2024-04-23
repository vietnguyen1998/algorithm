//https://leetcode.com/problems/longest-word-in-dictionary/description/
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    let map = new Map()
    words.map(e => map.set(e))
    words.sort()
    let result = ""
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        let verify = true
        for (let j = 1; j < word.length; j++) {
            let sub = word.substring(0, j)
            if(!map.has(sub)){
                verify = false
                break
            }
        }
        if(verify && result.length < word.length)
            result = word
    }
    return result
};