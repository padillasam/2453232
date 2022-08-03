var numeros=[];
for (let i = 0; i < 10; i++) {
    numeros.push(Math.round(Math.random()*100));
}
console.log(numeros);

numeros.forEach(function(n){
console.log(n+n);
})
var coleccion=[
    {nombre:'Cien años de soledad',autor:'Gabriel Garcia Marquez',
    obras:['la hojarasca','el coronel','el amor en los tiempos','el otoño']},
    {nombre:'Pedro Paramo',autor:'Juan Rulfo',obras:[]},
    {nombre:'Siervo sin Tierra',autor:'Eduardo Caballero Calderon',obras:[]},
]

coleccion.forEach(function(e){
    console.log(e.obras[e.obras.length-1]);
})




// coleccion.forEach(function(autor){
// console.log(autor);
// })

coleccion.forEach(function(autor){
for (const key in autor) {
    console.log(autor[key]);
}
})
