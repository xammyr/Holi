/**
 * Dedicatoria Romántica con Tulipanes Morados y Azules
 * Movimiento de brisa suave y diseño optimizado para celulares
 */

document.addEventListener('DOMContentLoaded', () => {
  initStars();
  initTulipsField();
  initParticles();
  initMusicPlayer();
  initTouchHearts();
  initLoveLetterModal();
});

/* ========================================================
   1. ESTRELLAS PARPADEANTES EN EL CIELO
   ======================================================== */
function initStars() {
  const container = document.getElementById('stars-container');
  if (!container) return;

  const starCount = window.innerWidth < 600 ? 55 : 90;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size = (Math.random() * 2.2 + 0.8).toFixed(1);
    const top = Math.random() * 65; // Parte superior del cielo
    const left = Math.random() * 100;
    const duration = (Math.random() * 3.5 + 2).toFixed(1);
    const delay = (Math.random() * 5).toFixed(1);

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
    star.style.setProperty('--duration', `${duration}s`);
    star.style.setProperty('--delay', `${delay}s`);

    fragment.appendChild(star);
  }

  container.appendChild(fragment);
}

/* ========================================================
   2. CAMPO DE TULIPANES (MORADOS, AZULES Y SUS TONALIDADES)
   ======================================================== */
function initTulipsField() {
  const field = document.getElementById('tulips-field');
  if (!field) return;

  // Paletas botánicas en tonos morados, azules y sus mezclas mágicas
  const colorPalettes = [
    // 0: Morado Imperial y Amatista
    {
      petalBack: ['#240046', '#5a189a', '#9d4edd'],
      petalLeft: ['#3c096c', '#7b2cbf', '#c77dff'],
      petalRight: ['#240046', '#5a189a', '#a855f7'],
      petalCenter: ['#5a189a', '#9d4edd', '#e0aaff'],
      stem: ['#123820', '#1c5230', '#2a7c46'],
      leaf: ['#144024', '#1f6338'],
      glow: 'rgba(168, 85, 247, 0.45)'
    },
    // 1: Azul Zafiro Profundo Celestial
    {
      petalBack: ['#03071e', '#03045e', '#0077b6'],
      petalLeft: ['#03045e', '#023e8a', '#0096c7'],
      petalRight: ['#021a40', '#0077b6', '#48cae4'],
      petalCenter: ['#023e8a', '#0077b6', '#90e0ef'],
      stem: ['#0e3020', '#184b2e', '#236e42'],
      leaf: ['#103a24', '#1a5934'],
      glow: 'rgba(59, 130, 246, 0.45)'
    },
    // 2: Índigo y Púrpura Nocturno
    {
      petalBack: ['#1e1b4b', '#3730a3', '#6366f1'],
      petalLeft: ['#312e81', '#4f46e5', '#818cf8'],
      petalRight: ['#1e1b4b', '#4338ca', '#a5b4fc'],
      petalCenter: ['#3730a3', '#6366f1', '#c7d2fe'],
      stem: ['#143a22', '#1e5a35', '#2b824b'],
      leaf: ['#144026', '#21663b'],
      glow: 'rgba(99, 102, 241, 0.45)'
    },
    // 3: Azul Celeste Cristal y Cyan
    {
      petalBack: ['#082f49', '#0284c7', '#38bdf8'],
      petalLeft: ['#0c4a6e', '#0369a1', '#7dd3fc'],
      petalRight: ['#075985', '#0284c7', '#bae6fd'],
      petalCenter: ['#0284c7', '#38bdf8', '#e0f2fe'],
      stem: ['#103522', '#194f33', '#257449'],
      leaf: ['#123e27', '#1d5e39'],
      glow: 'rgba(56, 189, 248, 0.45)'
    },
    // 4: Violeta Mágico Bicolor (Morado con reflejos azules)
    {
      petalBack: ['#1a0b36', '#4c1d95', '#3b82f6'],
      petalLeft: ['#3b0764', '#6366f1', '#a855f7'],
      petalRight: ['#1e1b4b', '#4338ca', '#93c5fd'],
      petalCenter: ['#4c1d95', '#7c3aed', '#c084fc'],
      stem: ['#133a22', '#1d5733', '#2a804a'],
      leaf: ['#154228', '#22693d'],
      glow: 'rgba(147, 51, 234, 0.45)'
    },
    // 5: Morado Magenta Terciopelo
    {
      petalBack: ['#3b0764', '#701a75', '#c026d3'],
      petalLeft: ['#4a044e', '#86198f', '#e879f9'],
      petalRight: ['#2e0854', '#701a75', '#d946ef'],
      petalCenter: ['#701a75', '#a21caf', '#f0abfc'],
      stem: ['#113621', '#1b5230', '#277846'],
      leaf: ['#133d25', '#1e6139'],
      glow: 'rgba(217, 70, 239, 0.45)'
    }
  ];

  // Configuración de los tulipanes en 3 capas de profundidad
  // layer: 1 (fondo - atmósfera), 2 (medio), 3 (primer plano - principales y detallados)
  const tulipsConfig = [
    // Capa de fondo (más pequeños y oscuros para generar profundidad)
    { left: 2,  heightPct: 69, palette: 0, swayDur: 6.8, swayDelay: -1.2, layer: 1, angleL: -2.8, angleR: 3.2 },
    { left: 16, heightPct: 72, palette: 1, swayDur: 6.2, swayDelay: -3.8, layer: 1, angleL: -2.4, angleR: 3.8 },
    { left: 32, heightPct: 70, palette: 2, swayDur: 7.1, swayDelay: -2.1, layer: 1, angleL: -3.0, angleR: 3.0 },
    { left: 52, heightPct: 68, palette: 4, swayDur: 6.5, swayDelay: -4.5, layer: 1, angleL: -2.6, angleR: 3.5 },
    { left: 72, heightPct: 73, palette: 1, swayDur: 6.9, swayDelay: -0.8, layer: 1, angleL: -3.2, angleR: 2.8 },
    { left: 88, heightPct: 70, palette: 0, swayDur: 6.4, swayDelay: -2.7, layer: 1, angleL: -2.5, angleR: 3.9 },

    // Capa media
    { left: 9,  heightPct: 81, palette: 2, swayDur: 5.6, swayDelay: -2.4, layer: 2, angleL: -3.6, angleR: 4.2 },
    { left: 24, heightPct: 84, palette: 4, swayDur: 5.3, swayDelay: -1.1, layer: 2, angleL: -3.2, angleR: 4.6 },
    { left: 42, heightPct: 82, palette: 0, swayDur: 5.8, swayDelay: -3.2, layer: 2, angleL: -3.8, angleR: 3.5 },
    { left: 63, heightPct: 85, palette: 3, swayDur: 5.2, swayDelay: -0.4, layer: 2, angleL: -3.5, angleR: 4.4 },
    { left: 80, heightPct: 83, palette: 5, swayDur: 5.5, swayDelay: -4.0, layer: 2, angleL: -4.0, angleR: 3.3 },
    { left: 94, heightPct: 79, palette: 1, swayDur: 5.7, swayDelay: -1.9, layer: 2, angleL: -3.0, angleR: 3.8 },

    // Capa frontal (Tulipanes estelares, grandes, definidos y luminosos)
    { left: -2, heightPct: 91, palette: 1, swayDur: 4.7, swayDelay: -3.1, layer: 3, angleL: -4.2, angleR: 4.8 },
    { left: 18, heightPct: 94, palette: 0, swayDur: 4.9, swayDelay: -1.8, layer: 3, angleL: -3.8, angleR: 5.2 },
    { left: 35, heightPct: 92, palette: 3, swayDur: 4.5, swayDelay: -0.6, layer: 3, angleL: -4.5, angleR: 4.2 },
    { left: 53, heightPct: 95, palette: 4, swayDur: 4.8, swayDelay: -2.9, layer: 3, angleL: -3.6, angleR: 5.0 },
    { left: 70, heightPct: 93, palette: 2, swayDur: 4.6, swayDelay: -1.3, layer: 3, angleL: -4.2, angleR: 4.5 },
    { left: 85, heightPct: 91, palette: 5, swayDur: 5.0, swayDelay: -3.5, layer: 3, angleL: -4.6, angleR: 4.0 }
  ];

  const fragment = document.createDocumentFragment();

  tulipsConfig.forEach((cfg, idx) => {
    const pal = colorPalettes[cfg.palette];
    const tulipEl = createTulipSVG(cfg, pal, idx);
    fragment.appendChild(tulipEl);
  });

  field.appendChild(fragment);
}

