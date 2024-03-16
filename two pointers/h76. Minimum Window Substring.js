//https://leetcode.com/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let result = ""
    let mapS = new Map()
    let mapT = new Map()
    t.split('').map(e => mapT.set(e, mapT.has(e) ? mapT.get(e) + 1 : 1))
    let matchCondition = mapT.size
    let condition = 0
    let n = s.length
    let left = 0
    let right = 0
    let oldMin = Infinity
    while (right < n) {
        let value = s[right]
        mapS.set(value, mapS.has(value) ? mapS.get(value) + 1 : 1)
        if (mapT.has(value) && mapT.get(value) == mapS.get(value)) condition++

        while (condition == matchCondition) {
            let valueL = s[left]
            if (right - left < oldMin) {
                result = s.substring(left, right + 1)
                oldMin = right - left
            }
            if (mapS.has(valueL) && mapT.has(valueL) &&
                (mapS.get(valueL) == 1 || mapS.get(valueL) == mapT.get(valueL))) condition--
            if (mapS.get(valueL) > 1) mapS.set(valueL, mapS.get(valueL) - 1)
            else mapS.delete(valueL)
            left++
        }
        right++
    }
    return result
};

let s = "acbbaca", t = "aba"
minWindow(s, t)