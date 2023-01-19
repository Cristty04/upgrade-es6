//Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. 
//Haz que la función muestre por consola la suma de los dos parametros.

//1.1 Ejecuta esta función sin pasar ningún parametro

const suma1 = (a = 10, b = 5) => a + b;
const resultado1 = suma1();

console.log (resultado1);

//1.2 Ejecuta esta función pasando un solo parametro

const suma2 = (a = 10, b = 5) => a + b;
const resultado2 = suma2(8);

console.log (resultado2);

//1.3 Ejecuta esta función pasando dos parametros

const suma = (a, b) => a + b;
const resultado = suma(10, 5)

console.log (resultado);