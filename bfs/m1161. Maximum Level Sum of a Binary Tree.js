function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    let list = [root];
    let sum = []
    while (list.length) {
        let len = list.length;
        let res = 0;
        for (let i = 0; i < len; i++) {
            let each = list.shift();
            res += each.val;
            if (each.left) list.push(each.left);
            if (each.right) list.push(each.right);
        }
        sum.push(res)
    }
    return sum.indexOf(Math.max(...sum)) + 1
}

let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
let a = maxLevelSum(root)