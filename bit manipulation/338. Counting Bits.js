/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = new Array(n + 1).fill(0);
   for (let i = 1; i <= n; i++) {
     ans[i] = getSum(i)
   }
   return ans;
};

var getSum = function(value){
   let count = 0
   while(value > 0){
       if(value % 2 == 1){
           count++
       }
       value = Math.floor(value/2)
   }
   return count
}

var getBit = function (value) {
    let result = ""
    while (value > 0) {
        if (value % 2 == 1) {
            result += "1"
        } else {
            result += "0"
        }
        value = Math.floor(value / 2)
    }
    return result
}

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits2 = function countBits(n) {
    const ans = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        let a = i >> 1
        let b = (i & 1)
        ans[i] = ans[a] + b;
    }
    return ans;
}

let n = 5
countBits2(n)