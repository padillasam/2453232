console.log('Hola');
setTimeout(() => {
    console.log('interrupción por timeout');
}, 2000);
setTimeout(function(){
    console.log('settimeout con función clásica')
},1000)
function externa(){
    console.log('soy externa al settimeout')
}
setTimeout(externa,500);

console.log('Mundo');
function saludos(){
    console.log("Hola Mundo");
  } 
  setTimeout(saludos);
  console.log('Debo ejecutarme antes del time out')
  function saludos(nombre, rol){
    console.log(`Hola, mi nombre es ${nombre}`);
    console.log(`Yo soy ${rol}`);
  }  
saludos('juan','médico');
setTimeout(saludos, 3000, "Nathan", "Programador");

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(Math.random())        
    }, 2000);
    
}

console.log((Math.random()*100+20)-20);

function vector(vec,tam){
for (let i = 0; i < tam; i++) {
 vec[i]=Math.random()*100;
}
console.log(',,,,',vec);
}
vec=[];
setTimeout(vector,1000,vec,5);
console.log(vec);

console.log(Math.random());
console.log(Math.random()*(100-20)+20);