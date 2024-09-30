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
    // resultat.innerText = input_numero.value;
    let num1 =  input_numero.value;
    let num2 = document.getElementById("input_numero2").value;
    if( isNaN(num1) ){
        num1=0;
    }
    if(isNaN(num2)){
        num2=0;
    }
    resultat.innerText= parseFloat(num1)+ parseFloat(num2);
}

let audio = document.getElementById("audio");

function playAudio(){
    audio.play();
}
function playAudio2(){
    audio.src="FANFARE1.WAV";
    audio.play();
}
function clk_btn_stopAudio(){
    audio.pause()
    audio.currentTime=0;
}
function clk_btn_mute(){
    audio.muted=!audio.muted;
}
function clk_btn_volUp(){
    try{
        audio.volume +=0.2
    }catch(e){
        audio.volume=1
    }    
    document.getElementById("vol").value=audio.volume;
}
function clk_btn_volDown(){
    try{
        audio.volume-=0.2
    }catch(e){
        audio.volume=0
    }
    document.getElementById("vol").value=audio.volume;
}

function change_inp_vol(){
    audio.volume= document.getElementById("vol").value;
}





// 1.	Crea un document HTML amb un div amb id “llista_propietats”. Programa amb 
// JS que es creï una llista amb els següents missatges i amb els valors obtinguts dinàmicament:
// a.	Valor mínim que pot tenir un número JS
// b.	Amplada total de la pantalla
// c.	Amplada interna de la finestra
// d.	Títol de la web
// e.	Hora actual

//mostraLlista()
window.setInterval(mostraLlista() , 1000)
function mostraLlista(){
    return ()=>{
    let data = new Date();
    let llista = document.getElementById("llista_propietats");
    llista.innerHTML=`<ol> 
                        <li>Valor mínim que pot tenir un número JS: `+Number.MIN_VALUE +` </li>
                        <li> Amplada total de la pantalla: `+screen.width+` </li>
                        <li>Amplada interna de la finestra:`+window.innerWidth+`</li>
                        <li>Titol de la web: `+document.title+` </li>
                        <li>Hora actual: `+data.getDate()
                                        +`/`+data.getMonth()
                                        +`/`+data.getFullYear()+
                                        ` - `+ data.getHours()
                                        +":"+data.getMinutes()
                                        +":"+data.getSeconds()+
                                        ` </li>
                    </ol>`;
    }
}
