function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function print(list) {
  let head = list;
  let str = "";
  //   let pointer = head;

  while (head !== null) {
    str += head.val + "->";
    head = head.next;
  }
  console.log(str);
}

function create(list) {
  if (!list.length) return null;
  let head = new ListNode(list[0]);

  let pointer = head;

  for (let i = 1; i < list.length; i++) {
    pointer.next = new ListNode(list[i]);

    pointer = pointer.next;
  }
  return head;
}

var reverseList = function(head) {
    let curr = head, prev = null;
    while (curr !== null) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    head = prev;
    return head;
};

let head = [1,2,3,4,5]
print(reverseList(head))