/**
 * Crea cada elemento SVG de tulipán con gradientes personalizados y proporciones botánicas
 */
function createTulipSVG(cfg, pal, idx) {
  const container = document.createElement('div');
  container.className = 'tulip-item tulip-sway';

  // Posicionamiento horizontal y en capas
  container.style.left = `${cfg.left}%`;
  container.style.zIndex = cfg.layer * 2;

  // Tamaño proporcional responsivo: la altura es un porcentaje de .tulips-field
  // y el ancho se deriva de la proporción 100/360
  container.style.height = `${cfg.heightPct}%`;
  container.style.aspectRatio = '100 / 360';

  // Variables CSS dinámicas para viento suave
  container.style.setProperty('--sway-duration', `${cfg.swayDur}s`);
  container.style.setProperty('--sway-delay', `${cfg.swayDelay}s`);
  container.style.setProperty('--angle-left', `${cfg.angleL}deg`);
  container.style.setProperty('--angle-right', `${cfg.angleR}deg`);
  container.style.setProperty('--glow-color', pal.glow);

  // Filtros atmosféricos de profundidad
  if (cfg.layer === 1) {
    container.style.filter = 'brightness(0.72) blur(0.6px)';
    container.style.opacity = '0.85';
  } else if (cfg.layer === 2) {
    container.style.filter = 'brightness(0.88)';
  }

  const gradPrefix = `t-${idx}-`;

  container.innerHTML = `
    <svg viewBox="0 0 100 360" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Gradientes para Pétalos -->
        <linearGradient id="${gradPrefix}p-back" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${pal.petalBack[2]}" />
          <stop offset="55%" stop-color="${pal.petalBack[1]}" />
          <stop offset="100%" stop-color="${pal.petalBack[0]}" />
        </linearGradient>

        <linearGradient id="${gradPrefix}p-left" x1="0%" y1="15%" x2="100%" y2="85%">
          <stop offset="0%" stop-color="${pal.petalLeft[2]}" />
          <stop offset="50%" stop-color="${pal.petalLeft[1]}" />
          <stop offset="100%" stop-color="${pal.petalLeft[0]}" />
        </linearGradient>

        <linearGradient id="${gradPrefix}p-right" x1="100%" y1="15%" x2="0%" y2="85%">
          <stop offset="0%" stop-color="${pal.petalRight[2]}" />
          <stop offset="50%" stop-color="${pal.petalRight[1]}" />
          <stop offset="100%" stop-color="${pal.petalRight[0]}" />
        </linearGradient>

        <linearGradient id="${gradPrefix}p-center" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stop-color="${pal.petalCenter[2]}" />
          <stop offset="42%" stop-color="${pal.petalCenter[1]}" />
          <stop offset="100%" stop-color="${pal.petalCenter[0]}" />
        </linearGradient>

        <!-- Gradientes para Tallo y Hojas -->
        <linearGradient id="${gradPrefix}stem" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${pal.stem[0]}" />
          <stop offset="50%" stop-color="${pal.stem[2]}" />
          <stop offset="100%" stop-color="${pal.stem[1]}" />
        </linearGradient>

        <linearGradient id="${gradPrefix}leaf-l" x1="0%" y1="40%" x2="100%" y2="60%">
          <stop offset="0%" stop-color="${pal.leaf[0]}" />
          <stop offset="100%" stop-color="${pal.leaf[1]}" />
        </linearGradient>

        <linearGradient id="${gradPrefix}leaf-r" x1="100%" y1="40%" x2="0%" y2="60%">
          <stop offset="0%" stop-color="${pal.leaf[0]}" />
          <stop offset="100%" stop-color="${pal.leaf[1]}" />
        </linearGradient>
      </defs>

      <!-- Tallo botánico curvado con suavidad -->
      <path d="M 50 360 C 49 265 48 165 50 88" 
            stroke="url(#${gradPrefix}stem)" 
            stroke-width="5.5" 
            stroke-linecap="round" />

      <!-- Hoja Izquierda amplia de tulipán -->
      <path class="leaf-left" 
            d="M 48 330 C 26 270 5 215 10 150 C 14 130 25 160 34 200 C 42 240 46 290 48 330 Z" 
            fill="url(#${gradPrefix}leaf-l)" 
            opacity="0.95" />

      <!-- Hoja Derecha con curvatura orgánica hacia la brisa -->
      <path class="leaf-right" 
            d="M 52 300 C 74 240 95 195 90 135 C 86 115 75 145 66 185 C 58 225 54 270 52 300 Z" 
            fill="url(#${gradPrefix}leaf-r)" 
            opacity="0.95" />

      <!-- Cáliz y flor del tulipán con balanceo secundario -->
      <g class="tulip-head-group petal-glow">
        <!-- Pétalo Central Posterior -->
        <path d="M 50 86 C 28 62 34 16 50 8 C 66 16 72 62 50 86 Z" 
              fill="url(#${gradPrefix}p-back)" />

        <!-- Pétalo Izquierdo Exterior -->
        <path d="M 50 90 C 30 88 15 65 15 42 C 15 22 28 16 40 26 C 32 44 38 68 50 90 Z" 
              fill="url(#${gradPrefix}p-left)" />

        <!-- Pétalo Derecho Exterior -->
        <path d="M 50 90 C 70 88 85 65 85 42 C 85 22 72 16 60 26 C 68 44 62 68 50 90 Z" 
              fill="url(#${gradPrefix}p-right)" />

        <!-- Pétalo Frontal Principal en copa de tulipán -->
        <path d="M 50 92 C 34 84 26 56 34 26 C 40 14 60 14 66 26 C 74 56 66 84 50 92 Z" 
              fill="url(#${gradPrefix}p-center)" />

        <!-- Brillo sedoso satinado en el centro del pétalo -->
        <path d="M 49 84 C 47 62 46 40 49 20" 
              stroke="rgba(255, 255, 255, 0.32)" 
              stroke-width="1.8" 
              stroke-linecap="round" />
      </g>
    </svg>
  `;

  return container;
}

