

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
    setTimeout(()=>reject("reject"),10000)
  });
promise.then(
    result => console.log(result),
    error => console.log (error)
);
