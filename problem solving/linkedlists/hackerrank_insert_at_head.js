function insertNodeAtHead(head, data) {
    if(head == null){
        let newnode = new SinglyLinkedListNode(data);
        head = newnode;
    }
    else{
        let newnode = new SinglyLinkedListNode(data);
        newnode.next = head;
        head = newnode;
    }
    return head;
}