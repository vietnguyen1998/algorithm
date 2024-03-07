function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
    if (!root) return 0
    if ((!root.left && root.right) || (root.left && !root.right)) {
        let a = 1 + getLonelyNodes(root.right) + getLonelyNodes(root.left)
        return a
    }

    if (root.left) return getLonelyNodes(root.left)
    if (root.right) return getLonelyNodes(root.right)
};

let root = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3))
let a = getLonelyNodes(root)
''