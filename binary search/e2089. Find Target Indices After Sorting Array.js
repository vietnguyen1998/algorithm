// https://leetcode.com/problems/find-target-indices-after-sorting-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    if (nums.length == 0) return []
    nums.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) result.push(i)
    }
    return result
};

var targetIndices2 = function (nums, target) {
    if (nums.length == 0) return []
    nums.sort((a, b) => a - b)
    let result = []
    
    let l =0
    let r = nums.length - 1
    while(l <= r){
        let mid = l + Math.floor((r - l) / 2)
        if(nums[mid] == target){
            result.push(mid)
            let temp = mid
            while (nums[mid] == nums[mid + 1]) {
                result.push(++mid)
            }
            while (nums[temp] == nums[temp - 1]) {
                result.push(--temp)
            }
            break
        }else if(nums[mid] < target){
            l = mid + 1
        }else{
            r = mid - 1
        }
    }
    
    return result.sort((a, b) => a - b)
};

let nums = [1,1,1,100,100,100,100,100,100], target = 100
targetIndices2(nums, target)