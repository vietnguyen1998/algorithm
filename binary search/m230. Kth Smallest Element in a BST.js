// https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/522362/leetcode-230-c-booksun/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    arr = []
    convert(root)
    return arr[k - 1]
};

var convert = function (root) {
    if (!root) return null
    convert(root.left)
    arr.push(root.val)
    convert(root.right)
}

var root = new TreeNode(5, 
    new TreeNode(3, 
        new TreeNode(2, new TreeNode(1), null), 
        new TreeNode(4)), 
    new TreeNode(6))

kthSmallest(root, 50)