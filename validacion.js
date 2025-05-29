// Función para validar el formulario
function validarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let email = document.getElementById("email").value.trim();
    let usuario = document.getElementById("usuario").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let errores = {};

    // Expresiones regulares corregidas
    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    let regexEdad = /^(?:[1-9][0-9]?|100)$/;
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regexUsuario = /^[A-Za-z0-9!"#$%&/()=?¿'.,;:_\-{}\[\]^}`+*~|\\]+$/; // Permite símbolos mencionados
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!"#$%&/()=?¿'.,;:_\-{}\[\]^}`+*~|\\]).{8,}$/; // Min 8 caracteres, 1 número, 1 símbolo

    // Validaciones
    if (!regexNombre.test(nombre)) {
        errores.nombre = "Solo se permiten letras y espacios.";
    }
    if (!regexEdad.test(edad)) {
        errores.edad = "Debe ser un número entre 1 y 100.";
    }
    if (!regexEmail.test(email)) {
        errores.email = "Formato de email inválido.";
    }
    if (!regexUsuario.test(usuario) || usuario.length < 5) {
        errores.usuario = "Debe tener al menos 5 caracteres y solo letras, números y símbolos válidos.";
    }
    if (!regexPassword.test(password)) {
        errores.password = "Debe tener al menos 8 caracteres, un número y un símbolo.";
    }
    if (password !== confirmPassword) {
        errores.confirmPassword = "Las contraseñas no coinciden.";
    }

    // Mostrar errores o éxito
    document.querySelectorAll(".error").forEach(span => span.textContent = "");
    document.querySelectorAll("input").forEach(input => input.style.border = "");

    if (Object.keys(errores).length > 0) {
        for (let campo in errores) {
            document.getElementById(`error${campo.charAt(0).toUpperCase() + campo.slice(1)}`).textContent = errores[campo];
            document.getElementById(campo).style.border = "2px solid red";
        }
    } else {
        let passwordEncriptada = btoa(password); // Encriptar contraseña con Base64
        document.getElementById("resultado").innerHTML = `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Edad:</strong> ${edad}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Usuario:</strong> ${usuario}</p>
            <p><strong>Contraseña (visible):</strong> ${password}</p>
            <p><strong>Contraseña (encriptada):</strong> ${passwordEncriptada}</p>
        `;
    }
}

// Función para limpiar el formulario
function cancelarFormulario() {
    if (confirm("¿Seguro que quieres borrar los datos?")) {
        document.getElementById("registroForm").reset();
        document.querySelectorAll(".error").forEach(span => span.textContent = "");
        document.querySelectorAll("input").forEach(input => input.style.border = "");
        document.getElementById("resultado").innerHTML = "";
    }
}

// Función para mostrar/ocultar la contraseña
function togglePassword() {
    let passwordField = document.getElementById("password");
    let confirmPasswordField = document.getElementById("confirmPassword");

    let type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    confirmPasswordField.type = type;
}
