console.log("Hola!");
let div = window.document.getElementById("div_text");
div.innerHTML =" Hola <h1>  HTML </h1>";
div.innerText+="Hola <h1> HTML </h1>";
// alert("Popupfeo alert");

//let numero = window.prompt("Indica un numero")
let input_numero = document.getElementById("input_numero")
let numero = input_numero.value

let resultat= document.getElementById("resultat")
resultat.innerText=numero;

function sumaValors(){
    resultat.innerText = input_numero.value;
}


