class LinkedList {
  constructor(value) {
    this.value = value || 0;
    this.next = null;
  }
}

function createList(arr) {
  let head = new LinkedList(arr[0]);

  let tail = head;
  
  for (let i = 1; i < arr.length; i++) {
    tail.next = new LinkedList(arr[i]);
    tail = tail.next;
  }
  return head;
}

function addTwoLists(list1, list2) {
    let pointer1 = list1, pointer2 = list2;
    let remainder = 0;
    let num1, num2, result;

    let resultListHead = new LinkedList();

    let resultListCurrent = resultListHead;

    while(pointer1 !== null || pointer2 !== null || remainder) {
        num1 = pointer1 === null ? 0 : pointer1.value;
        num2 = pointer2 === null ? 0 : pointer2.value;

        result = (num1 + num2 + remainder) % 10;

        remainder = Math.floor((num1 + num2 + remainder) / 10);

        resultListCurrent.next = new LinkedList(result);

        resultListCurrent = resultListCurrent.next;

        pointer1 = pointer1 !== null ? pointer1.next : null;
        pointer2 = pointer2 !== null ? pointer2.next : null;

    }

    return resultListHead.next
}

function printList(list) {
  let pointer = list;

  let printedString = "";
  while (pointer != null) {
    printedString += pointer.value + "->";
    pointer = pointer.next;
  }
  console.log(printedString);
}

var addTwoNumbers = function (l1, l2) {
  let list1 = createList(l1);

  printList(list1);

  let list2 = createList(l2);

  printList(list2);

  let result = addTwoLists(list1, list2);

  printList(result);
};

addTwoNumbers([3,4,2], [4,6,5]);
