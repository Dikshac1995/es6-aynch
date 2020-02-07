function add (num1,num2,callback){
    console.log(num1,num2);
    callback(num1*2,num2*2)
}

function  display(a,b){
    console.log("sum is ",a+b);

}
add(2,3,display);