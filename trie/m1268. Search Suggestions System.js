//https://leetcode.com/problems/search-suggestions-system/description/
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    let result = []
    products.sort()
    for (let i = 1; i <= searchWord.length; i++) {
        let sub = searchWord.substring(0, i)
        let item = []
        for (let j = 0; j < products.length; j++) {
            if(products[j].startsWith(sub) && item.length < 3){
                item.push(products[j])
            }
        }
        result.push(item)
    }
    return result
};