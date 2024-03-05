const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
//const copiar = document.querySelector(".mensaje");
//const contenido = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
const textoEncriptado = encriptar(textarea.value)
mensaje.value=textoEncriptado
textarea.value="";
mensaje.style.backgroundImage ="none"
}


function encriptar(stringEncriptada)
{
let matrizCodigo = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"] ]
stringEncriptada=stringEncriptada.toLowerCase()

for(let i=0; i<matrizCodigo.length; i++)
{
if (stringEncriptada.includes(matrizCodigo[i][0]))
{
 stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDensencriptar(){
    const textoDesencriptado = desencriptar(textarea.value)
    mensaje.value=textoDesencriptado
    textarea.value="";
    mensaje.style.backgroundImage ="none"
    }


function desencriptar(stringDesencriptada)
{
let matrizCodigo = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"] ]
stringDesencriptada=stringDesencriptada.toLowerCase()

for(let i=0; i<matrizCodigo.length; i++)
{
if (stringDesencriptada.includes(matrizCodigo[i][1]))
{
 stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

//function btnCopiar() {

//const textoCopiado = Copiar (mensaje.value)
//mensaje.value=textoCopiado 
// btnCopiar.addEventListener("click", copiar = ()  {
// var contenido = document.querySelector(mensaje).textContent;
//    navigator.clipboard.writeText(textarea);
//console.log("texto copiado"); 
//});
//}
