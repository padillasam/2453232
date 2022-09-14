const Productos= require ('./productos');
const Categoria= require ('./categoria');
const Proveedor= require ('./proveedor');
const Factura= require ('./factura');
const FacturaProv = require ('./facturaProv');
const FacturaCliente = require ('./facturaCliente');
const Cupon = require ('./cupon');
const Carrito = require ('./carrito');

let produc1 = new Productos(01,`rtx 2060`,"6 gb",20000, "2015", 7, "ayer", "a las 4 sapo");
let produc2 = new Productos(02,`rtx 3060`,"8gb",35000, "2019", 5, "10 de septiembre", "15 de ocutbre"); 
var car1 = [];
let seleccion = new Carrito(car1);
console.log(produc1.precio);
console.log(seleccion);

seleccion.añadirCarrito(produc1.precio);
seleccion.añadirCarrito(produc2.precio);
console.log(seleccion);

seleccion.eliminarCarrito(car1);
console.log(seleccion);