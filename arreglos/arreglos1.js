var vec=[];
//var vec2=new Array();
console.log(vec);
vec[0]=100;
console.log(vec);
vec.push([1,2,3]);
console.log(vec);

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);
}
console.log(vector)
//Recorrer el arreglo
for (let i = 0; i < vector.length; i++) {
    console.log(vector[i]*vector[i])
}



