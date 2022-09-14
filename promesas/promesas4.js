function miPromesa(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        console.log(`hola ${nombre}`)
        resolve(nombre);
        }, 1000);        
    });
}
miPromesa('Soacha')
.then((value)=>{
    console.log(`saludo a ${value}`);
    return value;
})
.then(externa)
function externa(parametro){
    setTimeout(() => {
        console.log(`Dato recibido del then: ${parametro}`)
        console.log('Soy una función externa')
        console.log('Con retardo de 2 segundos')
    }, 2000);
    
}