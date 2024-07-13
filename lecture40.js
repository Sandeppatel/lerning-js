//  promise
// first
 const promisesOne = new Promise((resolve, reject) => {
   setTimeout(function() {
    console.log('asyncs task is complete');
    resolve() ; 
   }, 1000); 
})
promisesOne.then(function(){
    console.log(" promise  consumed ");
});

//  two
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task two");
        resolve();
    }, 1000);
}).then(function(){
    console.log("async 2 reolved");
})