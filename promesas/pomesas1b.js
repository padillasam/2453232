function paraResolve(value){
    console.log("Success:", value);
}

function miPromesa(){
    return new Promise((resolve, reject)=>{
    });
}
function miPromesa(){
    return new Promise(function(resolve, reject){
    });
}
let promise = new Promise(function (resolve, reject) {
    // do something that might take a while
    // let's just set x instead for this example
    let x = 10;
    if (x > 10) {
     resolve(x); // on success
     } else {
     reject("Too low"); // on error
     }
    //resolve();
    });

    promise.
    then(
        paraResolve,
        function (value) {
        console.log("Success:", value);
        }
    )