// https://leetcode.com/problems/range-sum-of-bst/description/  

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    sum = 0
    bts(root, low, high)
    return sum
};

var bts = function (root, low, high) {
    if (!root) return

    if (root.val >= low && root.val <= high)
        sum += root.val

    if (root.val >= low) bts(root.left, low, high)
    if (root.val <= high) bts(root.right, low, high)
}

var rangeSumBST2 = function (root, low, high) {
    if (!root) return 0
    if (root.val >= low && root.val <= high) {
        return root.val + rangeSumBST(root.left, low, high)
            + rangeSumBST(root.right, low, high)
    }
    if (root.val > high) {
        return rangeSumBST(root.left, low, high)
    } else {
        return rangeSumBST(root.right, low, high)
    }
};

var root = new TreeNode(10, new TreeNode(5, new TreeNode(3), new TreeNode(7)), new TreeNode(15, null, new TreeNode(18)))
rangeSumBST2(root,7,15)