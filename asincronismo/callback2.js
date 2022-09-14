let vector=[]
function principal(callback1,vec,tam){
for (let i = 0; i < tam; i++) {    
    vec[i]=Math.round(Math.random()*100);
}
setTimeout(() => {
    console.log(callback1(vec));
}, 2000);

// setTimeout(() => {
//     callback2(vec);
// }, 5000);
}

const promedio=(vec)=>{
    let suma=0;
    for (let i = 0; i < vec.length; i++) {      
        suma+=vec[i];
    }
    return suma;
}

principal(promedio,vector,15);
console.log(vector);