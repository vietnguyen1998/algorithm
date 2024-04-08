// https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    // db[i]: longest increasing subsequences
    // db[i]: 
    // if nums[i] > nums[j] db[i] = max(db[i], db[j] + 1)
    // db[i] = 1
    // get max
    // return the number of longest increasing subsequences 
    let dp = Array.from({ length: nums.length }, () => 1)
    let count = Array.from({ length: nums.length }, () => 1)
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                    count[i] = count[j];
                } else if (dp[i] == dp[j] + 1) {
                    count[i] += count[j];
                }
            }
        }
    }
    let max = Math.max(...dp)
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result += (dp[i] == max) ? count[i] : 0
    }
    return result
};