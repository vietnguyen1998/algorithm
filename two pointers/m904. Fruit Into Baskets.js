//https://leetcode.com/problems/fruit-into-baskets/
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let result = 0
    let left = 0
    let right = 0
    let n = fruits.length
    let map = new Map()
    while (right < n) {
        let value = fruits[right]
        map.set(value, map.get(value) > 0 ? map.get(value) + 1 : 1)

        while (map.size > 2) {
            let valueL = fruits[left]
            if (map.get(valueL) > 1) map.set(valueL, map.get(valueL) - 1)
            else map.delete(valueL)
            left++
        }
        result = Math.max(result, right - left + 1)
        right++
    }
    return result
};

let fruits = [1, 2, 3, 3, 4, 2, 2]
totalFruit(fruits)

/**
     l
1,2,3,3,4,2,2
          r

map = [{3:3}, {4:1}]
res = max(1, 2, 3
    
 */