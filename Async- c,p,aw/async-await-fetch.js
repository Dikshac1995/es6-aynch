async function fetchData(){
    const res = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    document.body.innerHTML=data[0].name;
}
fetchData();