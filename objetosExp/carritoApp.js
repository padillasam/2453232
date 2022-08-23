const Producto= require('./Producto');
const Carrito= require('./carrito');
//const cualquierVaina=['string',0,false];
//const prodCarro1=[]
const prod1=new Producto('Arroz',5000);
const carro1=new Carrito('Pedro Perez',prodCarro1=[]);
carro1.añadirproducto(prod1);
console.log(carro1.listaProductos);
carro1.añadirproducto(new Producto('aceite',10000))
console.log(carro1.listaProductos);