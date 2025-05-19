const { ask } = require('../helpers/input');



async function main() {
  let limite = Number(await ask("Hasta que numero quieres contar "));
  let i = 1;


  for(i=1;i<=limite;i++){
    if(i % 2 === 0){
        console.log(i);
    }
  }
}

  main ();
//const {ask} = require ('../helpers/input');

//async function main(){
    //let limite = Number(await ask("Hasta que numero quieres contar "));
   //let i=0

    //for (let i=0;i<limite;i++){
        //if(i % 2 === 0){
            //console.log(limite[i]);
            
        //}
   // }
//}

//main();