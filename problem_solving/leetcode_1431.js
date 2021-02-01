var kidsWithCandies = function(candies, extraCandies) {
    //used to find the max element in an array
    let max = Math.max.apply(null, candies);
    let res = [];
    let isit = true;
    for(let i =0;i<candies.length;i++){
        if((candies[i] + extraCandies) > max || (candies[i] + extraCandies) == max ){
            res.push(isit);
        }
        else{
            res.push(!isit);
        }
    }
    return res;
};