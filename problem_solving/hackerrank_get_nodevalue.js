function getNode(head, positionFromTail) {
    let temp = head;
    let temp2 = head;
    for(let i=0;i<positionFromTail; i++){
        temp =temp.next;
    }
    
    while(temp.next){
        temp2 = temp2.next;
        temp = temp.next;
    }
    return temp2.data;
    
}