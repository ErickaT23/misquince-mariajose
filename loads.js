// loads.js

// Hacer disponible el array en window para script.js
window.guests = [
  { id: "1", name: "Anabella & Leandro", passes: 2, mesa: 5 },
  { id: "2", name: "Macarena & Rogelio", passes: 2, mesa: 3 },
  // …
];


document.addEventListener("DOMContentLoaded", () => {
  const params  = new URLSearchParams(window.location.search);
  const guestId = params.get("id");
  const guest   = window.guests.find(g => g.id === guestId);

  if (guest) {
    const invitText =
      guest.passes > 1
        ? `¡${guest.name}, están invitados!`
        : `¡${guest.name}, estás invitado!`;

    document.getElementById("nombreInvitado").textContent = invitText;
    document.getElementById("cantidadPases").textContent =
      `${guest.passes} ${guest.passes === 1 ? "pase" : "pases"}`;
  } else {
    // Si el invitado NO existe, opcional: esconder invitación
    // document.getElementById("invitacion").style.display = "none";
  }

  // ❌ IMPORTANTE:
  // Aquí NO debe ir abrirInvitacion() ni tocar el sobre.
  // El usuario debe abrirlo manualmente con un clic.
});



  