class ListNode {
    constructor (val) {
      this.val = val;
      this.next = null;
    };
  };
  
  //Add linked lists
  const createLinkedList = (arr) => {
    let dummyHead = new ListNode(-1);
    let current = dummyHead;
    
    
    for (let num of arr) {
      current.next = new ListNode(num);
      current = current.next;
    };
    return dummyHead.next;
  };
  
  let l1 = createLinkedList([2, 4, 3]);
  let l2 = createLinkedList([5, 6, 4]);
  
  const add2LinkedLists = (l1, l2) => {
    let dummyHead2 = new ListNode(-2);
    let current = dummyHead2;
    let carry = 0;
    
    while (l1 != null || l2 != null){
      let x = (l1 != null)? l1.val : 0;
      let y = (l2 != null)? l2.val : 0;
      let sum = x + y + carry;
    
      carry = Math.floor(sum/10);
      current.next = new ListNode(sum % 10);
      current = current.next;
    
      if (l1 != null) l1 = l1.next;
      if (l2 != null) l2 = l2.next;
    };
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
    return dummyHead2.next;
  };
  
  const printLinkedList = (head) => {
    let a = [];
    current = head;
    
    while (current != null) {
      a.push(current.val)
      current = current.next;
    };
    
    return a;
  }
  
  let result = add2LinkedLists(l1, l2)
  console.log(printLinkedList(result));