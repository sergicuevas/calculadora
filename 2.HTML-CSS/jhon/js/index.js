//variables - tipos
//entrada y salida de datos
//condicionales - operadores
//ciclos
//funciones
//colecciones: listas,arrays,diccionarios,colas,pilas
//objetos -- typescript
var usuario = "jhon";
let correo = "jhon@gmail.com";
let contrasena = "123";
numero = "123";
const PI = 31.141592;
console.log("hola mundo" + correo);

if (numero === 123) {
  console.log("es igual");
} else {
  console.log("no es igual");
}

numeros = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

for (let numero in numeros) {
  console.log(numero);
}

function suma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(suma(1, 2));

let persona = {
  nombre: "jhon",
  apellido: "mendez",
};

console.log(`me llamo ${persona.nombre} y mi apellido es ${persona.apellido}`);

let empleado = new Object();
empleado.nombre = "pedro";
empleado.apellido = "ramirez";

console.log(
  `me llamo ${empleado.nombre} y mi apellido es ${empleado.apellido}`
);
