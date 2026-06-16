'use strict';

// ── App definitions ──────────────────────────────────────────────────────────

const APPS = {
  messages: {
    label: 'Nachrichten', cls: 'messages-app',
    svg: '<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>',
    dialog: { title: 'Nachrichten', html: `
      <div class="msg-list">
        <div class="msg-item"><div class="msg-sender">Trainer Koch</div><div class="msg-preview">Bitte Aufstellung für Samstag bestätigen…</div></div>
        <div class="msg-item"><div class="msg-sender">Sportdirektor</div><div class="msg-preview">Interessantes Angebot für Hoffmann eingegangen</div></div>
        <div class="msg-item"><div class="msg-sender">Schiri-Assistent</div><div class="msg-preview">Spielbericht Runde 28 verfügbar</div></div>
      </div>` }
  },
  email: {
    label: 'E-Mail', cls: 'email-app',
    svg: '<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',
    dialog: { title: 'E-Mail', html: `
      <div class="msg-list">
        <div class="msg-item"><div class="msg-sender">DFB</div><div class="msg-preview">Lizenzierung Spielbetrieb 2026/27 – Unterlagen erforderlich</div></div>
        <div class="msg-item"><div class="msg-sender">Medien GmbH</div><div class="msg-preview">Angebot TV-Rechte Heimspiele</div></div>
      </div>` }
  },
  training: {
    label: 'Training', cls: 'training-app',
    svg: '<path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>',
    dialog: { title: 'Training', html: `
      <p><strong style="color:#fff">Heute: Taktiktraining</strong></p><br>
      <p>⏰ 10:00 Uhr · Trainingsgelände</p><br>
      <p>Schwerpunkt: Pressing &amp; schnelles Umschaltspiel</p><br>
      <p style="color:rgba(255,59,48,0.9)">⚠ Fischer und Bauer angeschlagen</p>` }
  },
  transfer: {
    label: 'Transfer', cls: 'transfer-app',
    svg: '<path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>',
    dialog: { title: 'Transfermarkt', html: `
      <div class="msg-list">
        <div class="msg-item"><div class="msg-sender">Marco Rossi – ST – 24 J.</div><div class="msg-preview">Marktwert: 2,8 Mio € · Ablöse: 3,5 Mio €</div></div>
        <div class="msg-item"><div class="msg-sender">Jan Novak – ZM – 22 J.</div><div class="msg-preview">Marktwert: 1,2 Mio € · Leihe möglich</div></div>
      </div>` }
  },
  sponsor: {
    label: 'Sponsoring', cls: 'sponsor-app',
    svg: '<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>',
    dialog: { title: 'Sponsoring', html: `
      <div class="msg-list">
        <div class="msg-item"><div class="msg-sender">AlphaSport AG</div><div class="msg-preview">Trikot-Sponsor · 450.000 €/Saison · Verlängerung offen</div></div>
        <div class="msg-item"><div class="msg-sender">RegioBank</div><div class="msg-preview">Bandenwerbung · 80.000 €/Saison · aktiv</div></div>
      </div>` }
  },
  live: {
    label: 'Live', cls: 'live-app',
    svg: '<path d="M8 5v14l11-7z"/>',
    dialog: { title: '🔴 Live Stream', html: `
      <p style="text-align:center;font-size:48px;margin:8px 0">📺</p>
      <p style="text-align:center;color:#fff;font-weight:600">FC Musterstadt vs. SV Gegner</p><br>
      <p style="text-align:center;color:rgba(255,59,48,1);font-weight:700;font-size:18px">● LIVE&nbsp;&nbsp;67'&nbsp;&nbsp;2 : 1</p><br>
      <p style="text-align:center;color:rgba(255,255,255,0.5)">Stream startet in der Vollversion</p>` }
  },
  kader: {
    label: 'Kader', cls: 'kader-app',
    svg: '<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>',
    dialog: { title: 'Kader', html: `
      <div class="msg-list">
        <div class="msg-item"><div class="msg-sender">M. Fischer &nbsp;·&nbsp; TW &nbsp;·&nbsp; 82</div><div class="msg-preview">Fit · Vertrag bis 2028</div></div>
        <div class="msg-item"><div class="msg-sender">R. Hoffmann · ST · 84</div><div class="msg-preview">Fit · Vertrag bis 2027</div></div>
        <div class="msg-item"><div class="msg-sender">T. Bauer &nbsp;·&nbsp; IV &nbsp;·&nbsp; 79</div><div class="msg-preview">Angeschlagen · 3 Tage</div></div>
      </div>` }
  },
  finance: {
    label: 'Finanzen', cls: 'finance-app',
    svg: '<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>',
    dialog: { title: 'Finanzen', html: `
      <p><strong style="color:#fff">Budget Saison 2026/27</strong></p><br>
      <p>💰 Transferbudget: <strong style="color:#34c759">4,2 Mio €</strong></p><br>
      <p>📊 Gehaltsetat: 780.000 €/Monat</p><br>
      <p>📈 Einnahmen: 2,1 Mio € (YTD)</p>` }
  },
};

