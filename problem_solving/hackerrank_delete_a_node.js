function deleteNode(head, position) {
    if(head == null){
        return;
    }
    if(position == 0){
        let temp = head.next;
        head = head.next;
        temp = null;
        return head;
    }
    else{
        let temp = head;
        let count = 1;
        while(temp){
            if(count == position){
                let temp2 = temp.next;
                temp.next = temp2.next;
                temp2 = null; //we cannot use "delete" to free objects in strict mode
                break;
            }
            count++;
            temp = temp.next;
        }
    }
    return head;
}