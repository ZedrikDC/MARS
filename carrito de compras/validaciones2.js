document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const errorSpan = document.getElementById("error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // Validaciones
    if (email === "" || password === "") {
      errorSpan.textContent = "Todos los campos son obligatorios.";
      return;
    }

    if (!validateEmail(email)) {
      errorSpan.textContent = "El correo electrónico no es válido.";
      return;
    }

    if (password.length < 6) {
      errorSpan.textContent = "La contraseña debe tener al menos 6 caracteres.";
      return;
    }

    // Simular login exitoso
    // En una app real, aquí iría una solicitud al servidor
    alert("Inicio de sesión exitoso");
    window.location.href = "index.html";
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
