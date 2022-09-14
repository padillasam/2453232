function pruebaCallback(callback1,callback2,name){ 
    setTimeout(() => {
        callback1(name);   
    }, 5000);
        
    setTimeout(() => {             
        console.log('Dentro de pruebaCallback')                
    }, 1000);  
    
    setTimeout(() => {
        callback2(name);
    }, 3000);
   
}
function saludo(nombre){
    console.log(`Hola ${nombre}`)
}

function cuentaLetras(nombre){
    console.log(nombre.length);
}
pruebaCallback(cuentaLetras,saludo,'Ana');
//pruebaCallback(cuentaLetras,'Soacha Cundinamarca');

