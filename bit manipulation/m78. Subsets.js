//https://leetcode.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var res = [];
    for (let i = 0; i < Math.pow(2, nums.length); i++) {
        let sub = []
        for (let j = 0; j < nums.length; j++) {
            if (get_bit(i, j) == 1) {
                sub.push(nums[j])
            }
        }
        res.push(sub)
    }
    return res;
};

var get_bit = function (x, position) {
    return (x >> position) & 1
}