class Producto{  
    #nombre;
    #precio;  
    constructor(nombre, precio){
        this.#nombre=nombre;
        this.#precio=precio;
    }    
    get nombre(){
        return this._nombre;
    }    
    set nombre(nombre){
        this._nombre=nombre;
    }
    modificarNombre(nombre){
        this.#nombre=nombre;
    }
    datosCompletos(){
        return `nombre= ${this.#nombre} precio=${this.#precio}`;
    }
}

const ob=new Producto("Arroz",5000);
console.log(ob.nombre);
console.log(ob.nombre);
ob.nombre="Arroz chino";
console.log(ob.nombre);
console.log(ob.nombre);

const literal={}
literal.nombre="Tiene nombre";
console.log(literal)
literal.saludar=function(){
    return `Hola Soacha`;
}
console.log(literal.saludar())

function Automovil(){    
    //return 100;
}

const objeto=new Automovil();
console.log(typeof(objeto));
Automovil.prototype.marca;
Automovil.prototype.maxVelocidad=function(){
    return `Maximo 200 kph`;
}
objeto.marca="Chevrolet";
console.log(objeto.marca);
console.log(objeto.maxVelocidad());
const objeto2=new Automovil();
objeto2.marca="kia"
console.log(objeto2)
console.log(objeto2.maxVelocidad());
//console.log(typeof(Automovil()));

function Animal(nombre,especie){
    
}