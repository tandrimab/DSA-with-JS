function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}


function print(list) {
    let head = list;
    let str = '';
  //   let pointer = head;
  
    while (head !== null) {
      str += head.val + "->"
      head = head.next;
    }
    console.log(str);
  }

function create(list) {
    if(!list.length) return null;
  let head = new ListNode(list[0]);

  let pointer = head;

  for (let i = 1; i < list.length; i++) {
    pointer.next = new ListNode(list[i]);

    pointer = pointer.next;
  }
  return head;
}

var mergeTwoLists = function (list1, list2) {
  let head1 = create(list1);
  let head2 = create(list2);

  let pointer1 = head1,
    pointer2 = head2;

  let merged = new ListNode();

  let mergedPtr = merged;

  while (pointer1 !== null && pointer2 !== null) {
    if (pointer1.val < pointer2.val) {
      mergedPtr.next = new ListNode(pointer1.val);
      pointer1 = pointer1.next;
    } else {
      mergedPtr.next = new ListNode(pointer2.val);
      pointer2 = pointer2.next;
    }
    mergedPtr = mergedPtr.next;
  }

  while(pointer1 !== null ) {
    mergedPtr.next = new ListNode(pointer1.val);
    pointer1 = pointer1.next;
    mergedPtr = mergedPtr.next;
  }

  while(pointer2 !== null ) {
    mergedPtr.next = new ListNode(pointer2.val);
    pointer2 = pointer2.next;
    mergedPtr = mergedPtr.next;
  }

  return merged.next;
};

let list1 = [1];

let list2 = [0];

print(mergeTwoLists(list1, list2))
