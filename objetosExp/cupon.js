const productos = require('./productos')
class cupon {
    constructor (codigo, valorCupon){
        this.codigo = codigo;
        this.numero = valorCupon;
    }
    get codigo(){
        return this.codigo;
    }
    set codigo(cod){
        this.codigo = cod;
    }
    get valorCupon(){
        return this.numero;
    }
    set valorCupon(numero){
        this.numero = numero;
    }
    calcularDescuento(){
    }
}

module.exports = cupon;