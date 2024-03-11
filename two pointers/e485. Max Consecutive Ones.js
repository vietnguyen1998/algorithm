/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let slow = 0
    let fast = 0
    let result = 0
    let n = nums.length
    while(fast<n){
        fast = slow

        while(fast <n && nums[fast] == nums[fast + 1]) fast++

        if(nums[fast] == 1)
            result = Math.max(result, fast - slow + 1)
            
        slow = fast + 1
    }
    return result
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes2 = function (nums) {
    let current = 0
    let result = 0
    for (const item of nums) {
        current = item == 1 ? current + 1 : 0
        result = Math.max(result, current)
    }
    return result
};


let nums = [1,1,0,1,1,1]
findMaxConsecutiveOnes2(nums)