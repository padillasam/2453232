//ESTRUCTURAS DE CONTROL CICLICAS
//for, while, do-while
//Anidar: ubicar una estructura dentro de otra
var suma=0;
for (let i = 1; i<=10; i++){
    suma+=i;
}
console.log(`La suma es= ${suma}`)

for (let i = 1; i<=100; i++){
    if (i%9==0) {
        console.log(`${i} es multiplo de 9`)
    }
}
console.log(`La suma es= ${suma}`)

console.log(Math.round(Math.random()*100));


console.log('´´´´´´'+num);
while(num<90) {
    num=Math.round(Math.random()*100);
    console.log(num);
}

var num=-10;
do {
    num=Math.round(Math.random()*100);
    console.log(num);
} while (num<90);


