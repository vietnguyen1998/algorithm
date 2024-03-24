// https://leetcode.com/problems/range-sum-query-immutable/
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    // calculation prefix sum
    prefix = [0]
    for (let i = 0; i < nums.length; i++) {
        prefix[i + 1] = nums[i] + prefix[i]
    }
    console.log(prefix)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return prefix[right + 1] - prefix[left]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */