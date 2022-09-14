var x=[];//arreglos llaves
//Organizado por indices
x[0]=100;
x[2]=3;
console.log(x);

var objeto={}    
//objeto literal
//organizado por parejas claves:valor;
//Los valores pueden ser de cualquier tipo de dato
//incluso datos compuestos como otros arreglos u objetos
//Operador punto. Sirve para acceder a una clave en particular
const aprendiz = {
  nombre: "Maria",
  documento: 12345,
  competencias: ["diseño", "análisis", "desarrollo"],
  formacion:{ programa: "Prg de software", ficha:2453232, },
};
console.log(aprendiz.documento)
console.log(aprendiz['nombre'])
console.log(aprendiz['competencias'][1])


aprendiz.area='software';
console.log(aprendiz.ficha)
aprendiz.nombre='Maria Jose';
console.log(aprendiz)
aprendiz.competencias.push('Deporte');
console.log(aprendiz.competencias);
console.log(aprendiz)
aprendiz.formacion.jornada='diurna';
console.log(aprendiz)
aprendiz.formacion.jornada='mañana';
console.log('objeto original',aprendiz)
var aprendiz2=aprendiz;//recuerden var b=a;
console.log('Objeto copiado',aprendiz2);
//console.log('.....'+aprendiz2.documento);
aprendiz2.sede='Soacha';
console.log('objeto original modif',aprendiz)
console.log('Objeto copiado modif',aprendiz2);

console.log('...............................')
for (const key in aprendiz) {
 console.log(`${aprendiz[key]}`) 
}


// for (const key in aprendiz) {
//   console.log(`${key} ...${aprendiz[key]}`);
// }