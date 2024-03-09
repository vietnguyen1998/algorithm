// https://leetcode.com/problems/subtree-of-another-tree/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if(!root) return false
    if (subRoot.val != root.val)
        return isSubtree(root.right, subRoot) || isSubtree(root.left, subRoot)
    else{
        return checkValue(root, subRoot)
    }
};

var checkValue = function (root, subRoot) {
    if (root == null && subRoot == null) return true
    if (root == null || subRoot == null) return false
    return root.val == subRoot.val && checkValue(root.left, root.left) && checkValue(root.right, root.right)
}

let root = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0), null)), new TreeNode(5))
let sub = new TreeNode(4, new TreeNode(1), new TreeNode(2))

let res = isSubtree(root, sub)
''