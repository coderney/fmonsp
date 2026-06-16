// Clock
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = `${h}:${m}`;
}
updateClock();
setInterval(updateClock, 10000);

// App content definitions
const apps = {
  messages: {
    title: 'Nachrichten',
    html: `<div class="msg-list">
      <div class="msg-item"><div class="msg-sender">Trainer Koch</div><div class="msg-preview">Bitte Aufstellung für Samstag bestätigen...</div></div>
      <div class="msg-item"><div class="msg-sender">Sportdirektor</div><div class="msg-preview">Interessantes Angebot für Hoffmann eingegangen</div></div>
      <div class="msg-item"><div class="msg-sender">Schiri-Assistent</div><div class="msg-preview">Spielbericht Runde 28 verfügbar</div></div>
    </div>`
  },
  email: {
    title: 'E-Mail',
    html: `<div class="msg-list">
      <div class="msg-item"><div class="msg-sender">DFB</div><div class="msg-preview">Lizenzierung Spielbetrieb 2026/27 – Unterlagen erforderlich</div></div>
      <div class="msg-item"><div class="msg-sender">Medien GmbH</div><div class="msg-preview">Angebot TV-Rechte Heimspiele</div></div>
    </div>`
  },
  training: {
    title: 'Training',
    html: `<p><strong style="color:#fff">Heute: Taktiktraining</strong></p><br>
    <p>⏰ 10:00 Uhr – Trainingsgelände</p><br>
    <p>Schwerpunkt: Pressing & schnelles Umschaltspiel</p><br>
    <p style="color:rgba(255,59,48,0.9)">⚠ Fischer und Bauer angeschlagen</p>`
  },
  transfer: {
    title: 'Transfermarkt',
    html: `<div class="msg-list">
      <div class="msg-item"><div class="msg-sender">Marco Rossi – ST – 24J.</div><div class="msg-preview">Marktwert: 2,8 Mio € · Ablöse: 3,5 Mio €</div></div>
      <div class="msg-item"><div class="msg-sender">Jan Novak – ZM – 22J.</div><div class="msg-preview">Marktwert: 1,2 Mio € · Leihe möglich</div></div>
    </div>`
  },
  sponsor: {
    title: 'Sponsoring',
    html: `<div class="msg-list">
      <div class="msg-item"><div class="msg-sender">AlphaSport AG</div><div class="msg-preview">Trikot-Sponsor · 450.000 €/Saison · Verlängerung offen</div></div>
      <div class="msg-item"><div class="msg-sender">RegioBank</div><div class="msg-preview">Bandenwerbung · 80.000 €/Saison · aktiv</div></div>
    </div>`
  },
  live: {
    title: '🔴 Live Stream',
    html: `<p style="text-align:center;font-size:48px;margin-bottom:12px">📺</p>
    <p style="text-align:center;color:#fff;font-weight:600">FC Musterstadt vs. SV Gegner</p><br>
    <p style="text-align:center;color:rgba(255,59,48,1);font-weight:700;font-size:18px">● LIVE  67'  2 : 1</p><br>
    <p style="text-align:center;color:rgba(255,255,255,0.5)">Stream startet in der Vollversion</p>`
  }
};

function openApp(name) {
  const app = apps[name];
  if (!app) return;
  document.getElementById('dialogHeader').textContent = app.title;
  document.getElementById('dialogBody').innerHTML = app.html;
  document.getElementById('dialogOverlay').classList.add('open');
}

function closeDialog() {
  document.getElementById('dialogOverlay').classList.remove('open');
}

// App icon click listeners
document.querySelectorAll('.app-icon').forEach(icon => {
  icon.addEventListener('click', () => openApp(icon.dataset.app));
});

// Swipe / screen navigation
const wrapper = document.getElementById('screensWrapper');
const dots = document.querySelectorAll('.dot');
const totalScreens = document.querySelectorAll('.screen').length;
let currentScreen = 0;

function goTo(index) {
  currentScreen = Math.max(0, Math.min(totalScreens - 1, index));
  wrapper.style.transform = `translateX(-${currentScreen * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === currentScreen));
}

// Touch swipe
let touchStartX = 0;
let touchStartY = 0;
let isDragging = false;

wrapper.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  isDragging = false;
  wrapper.style.transition = 'none';
}, { passive: true });

wrapper.addEventListener('touchmove', e => {
  const dx = e.touches[0].clientX - touchStartX;
  const dy = e.touches[0].clientY - touchStartY;
  if (!isDragging && Math.abs(dx) < Math.abs(dy)) return;
  isDragging = true;
  const offset = currentScreen * 100;
  const pct = (dx / wrapper.offsetWidth) * 100;
  wrapper.style.transform = `translateX(calc(-${offset}% + ${dx}px))`;
}, { passive: true });

wrapper.addEventListener('touchend', e => {
  wrapper.style.transition = '';
  if (!isDragging) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (dx < -50) goTo(currentScreen + 1);
  else if (dx > 50) goTo(currentScreen - 1);
  else goTo(currentScreen);
  isDragging = false;
}, { passive: true });

// Mouse drag (desktop)
let mouseStartX = 0;
let mouseDown = false;

wrapper.addEventListener('mousedown', e => {
  mouseStartX = e.clientX;
  mouseDown = true;
  wrapper.style.transition = 'none';
  wrapper.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', e => {
  if (!mouseDown) return;
  const dx = e.clientX - mouseStartX;
  const offset = currentScreen * 100;
  wrapper.style.transform = `translateX(calc(-${offset}% + ${dx}px))`;
});

window.addEventListener('mouseup', e => {
  if (!mouseDown) return;
  mouseDown = false;
  wrapper.style.transition = '';
  wrapper.style.cursor = '';
  const dx = e.clientX - mouseStartX;
  if (dx < -50) goTo(currentScreen + 1);
  else if (dx > 50) goTo(currentScreen - 1);
  else goTo(currentScreen);
});

// Keyboard arrows
window.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') goTo(currentScreen + 1);
  if (e.key === 'ArrowLeft')  goTo(currentScreen - 1);
  if (e.key === 'Escape') closeDialog();
});

goTo(0);
