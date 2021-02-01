//added by me to calculate the sum of all elements in array
function add(arr){
    let temp = 0;
    if(arr.length == 0){
        return 0;
    }
    temp += arr[0] + add(arr.slice(1));
    
    return temp;
}
var runningSum = function(nums) {
    let res = [];
    let res2 = [];
    for(let i =0;i<nums.length;i++){
        if(res.length == 0){
            res.push(nums[i]);
            res2.push(nums[i]);
        }
        else{
            res2.push(nums[i]);
            let temp = 0;
            temp += add(res2);
            res.push(temp);
        }
    }
    return res;
};