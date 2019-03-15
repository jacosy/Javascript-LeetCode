function ListNode(val) {
    this.val = val;
    this.next = null;
}

var swapPairs = function (head) {
    if(head === null || head.next === null){
        return head;
    }
    
    let newHd = head.next;
    head.next = swapPairs(newHd.next);
    newHd.next = head;
    return newHd;
};