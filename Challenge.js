function encriptar (){
    var frase = document.getElementById("texto__encriptado").value.toLowerCase();
    
    var texto__encrip = frase.replace(/e/img,"enter");
    var texto__encrip = texto__encrip.replace(/i/img,"imes");
    var texto__encrip = texto__encrip.replace(/a/img,"ai");
    var texto__encrip = texto__encrip.replace(/o/img,"ober");
    var texto__encrip = texto__encrip.replace(/u/img,"ufat");
    document.getElementById("texto__desencriptado").innerHTML = texto__encrip;

}

function desencriptar (){
    var frasedos = document.getElementById("texto__encriptado").value.toLowerCase();
    
    var texto__desencrip = frasedos.replace(/enter/img,"e");
    var texto__desencrip = texto__desencrip.replace(/imes/img,"i");
    var texto__desencrip = texto__desencrip.replace(/ai/img,"a");
    var texto__desencrip = texto__desencrip.replace(/ober/img,"o");
    var texto__desencrip = texto__desencrip.replace(/ufat/img,"u");
    document.getElementById("texto__desencriptado").innerHTML = texto__desencrip;

}

function copiar (){
    var contenido = document.querySelector("#texto__desencriptado")
    contenido.select();
    document.execCommand("copy");
    alert("Texto Copiado");
}

const botonEncriptar = document.querySelector("#boton__encriptado");
const botonDesencriptar = document.querySelector("#boton__desencriptar");
const botonCopiar = document.querySelector("#boton__copiar");

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);

//ocultar elementos
const ocultarTex = document.querySelector("[data-ocultar-elementos]");
const ocultarText = document.querySelector("[data-mostrar-elementos]");

ocultarTex.addEventListener("click", function () {
    document.getElementById('ocultarElemen').style.display='none'

});
ocultarText.addEventListener("click", function () {
    document.getElementById('ocultarElemen').style.display='none'

});

//mostrar elementos ocultos
const mostrarTex = document.querySelector("[data-ocultar-elementos]");
const mostrarText = document.querySelector("[data-mostrar-elementos]");

mostrarTex.addEventListener("click", function () {
    document.getElementById('texto__desencriptado').style.display='block'
});
mostrarText.addEventListener("click", function () {
    document.getElementById('texto__desencriptado').style.display='block'
});