class LinkedList {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}

function create() {
    const ll1 = new LinkedList(10);
    const ll2 = new LinkedList(20);
    const ll3 = new LinkedList(30);

    ll1.next = ll2;
    ll2.next = ll3;
    ll3.next = null;

    let temp = ll1;

    while(temp !== null) {
        console.log(temp.value);
        temp = temp.next;
    }

    // console.log(temp.value);
}

create();