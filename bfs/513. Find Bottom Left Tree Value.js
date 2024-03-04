/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    if (!root || root.length == 0) return []
    let queue = [root]
    let result = 0
    while (queue.length > 0) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let value = queue.shift()
            if (i == 0) result = value.val
            if (value.left) queue.push(value.left)
            if (value.right) queue.push(value.right)
        }
    }
    return result
};