function miPromesa(){
    return new Promise((resolve, reject)=>{
    });
}

miPromesa
    .then()
    .then()
function miPromesa(){
    return new Promise(function(resolve, reject){
    });
}
let promise = new Promise(function (resolve, reject) {
    // do something that might take a while
    // let's just set x instead for this example
    // let x = 100;
    // if (x > 10) {
    //  resolve(x); // on success
    //  } else {
    //  reject("Too low"); // on error
    //  }
    // //resolve();
    // 
    reject();
});

    promise.then(         
         function (value) {
         console.log("Success:", value);
         }
        ,
        function (error) {
        console.log("Error::::", error);
     }
);


function paraResolve(value){
    console.log("Success:", value);
}
 

console.log(Math.round(Math.random()*18));