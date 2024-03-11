// https://leetcode.com/problems/inorder-successor-in-bst/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var inorderSuccessor = function(root, p) {
    if(!root) return null
    let curr = root
    let result = null
    while(curr != null){
        if(curr.val > p.val){
            result = curr.val
            curr = curr.left
        }else{
            curr = curr.right
        }
    }
    return result
};


var inorderSuccessor2 = function (root, p, inOrderSuccessor= null) {
    if (!root) return inOrderSuccessor
    if (p.val >= root.val)
        return inorderSuccessor2(root.right, p, inOrderSuccessor);

    return inorderSuccessor2(root.left, p, inOrderSuccessor?.val < root.val ? inOrderSuccessor : root); 
};

var root = new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(1)), new TreeNode(6))
var node = new TreeNode(5)
var a = inorderSuccessor(root, node)
''