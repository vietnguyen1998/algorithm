// https://leetcode.com/problems/peak-index-in-a-mountain-array/
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    if (arr.length < 3) return null
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return null
};


/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray2 = function (arr) {
    if (arr.length < 3) return null
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid
        if (arr[mid] < arr[mid + 1])left = mid + 1
        else right = mid - 1
    }
    return null
};

let  arr = [18,29,38,59,98,100,99,98,90]
let a = peakIndexInMountainArray2(arr)
''


