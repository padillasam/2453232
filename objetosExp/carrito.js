const Productos= require('./Producto');
class Carrito{
    constructor(cliente,listaProductos){
     this._cliente = cliente;
     this._listaProductos = listaProductos;

    }
    get listaProductos(){
        return this._listaProductos;
    }
    set listaProductos(listaProductos) {
        this._listaProductos = listaProductos;
    }
    get cliente(){
        return this._cliente;
    }
    set cliente(cliente) {
        this._cliente = cliente;
    }
    // get cantidadProd(){
    //     return this._subtotal;
    // }
    // set cantidadProd(cantidadProd){
    //     this._cantidadProd = cantidadProd;
    // }

    // set cantidadProd(cantidadProd){
    //     this._cantidadProd = cantidadProd;
    // }


    añadirproducto(producto){
        this._listaProductos.push(producto);
    }

    eliminarProducto(){ 
        this._listaProductos.pop();
    }

    subtotal(subtotal){
        return this._precios * this._cantidadProd       
    }
}

module.exports = Carrito;