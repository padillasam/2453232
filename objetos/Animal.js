// Animal.js

class Animal {
    /* Contenido de la clase */
    constructor(name){
        this._name=name;
    }

    get name(){
        return this._name;
    }
  }

  module.exports=Animal;