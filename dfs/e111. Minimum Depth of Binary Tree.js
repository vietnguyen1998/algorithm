// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0
    if (root.left == null && root.right == null) return 1
    if (root.left == null) return minDepth(root.right) + 1
    if (root.right == null) return minDepth(root.left) + 1
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};

var root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))
minDepth(root)