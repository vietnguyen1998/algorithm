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
var sortList = function(head) {
    if(getSize(head) < 2) return head
    let mid = getMid(head)
    let left = sortList(head)
    let right = sortList(mid)
    return merge(left, right)
};

var merge = function(left, right){
    let result = new ListNode()
    let head = result
    while(left && right){
        if(left.val > right.val){
            result.next = right
            right = right.next
        }else{
            result.next = left
            left = left.next
        }
        result = result.next
    }
    if(left) result.next = left
    if(right) result.next = right
    return head.next
}

var getMid = function(head){
    let fast = head
    let slow = null
    while(fast && fast.next){
        slow = slow == null ? head : slow.next
        fast = fast.next.next
    }
    let mid = slow.next
    slow.next = null
    return mid
}

var getSize = function(head){
    let current = head
    let count = 0
    while(current){
        count++
        current = current.next
    }
    return count
}