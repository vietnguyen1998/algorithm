// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    result = null
    dfs(cloned, target)
    return result
};

var dfs = function(root, target){
    if(!root) return null
    if(root.val == target.val) result = root
    dfs(root.left, target)
    dfs(root.right, target)
}