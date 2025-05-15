// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function obtenFecha(dia, mes, año) {
    const fechaActual = new Date();
    const fechaNacimiento = new Date(año, mes - 1, dia); // mes - 1 porque en JS los meses van de 0-11
    
    // Cálculo de años
    let años = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
    // Ajuste si todavía no ha llegado el cumpleaños este año
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    
    if (mesActual < (mes - 1) || (mesActual === (mes - 1) && diaActual < dia)) {
        años--;
    }
    
    // Cálculo de meses totales
    const mesesTotales = años * 12 + (mesActual - (mes - 1));
    
    // Cálculo de días totales
    const diferenciaDias = Math.floor((fechaActual - fechaNacimiento) / (1000 * 60 * 60 * 24));
    
    return {
        años: años,
        meses: mesesTotales,
        dias: diferenciaDias
    };
}

async function main() {
    const dia = Number(await ask("Ingresa tu dia de nacimiento: "));
    const mes = Number(await ask("Ingresa tu mes de nacimiento: "));
    const año = Number(await ask("Ingresa tu año de nacimiento: "));
    
    const resultado = obtenFecha(dia, mes, año);
    
    console.log("Años cumplidos:", resultado.años);
    console.log("Meses cumplidos:", resultado.meses);
    console.log("Días cumplidos:", resultado.dias);

    const personas = [
        "Pedro",
        "Juan",
        "Alicia",
        "Jacinto",
        "Rodrigo",
        "Bob",
        "Esther",
        "MOnica",
    ]

    for (let i = personas.length -1;1>=0;i--){
        personas[i];
    }
}



main();




