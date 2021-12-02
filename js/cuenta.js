var nombre = document.getElementById().innerHTML;
var correo = document.getElementById().innerHTML;
var contraseña= document.getElementById().innerHTML;
var formulario= document.querySelector(".formulario_crear");

const crear=document.getElementById("Crear");

var valido = document.getElementById("emailOk");


crear.addEventListener("submit", e=>{

    nombre.preventDefault()
    let warnings= ""
    if(nombre.value.lenght <6){
        
        warnings += 'El nombre no es valido <br >'

    }

    correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   
    if (correo.test(campo.value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "incorrecto";
    }
});

function crear(){
    formulario
}
