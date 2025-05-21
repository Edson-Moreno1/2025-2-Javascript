//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja


const { ask } = require('../helpers/input');

// 🎯 Función principal de análisis
function analizarCalificaciones(calificaciones) {
    let aprobados = 0;
    let reprobados = 0;
    let suma = 0;
    let max = calificaciones[0];
    let min = calificaciones[0];

    for (let i = 0; i < calificaciones.length; i++) {
        const nota = calificaciones[i];

        if (nota >= 70) {
            aprobados++;
        } else {
            reprobados++;
        }

        suma += nota;

        if (nota > max) max = nota;
        if (nota < min) min = nota;
    }

    const promedio = calificaciones.length > 0 ? suma / calificaciones.length : 0;

    return {
        aprobados,
        reprobados,
        promedio,
    };
}

// 🚀 Función asincrónica principal
async function main() {
    const calificaciones = [];

    console.log("Ingresa calificaciones entre 0 y 100. Deja vacío y presiona Enter para terminar.");

    let entrada = await ask("Calificación: ");

    while (entrada !== "") {
        const nota = Number(entrada);

        if (!isNaN(nota) && nota >= 0 && nota <= 100) {
            calificaciones.push(nota);
        } else {
            console.log("⚠️ Ingresa un número válido entre 0 y 100.");
        }

        entrada = await ask("Calificación: ");
    }

    const resultado = analizarCalificaciones(calificaciones);
    console.log("\n📊 Resultado del análisis:");
    console.log(`Aprobados: ${resultado.aprobados}`);
    console.log(`Reprobados: ${resultado.reprobados}`);
    console.log(`Promedio: ${resultado.promedio.toFixed(2)}`);
}

main();