/* ========================================================
   3. PARTÍCULAS FLOTANTES DE POLEN Y LUZ (CANVAS)
   ======================================================== */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleColors = [
    'rgba(192, 132, 252, ', // Lavanda
    'rgba(147, 197, 253, ', // Azul cielo
    'rgba(216, 180, 254, ', // Lila
    'rgba(253, 230, 138, ', // Oro tenue
    'rgba(165, 180, 252, '  // Índigo
  ];

  const maxParticles = width < 600 ? 32 : 55;
  const particles = [];

  for (let i = 0; i < maxParticles; i++) {
    particles.push(createParticle(true));
  }

  function createParticle(randomY = false) {
    return {
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + 10 + Math.random() * 20,
      radius: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.45 + 0.25,
      speedX: Math.random() * 0.35 - 0.05, // Deriva sutil empujada por la brisa
      colorBase: particleColors[Math.floor(Math.random() * particleColors.length)],
      alpha: Math.random() * 0.6 + 0.25,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      angle: Math.random() * Math.PI * 2
    };
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.y -= p.speedY;
      p.x += Math.sin(p.angle) * 0.45 + p.speedX;
      p.angle += p.pulseSpeed;

      const currentAlpha = p.alpha * (0.8 + Math.sin(p.angle) * 0.2);

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${p.colorBase}${currentAlpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `${p.colorBase}0.8)`;
      ctx.fill();

      if (p.y < -20 || p.x > width + 20 || p.x < -20) {
        particles[i] = createParticle(false);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ========================================================
   4. MÚSICA DE FONDO (The Marías - Cariño)
   ======================================================== */
function initMusicPlayer() {
  const musicBtn = document.getElementById('music-btn');
  const musicIcon = document.getElementById('music-icon');
  const musicText = document.getElementById('music-text');
  const tapHint = document.getElementById('tap-hint');
  const audio = document.getElementById('bg-music');

  if (!audio) return;

  const TARGET_VOLUME = 0.8;
  audio.volume = TARGET_VOLUME;

  let isPlaying = false;
  let hasInteracted = false;

  function updateUI(playing) {
    isPlaying = playing;
    if (musicBtn) {
      if (playing) {
        musicBtn.classList.add('playing');
        if (musicIcon) musicIcon.textContent = '💜';
        if (musicText) musicText.textContent = 'Cariño ♫';
      } else {
        musicBtn.classList.remove('playing');
        if (musicIcon) musicIcon.textContent = '🎵';
        if (musicText) musicText.textContent = 'Música';
      }
    }
  }

  function startPlaybackWithFade() {
    audio.volume = 0;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          updateUI(true);
          // Fade-in suave de entrada de audio
          let currentVol = 0;
          const fadeInterval = setInterval(() => {
            currentVol += 0.05;
            if (currentVol >= TARGET_VOLUME) {
              audio.volume = TARGET_VOLUME;
              clearInterval(fadeInterval);
            } else {
              audio.volume = currentVol;
            }
          }, 80);

          if (tapHint) {
            tapHint.style.opacity = '0';
            setTimeout(() => { if (tapHint) tapHint.remove(); }, 1000);
          }
        })
        .catch((error) => {
          updateUI(false);
          console.log("Autoplay esperando interacción del usuario:", error);
        });
    }
  }

  function pausePlayback() {
    audio.pause();
    updateUI(false);
  }

  // Intento de reproducción automática directa al cargar la página
  startPlaybackWithFade();

  // Desbloqueo en el primer toque o clic en cualquier parte de la pantalla (Requerimiento de iOS/Android)
  function handleFirstUserInteraction() {
    if (hasInteracted) return;
    hasInteracted = true;

    if (audio.paused) {
      startPlaybackWithFade();
    }

    window.removeEventListener('click', handleFirstUserInteraction);
    window.removeEventListener('touchstart', handleFirstUserInteraction);
  }

  window.addEventListener('click', handleFirstUserInteraction, { passive: true });
  window.addEventListener('touchstart', handleFirstUserInteraction, { passive: true });

  // Control manual mediante el botón superior
  if (musicBtn) {
    musicBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hasInteracted = true;
      if (audio.paused) {
        startPlaybackWithFade();
      } else {
        pausePlayback();
      }
    });
  }

  audio.addEventListener('play', () => updateUI(true));
  audio.addEventListener('pause', () => updateUI(false));
}

