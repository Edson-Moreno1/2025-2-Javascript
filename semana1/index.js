
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

var miDato;

var dato = 5;


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

var dato;
dato=5;

var miEntero = 1;
var miDecimal=1.33;


var si = true;
var no = false;


var dato = " Esto es un string";
var otroDato = 'Esto es otro string';


var dato; // su valor es undefined
var dato = undefined;

var x = 1;  // x=1
var y = ++x; //
var z = y++ + x ;

typeof 5;
typeof false;
typeof "carlos";
typeof undefined;

!true=false
!false=true
!!true=true

true === true
true === false
true !== false

var port = process.env.PORT || 5000;

