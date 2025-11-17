import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js';
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyCCDYiXNbdFX9UYjEGIPfuAoEo2j2GiquQ",
  authDomain: "misquince-mariajose.firebaseapp.com",
  databaseURL: "https://misquince-mariajose-default-rtdb.firebaseio.com",
  projectId: "misquince-mariajose",
  storageBucket: "misquince-mariajose.firebasestorage.app",
  messagingSenderId: "111055251826",
  appId: "1:111055251826:web:d1d0cb99454a95662e95eb"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Función global para guardar deseos
window.guardarDeseo = function (nombre, mensaje) {
  return push(ref(db, 'buenos-deseos/'), {
    nombre,
    mensaje,
    timestamp: new Date().toISOString()
  });
};

// Función global para cargar / ocultar deseos
window.toggleWishes = function () {
  const wishesDiv = document.getElementById('wishes-container');
  const dbRef = ref(db, 'buenos-deseos/');

  // Si está visible → ocultar
  if (wishesDiv.classList.contains('visible')) {
    wishesDiv.classList.remove('visible');
    wishesDiv.classList.add('hidden');
    return;
  }

  // Si ya está cargado → solo mostrar
  if (wishesDiv.dataset.loaded === 'true') {
    wishesDiv.classList.remove('hidden');
    wishesDiv.classList.add('visible');
    return;
  }

  // Si no está cargado → leer de Firebase
  onValue(dbRef, (snapshot) => {
    wishesDiv.innerHTML = "";
    let count = 0;

    snapshot.forEach((childSnapshot) => {
      const wish = childSnapshot.val();
      if (!wish.nombre || !wish.mensaje) return;

      const p = document.createElement('p');
      p.innerHTML = `<strong>${wish.nombre}:</strong> ${wish.mensaje}`;
      wishesDiv.appendChild(p);
      count++;
    });

    if (count === 0) {
      wishesDiv.innerHTML = '<p style="text-align:center;">Aún no hay deseos enviados 💌</p>';
    }

    wishesDiv.dataset.loaded = 'true';
    wishesDiv.classList.remove('hidden');
    wishesDiv.classList.add('visible');
  }, { onlyOnce: true });
};