// ── State ────────────────────────────────────────────────────────────────────

const COLS = 4;
const SLOTS = 12; // 4 × 3

let screenData = [
  ['messages', 'email', 'training', 'transfer', 'sponsor', 'live', 'kader', 'finance', null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null],
];
let dockData = [null, null, null, null];

// ── DOM refs ─────────────────────────────────────────────────────────────────

const screensWrapper = document.getElementById('screensWrapper');
const pageDots       = document.querySelectorAll('.dot');
const ghostEl        = document.getElementById('dragGhost');
const dialogOverlay  = document.getElementById('dialogOverlay');
const dialogHeader   = document.getElementById('dialogHeader');
const dialogBody     = document.getElementById('dialogBody');
const dockEl         = document.getElementById('dock');

// ── Render helpers ───────────────────────────────────────────────────────────

function iconHTML(appId) {
  const a = APPS[appId];
  return `<div class="app-icon-img ${a.cls}"><svg viewBox="0 0 24 24" fill="white">${a.svg}</svg></div>`
       + `<span class="app-label">${a.label}</span>`;
}

function renderScreens() {
  screenData.forEach((slots, si) => {
    const grid = document.getElementById(`grid-${si}`);
    grid.innerHTML = '';
    for (let i = 0; i < SLOTS; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.dataset.screen = si;
      cell.dataset.idx = i;
      const appId = slots[i];
      if (appId) {
        const icon = document.createElement('div');
        icon.className = 'app-icon';
        icon.dataset.appId = appId;
        icon.innerHTML = iconHTML(appId);
        bindIcon(icon, appId, 'grid', si, i);
        cell.appendChild(icon);
      }
      grid.appendChild(cell);
    }
  });
}

function renderDock() {
  dockEl.querySelectorAll('.dock-slot').forEach((slot, i) => {
    slot.innerHTML = '';
    const appId = dockData[i];
    if (appId) {
      slot.classList.remove('empty');
      const icon = document.createElement('div');
      icon.className = 'app-icon';
      icon.dataset.appId = appId;
      icon.innerHTML = iconHTML(appId);
      bindIcon(icon, appId, 'dock', null, i);
      slot.appendChild(icon);
    } else {
      slot.classList.add('empty');
    }
  });
}

function renderAll() {
  renderScreens();
  renderDock();
}

// ── Drag & Drop ──────────────────────────────────────────────────────────────

let drag = null;      // active drag source info
let holdTimer = null; // touch hold timer
let tapInfo = null;   // pending tap (cleared if drag starts)
let pStartX = 0, pStartY = 0;
let lastTarget = null;

function bindIcon(el, appId, type, screenIdx, slotIdx) {
  el.addEventListener('pointerdown', e => {
    e.stopPropagation();
    e.preventDefault();
    pStartX = e.clientX;
    pStartY = e.clientY;
    tapInfo = { appId, type, screenIdx, slotIdx, el };

    if (e.pointerType === 'touch') {
      holdTimer = setTimeout(() => {
        holdTimer = null;
        if (tapInfo) { startDrag(tapInfo, e); tapInfo = null; }
      }, 260);
    }
  }, { passive: false });
}

function startDrag(info, e) {
  drag = info;
  info.el.classList.add('dragging');
  const a = APPS[info.appId];
  ghostEl.innerHTML = `<div class="app-icon-img ${a.cls}"><svg viewBox="0 0 24 24" fill="white">${a.svg}</svg></div>`
                    + `<span class="app-label">${a.label}</span>`;
  ghostEl.classList.add('active');
  moveGhost(e.clientX, e.clientY);
}

function moveGhost(x, y) {
  ghostEl.style.transform = `translate(${x - 37}px, ${y - 52}px) scale(1.12)`;
}

function dropTargetAt(x, y) {
  ghostEl.style.visibility = 'hidden';
  const el = document.elementFromPoint(x, y);
  ghostEl.style.visibility = '';
  if (!el) return null;
  return el.closest('.grid-cell') || el.closest('.dock-slot');
}

function clearHighlight() {
  if (lastTarget) { lastTarget.classList.remove('drag-over'); lastTarget = null; }
}

function commitDrop(x, y) {
  const src = drag;
  drag = null;
  src.el.classList.remove('dragging');
  ghostEl.classList.remove('active');

  const target = dropTargetAt(x, y);
  clearHighlight();
  if (!target) return renderAll();

  const isDockSlot = target.classList.contains('dock-slot');
  const isGridCell = target.classList.contains('grid-cell');

  if (isDockSlot) {
    const ts = parseInt(target.dataset.slot);
    if (src.type === 'dock') {
      // Rearrange within dock
      [dockData[src.slotIdx], dockData[ts]] = [dockData[ts], dockData[src.slotIdx]];
    } else {
      // Grid → Dock: shortcut (app stays in grid too)
      dockData[ts] = src.appId;
    }
  } else if (isGridCell) {
    const tsi = parseInt(target.dataset.screen);
    const ti  = parseInt(target.dataset.idx);
    if (src.type === 'grid') {
      // Grid → Grid: swap
      if (src.screenIdx === tsi && src.slotIdx === ti) return renderAll();
      [screenData[src.screenIdx][src.slotIdx], screenData[tsi][ti]] =
      [screenData[tsi][ti], screenData[src.screenIdx][src.slotIdx]];
    } else {
      // Dock → Grid: move (remove from dock)
      const displaced = screenData[tsi][ti];
      screenData[tsi][ti] = src.appId;
      dockData[src.slotIdx] = displaced; // push displaced back to dock slot (or null)
    }
  }

  renderAll();
}

