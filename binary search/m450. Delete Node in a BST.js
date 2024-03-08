function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return null;

    if (root.val > key) {
        root.left = deleteNode(root.left, key);
        return root;
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
        return root;
    } else {
        // If found a node
        if (root.right !== null && root.left !== null) {
            let curRoot = root.right;
            while (curRoot.left) {
                curRoot = curRoot.left
            }
            const rightMin = curRoot.val;
            root.val = rightMin;
            root.right = deleteNode(root.right, rightMin);
            return root;
        } else if (root.left !== null) {
            return root.left;
        } else if (root.right !== null) {
            return root.right
        } else return null
    }
};

var root = new TreeNode(16, 
    new TreeNode(6, 
        new TreeNode(2), 
        new TreeNode(8,new TreeNode(7), new TreeNode(9))), 
    new TreeNode(26,null, new TreeNode(7)))
deleteNode(root, 6)