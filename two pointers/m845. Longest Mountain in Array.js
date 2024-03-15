//https://leetcode.com/problems/longest-mountain-in-array/
/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let slow = 0
    let n = arr.length
    let peak = 0
    let res = 0
    while(slow < n){
        let fast = slow
        while(fast + 1 <n && arr[fast + 1] > arr[fast]) fast++
        peak = fast
        while(peak + 1 <n && arr[peak + 1] < arr[peak]) peak++
        
        if(peak != fast && slow != fast) res = Math.max(res, peak - slow + 1)
        if(slow != peak) slow = peak
        else slow++
    }
    return res
};