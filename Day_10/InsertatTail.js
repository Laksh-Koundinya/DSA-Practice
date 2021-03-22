
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    var newNode = new LinkedListNode(data)
if(!head){
  head.next = newNode
    return head
}
else{
    var current = head;
    while(current.next !== null){
        current = current.next
    }
    current.next = newNode

}
return head   
}

    

