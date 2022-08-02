var x1 = 1;
console.log("Yo amo la programación de software");
let y = 10;
console.log("valor de x =" + x);
console.log(`valor de x = ${x}`);
//aritmeticos: + - * / % -> resultado numérico
//relacionales: ==, ===, <, >. >=. <=, != ->resultado falso o verdadero
//lógico &&, ||, ! ->resultado falso o verdadero
// x>=5 && x<=20
// x>=5 || x<=20
//x=true    !x cambia el valor de verdad
//asignación-> =, +=, -=,*=, /=, %=
//ESTRUCTURAS DE CONTROL DE FLUJO DE DATOS
//CONDICIONALES
var x = 5;
var z = 7;
if (x > 0) {
  console.log(`${x} es positivo`);
} else if (x < 0) {
  console.log(`${x} es negativo`);
} else {
  console.log(`${x} es neutro`);
}

var selector;
console.log("1-sumar");
console.log("2-restar");
console.log("3-multiplicar");
console.log("4-salir");
selector = -7;

switch (selector) {
  case 1:
    console.log(`La suma es= ${x + z}`);
    break;
  case 2:
    console.log(`La resta es= ${x - z}`);
    break;
  case 3:
    console.log(`el producto es = ${x * z}`);
    break;
  case 4:
    console.log("chao");
    break;
  default:
    console.log("ERROR");
    break;
}

//variables simples
var a=10;
console.log(a);
var b=a;
console.log(b);
b=15;
console.log(a);
console.log(b);