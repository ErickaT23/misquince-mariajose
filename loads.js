// loads.js

// Hacer disponible el array en window para script.js
window.guests = [
  { id: "1", name: "Abuelitos", passes: 2 },
  { id: "2", name: "Abuelita", passes: 1 },
  { id: "3", name: "Flor De María Santos", passes: 1 },
  { id: "4", name: "Ángel Santos y Fam", passes: 3 },
  { id: "5", name: "Ileana Arriola", passes: 4 },
  { id: "6", name: "Juan Benavente y Esposa", passes: 2 },
  { id: "7", name: "Ericka Benavente E Hija", passes: 2 },
  { id: "8", name: "Harry Benavente y Fam", passes: 4 },
  { id: "9", name: "Herbert Aguilar y Fam", passes: 6 },
  { id: "10", name: "Juan Carlos Marín y Fam", passes: 3 },
  { id: "11", name: "Liduvina Méndez", passes: 3 },
  { id: "12", name: "Gisela Hernández", passes: 2 },
  { id: "13", name: "Ana Luisa Méndez", passes: 1 },
  { id: "14", name: "Daniel Ezquivel y Fam", passes: 3 },
  { id: "15", name: "Cristopher Ardón y Fam", passes: 4 },
  { id: "16", name: "July Ojer", passes: 2 },
  { id: "17", name: "Paola Leal", passes: 1 },
  { id: "18", name: "Carlos Consuega y Esposa", passes: 2 },
  { id: "19", name: "José Ángel Méndez y Esposa", passes: 2 },
  { id: "20", name: "Óscar Juárez y Fam", passes: 3 },
  { id: "21", name: "Ana Juárez", passes: 3 },
  { id: "22", name: "José Ángel Méndez y Fam", passes: 3 },
  { id: "23", name: "Carlos García y Esposa", passes: 2 },
  { id: "24", name: "Carlos López y Esposa", passes: 2 },
  { id: "25", name: "Vinicio Cuevas y Esposa", passes: 2 },
  { id: "26", name: "Julio García y Esposa", passes: 2 },
  { id: "27", name: "Carlos Trujillo y Esposa", passes: 2 },
  { id: "28", name: "Mario Rojas y Fam", passes: 4 },
  { id: "29", name: "Fredy De La Cuesta y Fam", passes: 4 },
  { id: "30", name: "Loyda Arreola", passes: 2 },
  { id: "31", name: "Rocío Gil", passes: 2 },
  { id: "32", name: "Álvaro Reyes y Esposa", passes: 2 },
  { id: "33", name: "Vinicio Rivera y Fam", passes: 3 },
  { id: "34", name: "Byron Girón", passes: 2 },
  { id: "35", name: "María Antonia Santos", passes: 4 },
  { id: "36", name: "Danilo Urízar y Esposa", passes: 3 },
  { id: "37", name: "Cristy Jiménez", passes: 2 },
  { id: "38", name: "Alexandra Sierra", passes: 2 },
  { id: "39", name: "Letia Rodríguez", passes: 1 },
  { id: "40", name: "Elizabeth Del Valle", passes: 1 },
  { id: "41", name: "Dania Montoya", passes: 1 },
  { id: "42", name: "Rosario Gómez", passes: 1 },
  { id: "43", name: "Fernanda Castilla", passes: 2 },
  { id: "44", name: "Marbella Cano", passes: 1 }
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



  