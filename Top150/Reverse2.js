/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

*/

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

 
  var reverseBetween = function(head, left, right) {
    
  };
