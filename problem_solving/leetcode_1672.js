//added by me to find the sum of array
function add(arr){
    let temp = 0;
    if(arr.length == 0){
        return 0;
    }
    temp += arr[0] + add(arr.slice(1));
    
    return temp;
}

var maximumWealth = function(accounts) {
    let res =[];
    for(let i =0;i<accounts.length;i++){
        let sum =0;
        sum+= add(accounts[i]);
        res.push(sum);
    }
    let max = Math.max.apply(null, res);
    return max;
};