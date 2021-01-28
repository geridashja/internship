function printLinkedList(head) {
    let temp = head;
    while(temp){
        console.log(temp.data);
        temp = temp.next;
    }

}