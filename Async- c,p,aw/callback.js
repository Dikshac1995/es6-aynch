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

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)
}

createPost({title:"post three", body:"this is second posts"},getPosts);// util all post on push getpost will not executed