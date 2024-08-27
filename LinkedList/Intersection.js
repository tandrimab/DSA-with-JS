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

function count(head) {
    let count = 0;
    let ptr = head;

    while (ptr !== null) {
        count++;
        ptr = ptr.next;
    }

    return count;
}

var getIntersectionNode = function (headA, headB) {
    headA = create(headA)
    headB = create(headB)

    let count1 = count(headA);
    let count2 = count(headB);
    let ptr1, ptr2;
    if (count1 > count2) {
        ptr1 = headA;
        ptr2 = headB
    } else {
        ptr1 = headB;
        ptr2 = headA;
    }

    let i = 0;
    while(i < Math.abs(count1 - count2)) {
        ptr1 = ptr1.next;
        i++;
    }
    while(ptr1 !== null && ptr2 !== null) {
        if(ptr1 === ptr2) return ptr1.val;
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return null;

};

let listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
console.log(getIntersectionNode(listA, listB));
