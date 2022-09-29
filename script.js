const lugarMensaje = document.querySelector(".lugarMensaje");
const mensaje = document.querySelector(".mensajeEncriptado");

function encriptarMensajes(stringEncriptado){
    let matrizCodigo =[["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
        
    }
    return stringEncriptado;

}

function encriptar(){
    const textoEncriptado = encriptarMensajes(lugarMensaje.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    lugarMensaje.value = ""
}


function desencriptarMensajes(stringEncriptado){
    let matrizCodigo =[["imes", "i"],["enter", "e"],["ai", "a"],["ober", "o"],["ufat", "u"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
        
    }
    return stringEncriptado;

}

function desencriptar(){
    const textoEncriptado = desencriptarMensajes(lugarMensaje.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    lugarMensaje.value = ""
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Texto Copiado")
}