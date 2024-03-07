//https://leetcode.com/problems/sum-of-left-leaves/

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
var sumOfLeftLeaves = function(root) {
    result = 0
    dfs(root, false)
    return result
};

var dfs = function(root, isLeft){
    if(!root) return
    if(isLeft && root.left == null && root.right == null) result += root.val
    dfs(root.left, true)
    dfs(root.right, false)
}