function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root || root.length == 0) return []
    let queue = [root]
    let result = []
    while (queue.length > 0) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let value = queue.shift()
            if (i == len - 1) result.push(value.val)
            if (value.left) queue.push(value.left)
            if (value.right) queue.push(value.right)
        }
    }
    return result
};
let root = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4)))
let a = rightSideView(root)
''