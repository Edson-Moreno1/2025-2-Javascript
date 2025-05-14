// 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
// 🎯 Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir. El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// 🧩 Instrucciones:
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú:
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir

const {ask}= require ('../helpers/input');

async function main(){
    let option="";
    let frutas=[];
    let i=0

    while(option !=='4'){
        option = await ask ('¿Qué deseas hacer? \n1. Agregar una fruta \n2. Eliminar una fruta \n3.Mostrar lista \n4. Salir \n');
        if (option === '1')
            //Agregar fruta
            {
            let agregarfruta= await ask('¿Qué fruta deseas agregar?: ');
            frutas.push(agregarfruta);
    }else if (option === '2')
        // eliminar
        {
            if (frutas.length === 0) {
        console.log('No hay frutas disponibles');
        continue;
             } else {
        let frutaEliminar = await ask('¿Qué fruta deseas eliminar?: ');
        let index = frutas.indexOf(frutaEliminar);

        if (index !== -1) {
          frutas.splice(index, 1);
          console.log(`${frutaEliminar} ha sido eliminada `)
        } else {
          console.log('Fruta no encontrada ');
        }

    }
} else if(option === '3'){
    
    if(frutas.length === 0){
        console.log('lista de frutas no disponible');
        continue;
    }
    for(i=0;i<frutas.length;i++){
    
        console.log(`${frutas[i]}`);
    }
} else if (option === '4'){
    console.log("Gracias por utilizar el programa");
} else{
    console.log("Operacion no valida");
}

}
}
main();
