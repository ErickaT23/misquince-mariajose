// script.js
// Lógica de invitación basada en el array estático `guests` definido en loads.js

// Al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    iniciarContador();
    cargarDatosInvitado();
    initFadeInObserver();
    document.getElementById('seal')?.addEventListener('click', abrirInvitacion);
  });
  
  // 1. Función para abrir la invitación y reproducir música
  function abrirInvitacion() {
    const envelope = document.getElementById('envelope');
    const invitacion = document.getElementById('invitacion');
    const musica = document.getElementById('musica');
  
    if (!envelope || !invitacion) return;
  
    envelope.classList.add('open');
  
    setTimeout(() => {
      envelope.style.display = 'none';
      invitacion.style.display = 'block';
  
      // Intentar reproducir música SOLO después del click
      if (musica) {
        musica.play().catch(error => {
          console.warn("No se pudo reproducir automáticamente la música:", error);
        });
      }
  
    }, 1000);
  }
  
  
  // 2. Contador regresivo hasta la fecha del evento
  function iniciarContador() {
    const fechaEvento = new Date('December 6, 2025 015:50:00').getTime();
    setInterval(() => {
      const ahora     = Date.now();
      const diff      = fechaEvento - ahora;
      const dias      = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas     = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos   = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const segundos  = Math.floor((diff % (1000 * 60)) / 1000);
  
      document.getElementById('dias').innerText    = dias;
      document.getElementById('horas').innerText   = horas;
      document.getElementById('minutos').innerText = minutos;
      document.getElementById('segundos').innerText= segundos;
    }, 1000);
  }
  
  // 3. Cargar datos del invitado actual según ?id= y autoabrir
  function cargarDatosInvitado() {
    const params = new URLSearchParams(window.location.search);
    const id     = params.get('id');
    if (!id) return;
  
    const invitado = window.guests?.find(g => g.id === id);
    if (invitado) {
      document.getElementById('nombreInvitado').innerText   = invitado.name;
      document.getElementById('cantidadPases').innerText    = `Pases: ${invitado.passes}`;
      document.getElementById('mesaAsignada').innerText     = `Tu mesa asignada es la ${invitado.mesa}`;
    } else {
      console.warn(`Invitado con id=${id} no encontrado`);
    }
  }

  
  // 4. Observer para efecto fade-in al hacer scroll
  function initFadeInObserver() {
    const elems = document.querySelectorAll('.fade-in-element');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    elems.forEach(el => observer.observe(el));
  }
  
  // (Opcionales) Puedes mantener funciones de lightbox, mapas y confirmación si las necesitas:
  
  function changePhoto(element) {
    const modal = document.getElementById('photo-modal');
    const img   = document.getElementById('main-photo-modal');
    if (img) img.src = element.src;
    if (modal) modal.style.display = 'flex';
  }
  function closeModal(event) {
    if (!event || event.target.id === 'photo-modal' || event.target.classList.contains('close')) {
      document.getElementById('photo-modal').style.display = 'none';
    }
  }
  
  function confirmarAsistencia() {
    const nombreElem = document.getElementById('nombreInvitado');
    const pasesElem  = document.getElementById('cantidadPases');
    const nombre = nombreElem?.innerText || '';
    const pases  = pasesElem?.innerText.replace('Pases: ', '') || '';
    const msg    = `Hola, soy ${nombre} y confirmo mi asistencia con ${pases} pases para la fiesta de quince años.`;
    window.open(`https://api.whatsapp.com/send?phone=50242141166&text=${encodeURIComponent(msg)}`, '_blank');
  }
  
  function elegirAplicacion() {
    window.open('https://maps.app.goo.gl/UARTNvgyZBgtxbVv8', '_blank');
  }
  
  function elegirAplicacionOtraDireccion() {
    window.open('https://maps.app.goo.gl/eGW8k9zmtJTK9Gmu9', '_blank');
  }
  
  
