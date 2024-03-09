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
    if (!root) return null
    // bs
    // key > root value => go right
    if (key > root.val) {
        root.right = deleteNode(root.right, key)
        return root
    // key < root value => go left
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key)
        return root
    // key = root value
    } else {
        // left & right => swap value & delete leaf
        if (root.left && root.right) {
            let leafNode = root.right
            while (leafNode.left != null) {
                leafNode = leafNode.left
            }
            let leafValue = leafNode.val
            root.val = leafValue
            root.right = deleteNode(root.right, leafValue)
            return root
        }
        // only 1 leaf => return leaf
        else if (root.left) { return root.left }
        else if (root.right) { return root.right }
        // only 0 leaf => return null
        else { return null }
    }
};

var root = new TreeNode(50, 
    new TreeNode(30, 
        null, 
        new TreeNode(40)), 
    new TreeNode(70,new TreeNode(60), new TreeNode(80)))
deleteNode(root, 50)