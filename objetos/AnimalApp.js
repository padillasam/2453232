// index.js
//import { Animal } from "./Animal.js";
//const hello = require('./myExport.js')
const Animal=require('./Animal.js');
const Mamifero=require('./Mamifero.js');
console.log(typeof(Animal));
const pato = new Animal('Lucas');
const perro=new Mamifero('Perro','Canino');
console.log(typeof(pato));
console.log(pato._name)
console.log(perro._name)
console.log(perro._especie)
