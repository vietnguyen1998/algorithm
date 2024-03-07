// https://leetcode.com/problems/increasing-order-search-tree/description/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    result = new TreeNode()
    temp = result
    bst(root)
    return result.right
};

var bst = function(root){
    if(!root) return null
    bst(root.left)
    temp.right = new TreeNode(root.val)
    temp = temp.right
    bst(root.right)
}

var root = new TreeNode(5,
    new TreeNode(3,
        new TreeNode(2, new TreeNode(1), null),
        new TreeNode(4)),
    new TreeNode(6,
        null,
        new TreeNode(8,
            new TreeNode(7),
            new TreeNode(9))))

increasingBST(root)