const Productos= require('./productos');
class Categoria{
    constructor(marca, tipoChip){
        this._marca=marca;
        this._tipoChip=tipoChip;
    }
    set marca(marca){
        this._marca=marca;
    }
    get marca(){
        return this._marca;
    }
    set tipoChip(tipoChip){
        this._tipoChip=tipoChip;
    }
    get tipoChip(){
        return this._tipoChip;
    }

    asignarProducto(Productos){
    }
}
module.exports=Categoria;