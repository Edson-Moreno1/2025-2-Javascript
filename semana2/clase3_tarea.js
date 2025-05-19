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

    for(i=0;i<edades.length;i++){
        if(edades[i]>18){
            console.log(i);
        }else{
            console.log("No hay edades por mostrar");
        }

    }
    




}// fin de async function

main();