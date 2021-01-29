function insertNodeAtTail(head, data) {
    if(head == null){
        let newnode = new SinglyLinkedListNode(data);
        head = newnode;   
    }
    else{
        let newnode = new SinglyLinkedListNode(data);
        let temp = head;
        while(temp.next){
            temp = temp.next;
        }
        temp.next = newnode;
    }
    return head;
}