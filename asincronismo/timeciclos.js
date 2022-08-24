var vec=[];
for (let i = 0; i < 10; i++) {
    vec[i]=Math.round(Math.random()*100);    
}

var mifuncion=() => {        
    console.log(vec[k])
    k++;
    k==10?k=0:k=k
}
var k=0;
    setInterval(mifuncion, (1000));        

for (let j = 0; j < vec.length; j++) {
    setTimeout(() => {
        console.log(vec[j])
    }, (1000*j));        
}


//Misión: Porque cambia con let y var. 
for (let j = 0; j < 10; j++) {
    setTimeout(() => {
        console.log(j)
    }, (1000*j));        
}
setInterval(() => {
    console.log('Amo el SENA');
}, 1000);

// repetir con el intervalo de 2 segundos
let timerId = setInterval(() => console.log('tick'), 2000);

// después de 5 segundos parar
setTimeout(() => { 
    clearInterval(timerId);
   // console.log('stop');
    }, 5000);

//OPERADOR CONDICIONAL TERNARIO
let x=10
x>=50?console.log('es mayor'):console.log('es menor')
if (x>=50) {
    console.log('es mayor')
} else {
    console.log('es menor')
}
