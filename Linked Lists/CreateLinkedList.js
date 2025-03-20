//Create
class ListNode{
    constructor(val){
      this.val = val;
      this.next = null;
    };
  };
  
  const createLinkedList = (arr) => {
    var dummyHead = new ListNode(-1);
    current = dummyHead;
    i = 0;
    
    while (i < arr.length) {
      current.next = new ListNode(arr[i]);
      current = current.next;
      i++;
    };
    return dummyHead.next;
  };  
  
  let arr = [1, 11, 3, 4]
  let head = createLinkedList(arr);
  
  const printLinkedList = (head) => {
    let output = '';
    let current = head
    
    while (current != null) {
      output += current.val + ' => ';
      current = current.next
    };
    return output + 'null';
  };
  console.log(printLinkedList(head));