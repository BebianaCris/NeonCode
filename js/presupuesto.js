document.addEventListener("DOMContentLoaded", () => {
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const telefono = document.getElementById("telefono");
  const email = document.getElementById("email");
  const producto = document.getElementById("producto");
  const plazo = document.getElementById("plazo");
  const extras = document.querySelectorAll(".extra");
  const total = document.getElementById("total");
  const formulario = document.getElementById("formulario");

  function validarTexto(texto, maxLength) {
    return /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto) && texto.length <= maxLength;
  }

  function validarTelefono(num) {
    return /^[0-9]{9}$/.test(num);
  }

  function calcularTotal() {
    let base = parseFloat(producto.value);
    let extraTotal = 0;
    extras.forEach(e => {
      if (e.checked) extraTotal += parseFloat(e.value);
    });
    let descuento = 0;
    let dias = parseInt(plazo.value);
    if (dias < 15) descuento = 0.1;
    else if (dias < 30) descuento = 0.05;
    let subtotal = base + extraTotal;
    let totalFinal = subtotal - subtotal * descuento;
    total.textContent = totalFinal.toFixed(2);
  }

  [producto, plazo, ...extras].forEach(element => {
    element.addEventListener("input", calcularTotal);
  });

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      !validarTexto(nombre.value, 15) ||
      !validarTexto(apellidos.value, 40) ||
      !validarTelefono(telefono.value) ||
      !email.checkValidity() ||
      !document.getElementById("condiciones").checked
    ) {
      alert("Por favor, revisa que todos los campos estén correctamente completados.");
      return;
    }
    alert("Formulario enviado correctamente 🚀");
    formulario.reset();
    total.textContent = "0";
  });

  calcularTotal();
});