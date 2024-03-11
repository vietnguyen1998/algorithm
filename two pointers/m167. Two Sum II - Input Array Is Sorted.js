/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let slow = 0
    let fast = numbers.length - 1

    while (slow != fast) {
        let sum = numbers[slow] + numbers[fast]
        if (target > sum) slow++
        else if (target < sum) fast--
        else return [slow + 1, fast + 1]
    }
    return [-1, -1]
};
let numbers = [2,7,11,15], target = 9
twoSum(numbers, target)