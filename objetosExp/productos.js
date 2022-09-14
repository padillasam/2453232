//const Factura = require("./factura");

class Productos{
    constructor(codigo, nombre, descripcion, precio, añoL, existencias, fechaIngreso, fechaSalida){
        this._codigo = codigo;
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._precio = precio;
        this._añoL = añoL;
        this._existencias = existencias;
        this._fechaIngreso = fechaIngreso;
        this._fechaSalida = fechaSalida;
    }

    get codigo(){
        return this._codigo;
    }

    get nombre(){
        return this._nombre;
    }

    get descripcion(){
        return this._descripcion;
    }

    get precio(){
        return this._precio;
    }

    get añoL(){
        return this._añoL;
    }

    get existencias(){
        return this._existencias;
    }
    
    get fechaIngreso(){
        return this._fechaIngreso;
    }

    get fechaSalida(){
        return this._fechaSalida;
    }

    set codigo(codigo){
        this._codigo = codigo;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;

    }
    set precio(precio){
        this._precio = precio;
    }
    set añoL(añoL){
        this._añoL = añoL;
    }
    set existencias(existencias){
        this._existencias = existencias;
    }
    set fechaIngreso(fechaIngreso){
        this._fechaIngreso= fechaIngreso;
    }
    set fechaSalida(fechaSalida){
        this._fechaSalida = fechaSalida;
    }
}

module.exports = Productos;
