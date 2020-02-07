
// var sayName = function (name){
//     console.log("hello",this.name);
// }
// sayName("diksha");
// **************implicit binding(.)*************** 

 var Person ={
     name :"diksha",
     age : 23 ,
     sayName :function(){
         console.log("my name is",this.name );
     }
 } ;
 Person.sayName;

      // implicit binding with passing diffrent object

    //  var fullName = function (obj){
    function fullName(obj){
     obj.displayName= function(){
         console.log("my  sister name is ",this.name);
     };
     obj.gerName= function (){
         console.log("pnly name is ",this.name)

     }
 };

var firstName ={
    name :"pooja",
 }
var lastName = {
    name :"chaudhary"
}
fullName (firstName);
firstName.displayName();
fullName (lastName);
lastName.gerName();
// fullName(lastName);
// firstName.displayName();
// fullName(lastName)
//

//*************************explicite binding(with call(),apply() and bind()************************
 var displayStudent = function (sub1,sub2,sub3){
    console.log("student is " +this.age+ "year old  and having subject " +sub1+ " "  +sub2 +  "  and " +sub3);
  };
 var displayMarks = function (...marks){
     console.log( this.name ,"get marks  " , marks );
 } 

var subject=["c","javascript","oops"];
var marks = [100,37,67];

var student= {
    name :"john",
    age: 25,
};
    displayStudent.call(student,subject[0],subject[1],subject[2]);
    displayMarks.apply( student , marks);

//***** bind  ****** */


    var dispalyDesignation =function (){
        console.log("designation is ", this.designation);
    }

    var employee= {
        designation:"SWD",
    };

    var abc =  dispalyDesignation.bind(employee);
    abc();
// dispalyDesignation();



//**************** */ default binding *********************

//  var nameDisplay = function (){
//     console.log("this scope ",this);
// }
// nameDisplay();


//******************* new binding*************** */

    var Fruits = function (name,price){
        // javascript create object this{}
        this.name =name
        this.price = price
        console.log(" cost of " ,this.name , "is", +this.price)
    }

    var fr = new Fruits("apple", 200);


//********************** window binding*********************** */

    // var displaySalary = function ()
    // {
    //     console.log("salary is ",this.salary)
    // };

    // var emp = {
    //     salary : 10000
    // };

    // window.salary = 22;
    // displaySalary();


    //**************Arrow function and normal function *** */


    var countup = {
        counter: 0,
         
        start:function(){
            setInterval(()=>{
                
                console.log("conter ",this.counter);
               this.counter++; // **INCORRECT**- doesn't increment countup's counter property
            }, 1000);
            


        }
      

    };
     
    countup.start();
    