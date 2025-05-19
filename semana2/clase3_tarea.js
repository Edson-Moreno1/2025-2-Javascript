// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.


const {ask}= require ('../helpers/input');

async function main (){
    const edades=[];
    
   let entrada = await ask("Ingresa una edad")

   while(entrada !== ""){
    const edad = Number(entrada);

    if (!isNaN(edad)){
        edades.push(edad);
    }else{
        console.log("Eso no es un número válido ");
    }
    entrada = await ask("ingresa otra edad ");
   }

   let puedeVotar = 0;

   for(let i = 0; i<edades.length;i++){
    if(edades[i]>=18){
        puedeVotar++;
    }
   }

   console.log(`Total de personas que pueden votar:${puedeVotar}`);


}// fin de async function

main();