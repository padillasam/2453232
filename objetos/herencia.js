class Persona {
  constructor(nombre, documento) {
    this._nombre = nombre;
    this._documento = documento;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
  set documento(documento) {
    this._documento = documento;
  }

  get nombre() {
    return this._nombre;
  }
  get documento() {
    return this._documento;
  }

  datosCompletos() {
    return `${this._nombre}  ${this._documento}`;
  }
}
const ob = new Persona();
console.log(typeof ob);

class Aprendiz extends Persona {
  constructor(nombre, documento, ficha, programa) {
    super(nombre, documento);
    this._ficha = ficha;
    this._programa = programa;
  }
  set ficha(ficha) {
    this._ficha = ficha;
  }
  set programa(programa) {
    this._programa = programa;
  }

  get ficha() {
    return this._ficha;
  }
  get programa() {
    return this._programa;
  }

  datosCompletos() {
    return `${this._ficha}  ${this._programa}
                ${this._nombre}  ${this._documento}`;
  }
}
const ap1 = new Aprendiz("Juan Florez", 54321, 2453232, "ADSI");
console.log(ap1.nombre);
console.log(ap1.programa);
console.log(ap1.datosCompletos());

//+++++++++++++++++++++++++
//# private, si se imprime el objeto no muestra estos valores
class Dog {
  _dogName;
  _weight;
  _color;
  _breed;
  constructor(dogName, weight, color, breed) {
    this._dogName = dogName;
    this._weight = weight;
    this._color = color;
    this._breed = breed;
  }
  get dogName() {
    return this._dogName;
  }
  set dogName(dogName) {
    this._dogName = dogName;
  }
}
let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
console.log(dog);
dog.dogName = "Tito";
console.log(dog.dogName);



class Prueba{    
    constructor(atributo){
        console.log('El objeto fue creado');
        this._atributo=atributo;
    }
    get atributo(){
        return this._atributo;
    }
    obtenerAtributo(){
        return this._atributo; 
    }
    
    set atributo(atributo){
        this._atributo=atributo;
    }
    modificarAtributo(atributo){
        this._atributo=atributo;
    }

    metodo(){
        console.log('El objeto fue creado y tiene un método');
    }
}


const objeto=new Prueba("Nuevo Atributo");
objeto.metodo();
console.log(objeto.obtenerAtributo());
objeto.modificarAtributo("Atributo modificado");
console.log(objeto.obtenerAtributo());
objeto.atributo="atributo asignado con setter nuevo";
console.log(objeto.atributo);

class Test extends Prueba{    
}
const miTest=new Test();
miTest.atributo="Atributo desde clase Test";
console.log(miTest.atributo);



//console.log(typeof(objeto));