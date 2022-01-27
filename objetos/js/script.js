const minusculas = "abcdfghijklmnñopqrstuvwxyzs";
const mayusculas = minusculas.toUpperCase();
const numeros = "0123456789";
const c_especiales = "!#%&'()-.*/|"

function accion(opcion) {
    switch (opcion) {
        case "Validar":
            validarUsuario(c_especiales, mayusculas);
            validarClave(c_especiales, mayusculas, numeros);
            registroCorrecto();
            break;
    
        case "Cancelar":
            salir();
            limpiar();
            break;
    }
}

function validarUsuario(c_especiales, mayusculas) {
    let usuario = document.getElementsByName("perfil")[0].value;
    let validarChars = true;
    let validarMayus = true;

    if (usuario == "") {
        alert("Por favor, introduce un nombre de usuario");
    } else {
        for(let i= 0; i < c_especiales.length; i++) {
            if(usuario.includes(c_especiales.charAt(i))){
                alert("No se pueden poner caracteres especiales en el nombre de usuario");
                validarChars = false;
                break;
            } 
        }

        for(let i = 0; i < mayusculas.length; i++) {
            if(usuario.includes(mayusculas.charAt(i))) {
                alert("No se pueden poner mayúsculas en el nombre de usuario");
                validarMayus = false;
                break;
            } 
        }

        if(validarChars == true && validarMayus == true) {
            return true;
        }
    }
}

function validarClave(c_especiales, mayusculas, numeros) {
    let clave = document.getElementsByName("perfil")[1].value;
    let validarNum = false;
    let validarChars = false;
    let validarMayus = false;

    if (clave == "") {
        alert("Por favor, introduzca una contraseña");
    } else {
        for(let i = 0;i < c_especiales.length; i++) {
            if (clave.includes(c_especiales.charAt(i))) {
                validarChars = true;
                break;
            }
        }

        for(let i = 0; i < mayusculas.length; i++){
            if(clave.includes(mayusculas.charAt(i))) {
                validarMayus = true;
                break;
            }
        }

        for(let i = 0; i < numeros.length; i++){
            if(clave.includes(numeros.charAt(i))) {
                validarNum = true;
                break;
            }
        }

        if(clave.length > 8 && validarMayus == true && validarChars == true && validarNum == true) {
            return true;
        } else {
            alert("Recuerda que la contraseña debe: tener más de 8 dígitos, contener al menos una mayúscula, un caracter especial y un número");
        }
    }
}

function registroCorrecto() {
    if (validarUsuario(c_especiales, mayusculas) == true && validarClave(c_especiales, mayusculas, numeros) == true) {
        alert("Datos almacenados correctamente");
    } 
}

function salir() {
    alert("¿Estás seguro/a de que quieres cancelar?");
}

function limpiar() {
    document.getElementsByName("perfil")[0].value = "";
    document.getElementsByName("perfil")[1].value = "";
} 