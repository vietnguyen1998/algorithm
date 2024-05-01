//https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return head
    let result = new ListNode(head.val)
    let current = head
    while (current.next != null) {
        result = new ListNode(current.next.val, result)
        current = current.next
    }
    return result
};