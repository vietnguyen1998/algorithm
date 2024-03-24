//https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 1) return nums[0]
    let robs = []
    robs[0] = nums[0]
    robs[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        robs[i] = Math.max(robs[i - 1], nums[i] + robs[i - 2])
    }
    return robs[nums.length - 1]
};
