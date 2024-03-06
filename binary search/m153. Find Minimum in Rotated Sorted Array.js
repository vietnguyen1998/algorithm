// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/  
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left =0
    let right = nums.length  -1
    while(left <= right){
        let mid = left +Math.floor((right-left)/2)
        if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid + 1]) return nums[mid+1]
        if(nums[mid] >= nums[left] && nums[mid] > nums[right]){
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    return nums[left]
};

let  nums = [3,1,2]
let a = findMin(nums)
''