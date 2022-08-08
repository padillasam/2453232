//this significa éste(a) o el(la) presente = (objeto, clase o función)
const aprendiz1 = {
  nombre: "Maria",
  documento: 12345,
  competencias: ["diseño", "análisis", "desarrollo"],
  formacion:{ programa: "Prg de software", ficha:2453232, },
  datosPersonales:function(){
    return `nombre...${this.nombre}, documento...${this.documento}`;
  }
}

const aprendiz2 = {
  nombre: "Pedro",
  documento: 54321,
  competencias: ["diseño", "análisis", "desarrollo","ética"],
  formacion:{ programa: "Prg de software", ficha:2453232, },
  datosPersonales:function(){
    return `nombre...${this.nombre}, documento...${this.documento}`;
  }
}
console.log(aprendiz2.datosPersonales());

//Datos primitivos o simples
// let a;
// a=1;
// a='sena'
// a=4.2;


