const Factura = require ('./factura');
class facturaProv extends Factura{
    constructor(codigo,subtotal,cantidadProductos,fechaCompra,declaracionValor){
        super(codigo,subtotal,cantidadProductos,fechaCompra);
        this._declaracionValor= declaracionValor;
    }
    set declaracionValor(declaracionValor) {
        this.declaracionValor = declaracionValor;
    }
    get declaracionValor(){
        return this._declaracionValor;
    }
    derechosImport(){
    }
}

module.exports = facturaProv;