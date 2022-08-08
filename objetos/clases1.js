class Producto{
    constructor(nombre, precio){
        this._nombre=nombre;
        this._precio=precio;
    }    
    get nombre(){
        return this._nombre;
    }    

    set nombre(nombre){
        this._nombre=nombre;
    }
}


//INSTANCIACION DE OBJETOS - operador new
//let x=10; similar a declarar variables
let prod1=new Producto('computador',4000000);
console.log(prod1.nombre);
prod1.nombre="computador portatil";
console.log(prod1.nombre);



// let prod2=new Producto('Celular',3000000);
// console.log(prod1);
// console.log(typeof(prod1));
// console.log(prod2);
// console.log(typeof(prod2));
