const Factura = require ('./factura');
class facturaProv extends Factura{
    constructor(codigo,subtotal,cantidadProductos,fechaCompra,direccionEntrega){
        super(codigo,subtotal,cantidadProductos,fechaCompra);
        this._direccionEntrega= direccionEntrega;
    }
    set direccionEntrega(direccionEntrega) {
        this.direccionEntrega = direccionEntrega;
    }
    get direccionEntrega(){
        return this._direccionEntrega;
    }
    ofertaMayoreo(){
        
    }
}

module.exports = facturaProv;