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
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
    result = []
    dfs(root)
    return result
};

var dfs = function(root){
    if(!root) return null;
    if(root.left && !root.right) result.push(root.left.val)
    if(!root.left && root.right) result.push(root.right.val)
    dfs(root.left)
    dfs(root.right)
}