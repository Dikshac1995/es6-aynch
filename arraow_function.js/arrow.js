
//example of arrow function
const arr = (x,y)=>
{
    return (x  * y)
}
console.log(arr(2,3));

//example of arrow function with single parameter 

const arr2 = arrra => arrra.split(" ");
console.log(arr2("hello hiiiiiiiii"));

// example  of arrow with map

const smartphone = [
    {name : "oppo" , price :100000},
    {name:"Apple" , price :200000},
    {name:"Samsung" , price:12000},
];
//  var priceph = smartphone.map(function (mp){
//      return mp. price
//  });

 var priceph = smartphone.map(mp=> mp.price);
  console.log("phone prices are ",priceph);


// example of filter, find 

var number = [2,4,5,7,8];
var even = number . find (num => num%2 == 0);
var odd = number.filter(num => num%2 !==  0);
console.log(" first even num is ",even);
console.log("odd num is ", odd);
