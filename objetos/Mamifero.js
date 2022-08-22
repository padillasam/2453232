const Animal=require('./Animal.js');
class Mamifero extends Animal{
    constructor(nombre,especie){
        super(nombre);
        this._especie=especie;
    }
    get especie(){
        return this._especie;
    }
}
module.exports=Mamifero;