/* ========================================================
   5. INTERACCIÓN: CORAZONES FLOTANTES AL TOCAR LA PANTALLA
   ======================================================== */
function initTouchHearts() {
  const heartIcons = ['💜', '💙', '✨', '💐', '💕', '🌷'];
  const tapHint = document.getElementById('tap-hint');

  function spawnHeart(x, y) {
    if (tapHint) {
      tapHint.style.opacity = '0';
      setTimeout(() => tapHint.remove(), 1000);
    }

    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];

    const dx = (Math.random() * 70 - 35).toFixed(0);
    const rot = (Math.random() * 40 - 20).toFixed(0);

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.setProperty('--dx', `${dx}px`);
    heart.style.setProperty('--rot', `${rot}deg`);

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2500);
  }

  window.addEventListener('click', (e) => {
    if (e.target.closest('#music-btn') || e.target.closest('#love-letter-modal') || e.target.closest('#open-letter-btn')) return;
    spawnHeart(e.clientX, e.clientY);
  });

  window.addEventListener('touchstart', (e) => {
    if (e.target.closest('#music-btn') || e.target.closest('#love-letter-modal') || e.target.closest('#open-letter-btn')) return;
    for (let i = 0; i < e.touches.length; i++) {
      spawnHeart(e.touches[i].clientX, e.touches[i].clientY);
    }
  }, { passive: true });
}

/* ========================================================
   6. CARTA DE AMOR (MODAL ACCESIBLE Y MODERNO)
   ======================================================== */
function initLoveLetterModal() {
  const modal = document.getElementById('love-letter-modal');
  const openBtn = document.getElementById('open-letter-btn');
  const closeBtn = document.getElementById('close-modal-btn');

  if (!modal || !openBtn) return;

  openBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.showModal();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.close();
    });
  }

  // Soporte de descarte al hacer clic fuera del diálogo (light dismiss fallback)
  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;

    if (isOutside) {
      modal.close();
    }
  });
}
