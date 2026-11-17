// Año actual: no cambia, por eso es const
const anioActual = 2026;

// Pedir datos al usuario (prompt siempre devuelve un string)
const nombre = prompt("¿Cómo te llamás?");
const ciudad = prompt("¿En qué ciudad vivís?");
const anioNacimientoTexto = prompt("¿En qué año naciste?");

// Convertir el año de string a número para poder hacer la cuenta
const anioNacimiento = parseInt(anioNacimientoTexto);

// Calcular la edad
const edad = anioActual - anioNacimiento;

// Armar el mensaje concatenando variables con strings
// Es let porque el mensaje se completa en dos pasos
let mensaje = "¡Hola, " + nombre + "! Vivís en " + ciudad + ".";
mensaje = mensaje + " Este año cumplís " + edad + " años.";

// Mostrar el resultado en la consola y en una alerta
console.log(mensaje);
alert(mensaje);
