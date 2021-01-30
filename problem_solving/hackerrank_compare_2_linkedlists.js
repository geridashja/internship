//function to find the length of a linkedlist
function length(llist){
    let temp = llist;
    let count = 0;
    while(temp){
        count++;
        temp = temp.next;
    }
    return count;
}

function CompareLists(llist1, llist2) {
    let l1 = length(llist1);
    let l2 = length(llist2);
    if(l1 != l2){
        return 0;
    }
    else{
        let temp1 = llist1;
        let temp2 = llist2;
        while(temp1 && temp2){
            if(temp1.data != temp2.data){
                return 0;
                break;
            }
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
    }
    return 1;
}
