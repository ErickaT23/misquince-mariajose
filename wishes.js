import './database.js';

// Cuando se hace clic en enviar el deseo
document.getElementById('submit-wish').addEventListener('click', async () => {
  const nombre = document.getElementById('wish-name').value.trim();
  const mensaje = document.getElementById('wish-message').value.trim();

  if (!nombre || !mensaje) {
    alert("Por favor escribe tu nombre y mensaje 💌");
    return;
  }

  try {
    // Guardar en Firebase usando la función global
    await window.guardarDeseo(nombre, mensaje);
    alert("¡Gracias por tu mensaje! 💖");

    // Limpiar inputs
    document.getElementById('wish-name').value = "";
    document.getElementById('wish-message').value = "";

    // Forzar recarga de deseos cuando vuelvan a abrir
    document.getElementById('wishes-container').dataset.loaded = 'false';
  } catch (error) {
    console.error("Error al guardar deseo:", error);
    alert("Ocurrió un error, intenta de nuevo.");
  }
});

// Botón para ver los deseos (ID correcto)
document.getElementById('show-wishes').addEventListener('click', () => {
  window.toggleWishes();
});
// Mostrar / ocultar formulario de buenos deseos
document.getElementById('send-wish').addEventListener('click', () => {
  const form = document.getElementById('wish-form');

  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    form.classList.add('visible');
  } else {
    form.classList.remove('visible');
    form.classList.add('hidden');
  }
});
