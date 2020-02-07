

function  tabletwo (x)
{ console.log(x);
    return new Promise(resolve =>
        {
            setTimeout(()=>
            {
                resolve (x*2);
            },2000);
        });
};

function addPromise (x){
    return new Promise (resolve=>{
        
        tabletwo(x).then((a) =>{
           
            tabletwo(a).then((b)=>{
              
                tabletwo(b).then((c)=>{
                      resolve (x+a+b+c);
            }) 
        })
    })
});
}

addPromise(2).then ((sum)=>
{
    console.log(sum)
});


console.log ("****************Async-Await******************");

function  tablethree(x)
{ 
    console.log(x);
    return new Promise(resolve =>
        {
            setTimeout(()=>
            {
                resolve (x*2);
            },2000);
        });
};

 async function addAsync(x){
     const p = await tablethree(x);
     const q = await tablethree(p);
     const r = await tablethree(q)
      return (x+p+q+r);

}

addAsync(3).then((cube)=>
{console.log(cube);}
);