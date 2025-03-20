//remove
class ListNode {
    constructor(val){
      this.val = val;
      this.next = null;
    };
  };
  
  const createLinkedList = (arr) => {
    var dummyHead = new ListNode(-1);
    var current = dummyHead;
    var i = 0;
    
    while (i < arr.length) {
      current.next = new ListNode(arr[i]);
      current = current.next;
      i++;
    };
    return dummyHead.next;
  };
  
  let head = createLinkedList([1, 5, 7, 2]);
  let currentNode = head;
  let previousNode;
  
  const remove = (element_to_remove) => {
    while (currentNode.val != element_to_remove) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    };
    
    previousNode.next = currentNode.next;
  };
  
  const printLinkedList = (head) => {
    let output = '';
    let current = head;
    
    while (current) {
      output += current.val + ' => ';
      current = current.next;
    };
    return output + 'null';
  };
  
  console.log(printLinkedList(head));
  remove(5);
  console.log(printLinkedList(head));