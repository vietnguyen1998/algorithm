//https://leetcode.com/problems/xor-queries-of-a-subarray/description/
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let prefix = Array.from({length: arr.length + 1}, ()=> 0)
    for(let i=0;i<arr.length;i++){
        prefix[i+1] = prefix[i] ^ arr[i]
    }
    let result = []
    for(let i=0;i<queries.length;i++){
        let [x, y] = queries[i]
        console.log(x, y)
        result.push(prefix[y + 1] ^ prefix[x])
    }
    return result
};