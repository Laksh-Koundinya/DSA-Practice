const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    var first = []
    var two = []
    var main
while(l1 !== null){
    first.push(l1.val)
    l1 = l1.next
}
while(l2 !== null){
    two.push(l2.val)
    l2 = l2.next
}
main = [...first,...two].sort((a,b)=>a-b)
var head = new ListNode(main[0])
for(var i = 1; i<main.length; i++){
    head.next = new ListNode(main[i])
}
return head


    
};