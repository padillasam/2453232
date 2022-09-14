const Carrito = require('./carrito');
class Factura{
    constructor(codigo, fechaCompra){
        this._codigo = codigo;
        this._cantidadProd = cantidadProd;
        this._fechaCompra = fechaCompra;
    }
    set codigo(codigo){
        this._codigo = codigo;

    }
    
    set fechaCompra(fechaCompra){
        this._fechaCompra = fechaCompra;
    }

    get codigo(){
        return this._codigo;
    }

    get fechaCompra(){
        return this._fechaCompra;
    }
    calcularIva(){
    }
    valorTotal(){
    }
}

module.exports= Factura;