const posts =[
    {title:"posts one ", body :"this is posts one "}
    
];
function getPosts(){
    setTimeout(()=>{
        let output = " ";
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;

    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if (!error){
                resolve();
            }
            else{
                reject('Error:somthing went wrong');
            }
        },2000)
    });
    
}
async function init (){
    await createPost({title:'post 4 ',body:'this is another post '});
    getPosts();
}

init();