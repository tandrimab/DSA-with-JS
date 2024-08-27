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

var hasCycle = function (head) {
    let curr = head;

    while (curr !== null) {
        if(curr.val === 'visited') {
            return true;
        } else {
            curr.val = 'visited';
            curr = curr.next;
            
        }
    }
    return false;
};

let head = [3,2,0,-4]
console.log(hasCycle(head));
