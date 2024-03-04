// Definition for a Node.
function Node(val, children) {
    this.val = val;
    this.children = children;
};

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 * time O(n)
 * space O(n)
 */
var levelOrder = function (root) {
    if(!root || root.length == 0 ) return []
    let queue = [root]
    let result = [[root.val]]
    let travel = []
    while (queue.length > 0) {
        let value = queue.shift()
        for (let i = 0; i < value.children.length; i++) {
            travel.push(value.children[i])
        }

        if (travel.length > 0 && queue.length == 0) {
            result.push(travel.map(e => e.val))
            queue = [...travel]
            travel = []
        }
    }
    return result
};
var root = new Node(1, [new Node(2, []), new Node(3, [new Node(5, []), new Node(6, "")]), new Node(4, [])])
levelOrder(root)