//const Factura = require("./factura");

class Producto{
    constructor(nombre, precio){        
        this._nombre = nombre;       
        this._precio = precio;        
    }    
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set precio(precio){
        this._precio = precio;
    }   
}
module.exports = Producto;
