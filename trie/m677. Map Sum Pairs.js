
//https://leetcode.com/problems/map-sum-pairs/
var MapSum = function () {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    this.map.set(key, val)
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let result = 0
    for (var [key, value] of this.map) {
        if(key.startsWith(prefix)){
            result += value
        }
    }
    return result
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */