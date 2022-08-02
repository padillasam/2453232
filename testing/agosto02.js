var vec=[];
//var vec2 = new Array();
console.log(vec);

vec[0] = 100;
console.log(vec); 

vec.push([1,2,3]);
console.log(vec);

//---

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);
}
console.log(vector);


// EJERCICIO SUMA
var vc=[];
for (let i = 0; i < 20 ; i++) {
    vc[i]=Math.round((Math.random())*100);
}
sm=0;
for (let i = 0; i < vc.length; i++) {
    sm= sm+vc[i]
}
console.log(vc,sm);


//EJERCIO PROMEDIO 

var vc=[];
for (let i = 0; i < 20 ; i++) {
    vc[i]=Math.round((Math.random())*100);
}
sm=0;
for (let i = 0; i < vc.length; i++) {
    sm= sm+vc[i] 
    prom = sm/20
}
console.log(vc,sm,prom);


//EJERCICIO VALOR MAXIMO

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);
}
mx=0; 
for (let i = 0; i < vector[i]; i++) {
    if (vector[i]>mx) {
        mx=vector[i]
    }
}
console.log(vector,mx)


//EJERCICIO MEDIANA 

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);
}
console.log(vector)
for (let i = 0; i < vector.length; i++) {
    mdn=vector.length+1
    mediana= mdn/2
    posicion=vector[mediana]    
} if (mdn % 2 == 0) {
    console.log(vector,mediana,posicion)
} else {
    
}
console.log(vector,mediana,posicion)



// ORDENAMIENTO POR BURBUJA: 



//PARES E IMPARES: 
//+++++++++++++  agosto 02 explicación instructor

//--
var vector=[];
for (let i = 0; i < 20 ; i++) {
vector[i]=Math.round((Math.random())*100);
}
//var suma=0,cont=0;
[suma,cont]=[0,0];//declarar varias variables en una línea, usa arreglos
console.log(vector);

    for (let i = 0; i < vector.length; i++) {
        var par = vector[i] % 2;//residuo
        if (par == 0) {
            console.log(vector[i]);
            suma+=vector[i]//var=var+otraVar
            cont=cont+1// var=var+ constante

        }   
}
console.log(`La suma de los 
pares es ${suma}`)
console.log('La cantidad de \n pares es', cont);

//+++++++++++++  agosto 02 explicación instructor





var par = vector[i] % 2
var impar = vector[i] % 2
    if (par == 0) {
        console.log(vector);
    } else if (impar != 0) {
        console.log(vector);
    }{
    }


console.log(vector,`pares: ${par}, impares: ${impar}`)


//----

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);

var par = vector[i] % 2;
var impar = vector[i] % 2;
var acum = 0;
var acum2 = 0
if (par == 0) {
    for (let i = 0; i < vector.length; i++) {
        acum++;
    }
}
if (impar != 0) {
    for (let i = 0; i < vector.length; i++) {
        acum2++;
        
    }
}
console.log(vector, acum, acum2);
}


//--

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);

var par = vector % 2;
var impar = vector % 2;
suma=0
suma1=0
    if (par == 0) {    
        for (let i = 0; i < vector.length; i++) {
            suma= suma+par[i]
}
    if (impar != 0) {
        for (let i = 0; i < vector.length; i++) {
            suma1= suma1+impar[i]    
        }
    }
    }
}
console.log(vector,suma,suma1)


//-- 

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);
    for (let i = 0; i < vector.length; i++) {
        if (vector%2==0) {
            console.log(`Par: ${vector[i]}`)
        } 
    for (let i = 0; i < vector.length; i++) {
    if (vector%2!=0) {
            console.log("impares:",vector[i])
        } {
        }
    }
}
}
console.log(vector)
Footer
