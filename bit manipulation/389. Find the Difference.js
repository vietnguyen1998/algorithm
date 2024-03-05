/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    var list_s = s.split("")
    var list_t = t.split("")
    list_s.sort()
    list_t.sort()
    let result = ""
    for (let i = 0; i < s.length; i++) {
        if (list_s[i] != list_t[i]) {
            result = list_t[i]
            break
        }
    }
    if (result == "") result = list_t[list_t.length - 1]
    return result
};



// using hastable
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference2 = function (s, t) {
    let ls_s = s.split("")
    let map = new Map()
    ls_s.map(e => {
        map.set(e, map.has(e) ? map.get(e) + 1 : 1)
    })
    let ls_t = t.split("")
    for (let i = 0; i < ls_t.length; i++) {
        let item = ls_t[i]
        if (map.has(item) && map.get(item) > 0)
            map.set(item, map.get(item) - 1)
        else
            return item
    }
};



// using bit manipulation
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let result = 0;
    for (var i = 0; i < s.length; i++) {
        result ^= s[i].charCodeAt() ^ t[i].charCodeAt()
    }
    result ^= t[i].charCodeAt()
    return String.fromCharCode(result)
};

let  s = "abcd", t = "abcde"
findTheDifference(s, t)