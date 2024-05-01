//https://leetcode.com/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */
function squaredSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += Math.pow(n % 10, 2);
        n = parseInt(n /= 10);
    }
    return sum;
}
var isHappy = function (n) {
    let slow = squaredSum(n);
    let fast = squaredSum(squaredSum(n));

    while (slow != fast) {
        slow = squaredSum(slow);
        fast = squaredSum(squaredSum(fast));
        if (slow == 1 || fast == 1)
            return true
    }

    return false;
};