// Global pointer events
document.addEventListener('pointermove', e => {
  // Cancel touch hold if finger moved
  if (holdTimer) {
    if (Math.abs(e.clientX - pStartX) > 8 || Math.abs(e.clientY - pStartY) > 8) {
      clearTimeout(holdTimer); holdTimer = null; tapInfo = null;
    }
  }
  // Mouse: start drag on first significant move
  if (tapInfo && e.pointerType !== 'touch') {
    if (Math.abs(e.clientX - pStartX) > 5 || Math.abs(e.clientY - pStartY) > 5) {
      const info = tapInfo; tapInfo = null;
      startDrag(info, e);
    }
  }
  if (!drag) return;

  moveGhost(e.clientX, e.clientY);

  const target = dropTargetAt(e.clientX, e.clientY);
  clearHighlight();
  if (target) { target.classList.add('drag-over'); lastTarget = target; }
}, { passive: true });

document.addEventListener('pointerup', e => {
  if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
  if (tapInfo) {
    openDialog(tapInfo.appId);
    tapInfo = null;
    return;
  }
  if (drag) commitDrop(e.clientX, e.clientY);
});

document.addEventListener('pointercancel', () => {
  if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
  tapInfo = null;
  if (drag) { drag.el.classList.remove('dragging'); drag = null; }
  ghostEl.classList.remove('active');
  clearHighlight();
});

// ── Dialog ───────────────────────────────────────────────────────────────────

function openDialog(appId) {
  const app = APPS[appId];
  if (!app?.dialog) return;
  dialogHeader.textContent = app.dialog.title;
  dialogBody.innerHTML = app.dialog.html;
  dialogOverlay.classList.add('open');
}

function closeDialog() { dialogOverlay.classList.remove('open'); }

dialogOverlay.addEventListener('click', e => { if (e.target === dialogOverlay) closeDialog(); });
document.getElementById('dialogClose').addEventListener('click', closeDialog);

// ── Screen swipe ─────────────────────────────────────────────────────────────

let currentScreen = 0;
const totalScreens = screenData.length;

function goTo(idx) {
  currentScreen = Math.max(0, Math.min(totalScreens - 1, idx));
  screensWrapper.style.transform = `translateX(-${currentScreen * 100}%)`;
  pageDots.forEach((d, i) => d.classList.toggle('active', i === currentScreen));
}

let swipeX = 0, swipeY = 0, swiping = false, swipeCommitted = false;

screensWrapper.addEventListener('pointerdown', e => {
  if (e.target.closest('.app-icon')) return;
  swipeX = e.clientX; swipeY = e.clientY;
  swiping = true; swipeCommitted = false;
  screensWrapper.style.transition = 'none';
}, { passive: true });

screensWrapper.addEventListener('pointermove', e => {
  if (!swiping || drag) return;
  const dx = e.clientX - swipeX, dy = e.clientY - swipeY;
  if (!swipeCommitted) {
    if (Math.abs(dx) < Math.abs(dy)) { swiping = false; return; }
    swipeCommitted = true;
  }
  screensWrapper.style.transform =
    `translateX(calc(-${currentScreen * 100}% + ${dx}px))`;
}, { passive: true });

screensWrapper.addEventListener('pointerup', e => {
  if (!swiping) return;
  swiping = false;
  screensWrapper.style.transition = '';
  if (!swipeCommitted) return;
  const dx = e.clientX - swipeX;
  if (dx < -50) goTo(currentScreen + 1);
  else if (dx > 50) goTo(currentScreen - 1);
  else goTo(currentScreen);
}, { passive: true });

// ── Clock ────────────────────────────────────────────────────────────────────

function updateClock() {
  const n = new Date();
  document.getElementById('clock').textContent =
    String(n.getHours()).padStart(2,'0') + ':' + String(n.getMinutes()).padStart(2,'0');
}
updateClock();
setInterval(updateClock, 10_000);

// ── Keyboard ─────────────────────────────────────────────────────────────────

window.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') goTo(currentScreen + 1);
  if (e.key === 'ArrowLeft')  goTo(currentScreen - 1);
  if (e.key === 'Escape')     closeDialog();
});

// ── Init ─────────────────────────────────────────────────────────────────────

renderAll();
goTo(0);
