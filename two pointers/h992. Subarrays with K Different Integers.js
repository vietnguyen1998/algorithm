/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * time O(n2)
 */
var subarraysWithKDistinct = function (nums, k) {
    let result = 0
    let n = nums.length
    let map = new Map()
    for (let i = 0; i < n; i++) {
        let move = i
        map.clear()
        while (map.size <= k && move < n) {
            map.set(nums[move], true)
            if (map.size == k) result++
            else if (map.size > k) break
            move++
        }
    }
    return result
};

var subarraysWithKDistinct2 = function (nums, k) {
    return atLeast(nums, k) - atLeast(nums, k - 1);
};

var atLeast = function (a, t) {
    let n = a.length;
    let m = new Array(n + 1).fill(0);
    let uniq = 0;
    let l = 0;
    let res = 0;
    for (let r = 0; r < n; r++) {
        let value = a[r]
        if (m[value] === 0) uniq++;
        m[value]++;
        while(uniq > t){
            m[a[l]]--;
            if (m[a[l]] === 0) uniq--;
            l++
        }
        res += r - l + 1;``
    }
    return res;
};
let nums = [1,2,1,2,3], k = 2
subarraysWithKDistinct2(nums, k)