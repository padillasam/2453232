class Proveedor{
    constructor(nit, nombre, fechaCompra, fechaEntrega){
        this._nit = nit;
        this._nombre = nombre;
        this._fechaCompra = fechaCompra;
        this._fechaEntrega = fechaEntrega;
    }

    get nit(){
        return this._nit;
    }

    get nombre(){
        return this._nombre;
    }

    get fechaCompra(){
        return this._fechaCompra;
    }

    get fechaEntrega(){
        return this._fechaEntrega;
    }

    set nit(nit){
        this._nit= nit;
    }

    set nombre(nombre){
        this._nombre= nombre;
    }

    set fechaCompra(fechaCompra){
        this._fechaCompra = fechaCompra;
    }

    set fechaEntrega(fechaEntrega){
        this._fechaEntrega = fechaEntrega;
    }
}

module.exports = Proveedor;