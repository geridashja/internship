function insertNodeAtPosition(head, data, position) {
    if(head == null){
        let newnode = SinglyLinkedListNode(data);
        head = newnode;
    }
    else{
        let count = 1;
        let temp = head;
        let newnode = new SinglyLinkedListNode(data);
        while(temp){
            if(count == position){
                newnode.next = temp.next;
                temp.next = newnode;
                break;
            }
            count++;
            temp = temp.next;
        }
    }
    return head;
}