class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function populateList(list, root) {
    let head = root;
    let tail = root;
    for (const i of list) {
        const temp = new Node(i);
        if (head == null) {
            head = temp;
            tail = head;
        } else {
            tail.next = temp;
            tail = tail.next;
        }
    }
    return head;
}

function printSpiralList(list) {
    const auxList = [];
    let t = list;
    while (t != null) {
        auxList.push(t.data);
        t = t.next;
    }
    let i = Math.floor((auxList.length - 1) / 2), j = i + 1;
    let result = '';
    while (i >= 0 || j <= auxList.length - 1) {
        if (i >= 0) {
            result += auxList[i] + '->';
            i--;
        }
        if (j < auxList.length) {
            result += auxList[j] + '->';
            j++;
        }
    }
    result += 'X';
    console.log("Spiralled list: ", result);
}

function main() {
    let inputList = [1,2,3,4];
    let root = null;
    root = populateList(inputList, root);
    let t = root;
    let result = "";
    while(t != null) {
        result = result + t.data + "->"
        t = t.next;
    }
    result += "X";
    console.log("Input list: ", result);
    printSpiralList(root)
}

main();