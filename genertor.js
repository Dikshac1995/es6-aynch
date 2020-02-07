function * printHelloWorld (){
    console.log("first line");
    yield "hello";
    console.log("pause");
    yield "world";
    
    return "hii";
    yield "hello";
    
};
 const fn = printHelloWorld ();
 console.log(fn.next().value);
 console.log(fn.next().value);
 console.log(fn.next().value);
 const f = printHelloWorld();
 console.log(f.next().value);
 console.log(f.next().value);
 console.log(f.next().value);


 console.log ("************************************");

 function * squebnce (){
     yield "hi";
     yield "welcome";
     yield "in javascript";
    
 }

 for ( const var123 of squebnce()){
     console.log(var123);
 }