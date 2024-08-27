function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createList(arr) {
    let head = new ListNode(arr[0]);
  
    let tail = head;
    
    for (let i = 1; i < arr.length; i++) {
      tail.next = new ListNode(arr[i]);
      tail = tail.next;
    }
    return head;
  }

  function printList(list) {
    let pointer = list;
  
    let printedString = "";
    while (pointer != null) {
      printedString += pointer.val + "->";
      pointer = pointer.next;
    }
    console.log(printedString);
  }

var mergeNodes = function (head) {
    head = createList(head);
    let sum = 0, curr = head.next;
    let newHead = new ListNode();
    let newCurr = newHead;
    while (curr !== null) {
        if (curr.val === 0) {
            newCurr.next = new ListNode(sum);
            newCurr = newCurr.next;
            sum = 0;
        } else {
            sum += curr.val;
        }
        curr = curr.next;
    }
    return newHead.next;
};

let head = [0,1,0,3,0,2,2,0]

printList(mergeNodes(head))
