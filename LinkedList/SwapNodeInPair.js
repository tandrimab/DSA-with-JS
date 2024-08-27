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

var swapPairs = function (head) {
  head = create(head);

  if (head == null || head.next == null) return head;
  let prev = head;
  let curr = head.next.next;
  head = head.next;
  head.next = prev;
  while (curr != null && curr.next != null) {
    prev.next = curr.next;
    prev = curr;
    let temp = curr.next.next;
    curr.next.next =  curr;
    curr = temp;
  }

  prev.next = curr;
  return head;
};

print(swapPairs([1,2,3]));
