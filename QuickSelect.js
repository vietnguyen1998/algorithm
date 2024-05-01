/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let kIndex = nums.length - k
    console.log(kIndex)
    return quickSelect(nums, 0, nums.length - 1, kIndex)
};

let quickSelect = function (nums, left, right, k) {
    let pivotIndex = partition(nums, left, right)
    if (pivotIndex == k) return nums[pivotIndex]
    else if (pivotIndex > k) {
        // go left
        return quickSelect(nums, left, pivotIndex - 1, k)
    } else {
        return quickSelect(nums, pivotIndex + 1, right, k)
    }
}

let partition = function (nums, left, right) {
    let end = nums[right]
    let i = left
    let j = right - 1
    while (i < j) {
        while (nums[i] <= end) i++
        while (nums[j] > end) j--
        if (i < j) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
            j--
        }
    }
    if(i > right) i = right
    let temp = nums[right]
    nums[right] = nums[i]
    nums[i] = temp
    return i
}

let nums = [1, 2, 2, 3, 3, 4, 5, 5, 6], k = 9
partition(nums, 0, 1)