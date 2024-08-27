class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function insert() {
    const ll1 = new LinkedList(10);
    const ll2 = new LinkedList(20);
    const ll3 = new LinkedList(30);

    ll1.next = ll2;
    ll2.next = ll3;
    ll3.next = null;

    let newNode = new LinkedList(5);

    newNode.next = ll1;
}