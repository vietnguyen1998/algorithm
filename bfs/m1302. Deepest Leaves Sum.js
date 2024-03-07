function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 * time O(n)
 * space O(n)
 */
var levelOrder = function (root) {
    if (!root || root.length == 0) return []
    let queue = [root]
    let result = root.val
    let travel = []
    while (queue.length > 0) {
        let value = queue.shift()

        if (value.left) travel.push(value.left)
        if (value.right) travel.push(value.right)

        if (travel.length > 0 && queue.length == 0) {
            result = 0
            travel.map(e => result += e.val)
            queue = [...travel]
            travel = []
        }
    }

    return result
};

var levelOrder2 = function (root) {
    let list = [root];
    while (list.length) {
        let len = list.length;
        let res = 0;
        for (let i = 0; i < len; i++) {
            let each = list.shift();
            res += each.val;
            if (each.left) list.push(each.left);
            if (each.right) list.push(each.right);
        }
        if (!list.length) return res;
    }
}

let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
let a = levelOrder(root)
''