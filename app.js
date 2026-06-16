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
  stadium: {
    label: 'Stadion', cls: 'stadium-app',
    svg: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/><path d="M4 10h2v4H4zm14 0h2v4h-2z"/>',
    dialog: { title: 'Stadionmanagement', html: `
      <div class="msg-list">
        <div class="msg-item"><div class="msg-sender">Muster-Arena · 28.500 Plätze</div><div class="msg-preview">Auslastung letzte Heimspiele: 94 %</div></div>
        <div class="msg-item"><div class="msg-sender">🔧 Renovierung Nordkurve</div><div class="msg-preview">Kosten: 1,2 Mio € · Fertig: Aug. 2026</div></div>
        <div class="msg-item"><div class="msg-sender">📋 Nächstes Heimspiel</div><div class="msg-preview">Sa. 20.06. · Tickets: 18.200 / 28.500 verkauft</div></div>
      </div>` }
  },
  schedule: {
    label: 'Spielplan', cls: 'schedule-app',
    svg: '<path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>',
    dialog: { title: 'Spielplan & Tabelle', html: `
      <p style="color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:10px">BUNDESLIGA · SPIELTAG 32</p>
      <div class="msg-list">
        <div class="msg-item"><div class="msg-sender">Sa. 20.06. · 15:30 · Heimspiel</div><div class="msg-preview">FC Musterstadt vs. SV Gegner</div></div>
        <div class="msg-item"><div class="msg-sender">Sa. 27.06. · 18:30 · Auswärts</div><div class="msg-preview">FC Rivale vs. FC Musterstadt</div></div>
      </div>
      <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:14px 0 8px">TABELLE · PLATZ 4</p>
      <div class="msg-list">
        <div class="msg-item"><div class="msg-sender">1. FC Führend &nbsp;&nbsp;&nbsp;&nbsp; 31 Sp. · 68 Pkt.</div><div class="msg-preview"></div></div>
        <div class="msg-item"><div class="msg-sender">4. FC Musterstadt · 31 Sp. · 54 Pkt.</div><div class="msg-preview"></div></div>
      </div>` }
  },
  press: {
    label: 'Presse', cls: 'press-app',
    svg: '<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6 16H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V6h2v2zm11 8H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V6h10v2z"/>',
    dialog: { title: 'Presse', html: `
      <div class="msg-list">
        <div class="msg-item"><div class="msg-sender">📰 Pressekonferenz – Do. 18.06.</div><div class="msg-preview">Fragen zur Aufstellung & Formkrise vorbereiten</div></div>
        <div class="msg-item"><div class="msg-sender">Kicker Online</div><div class="msg-preview">„Musterstadt zeigt starke Reaktion nach Derby"</div></div>
        <div class="msg-item"><div class="msg-sender">Sport1</div><div class="msg-preview">Interviewanfrage Hoffmann – bis Fr. bestätigen</div></div>
      </div>` }
  },
  calendar: {
    label: 'Kalender', cls: 'calendar-app',
    svg: '<path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>',
    dialog: { title: 'Kalender', html: `
      <p style="color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:10px">JUNI 2026</p>
      <div class="msg-list">
        <div class="msg-item"><div class="msg-sender">Mo. 16.06. · Heute</div><div class="msg-preview">10:00 Taktiktraining · 14:00 Arzttermin Fischer</div></div>
        <div class="msg-item"><div class="msg-sender">Di. 17.06.</div><div class="msg-preview">09:30 Videoanalyse · 11:00 Einzelgespräch Hoffmann</div></div>
        <div class="msg-item"><div class="msg-sender">Do. 18.06.</div><div class="msg-preview">16:00 Pressekonferenz</div></div>
        <div class="msg-item"><div class="msg-sender">Sa. 20.06.</div><div class="msg-preview">15:30 Heimspiel vs. SV Gegner</div></div>
      </div>` }
  },
  camp: {
    label: 'Trainingslager', cls: 'camp-app',
    svg: '<path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L9 8.3c-1 .4-1.7 1.3-1.7 2.3 0 0 0 6.4.2 6.4H9.5L9.8 8.9z"/><path d="M3 6h7V4H3v2zm0 3h5V7H3v2zm0 3h4v-2H3v2z"/>',
    dialog: { title: 'Trainingslager', html: `
      <div class="msg-list">
        <div class="msg-item"><div class="msg-sender">🏔 Sommer-Lager · Davos</div><div class="msg-preview">15.07. – 22.07.2026 · 24 Spieler · Kosten: 85.000 €</div></div>
        <div class="msg-item"><div class="msg-sender">Testspiel 1 · 18.07.</div><div class="msg-preview">vs. FC Tessin · 16:00 Uhr</div></div>
        <div class="msg-item"><div class="msg-sender">Testspiel 2 · 20.07.</div><div class="msg-preview">vs. SC Alpin · 15:00 Uhr</div></div>
        <div class="msg-item"><div class="msg-sender">📋 Planung bestätigen</div><div class="msg-preview">Anmeldefrist Hotel: bis 25.06.2026</div></div>
      </div>` }
  },
};

// ── State ────────────────────────────────────────────────────────────────────

const COLS = 4;
const SLOTS = 12; // 4 × 3

let screenData = [
  ['messages', 'email', 'live', 'schedule', 'training', 'transfer', 'kader', 'sponsor', 'finance', 'press', 'calendar', 'stadium'],
  ['camp', null, null, null, null, null, null, null, null, null, null, null],
];
let dockData = [null, null, null, null];

// ── Standalone / PWA detection (iOS: navigator.standalone) ──────────────────

if (window.navigator.standalone === true ||
    window.matchMedia('(display-mode: standalone)').matches) {
  document.body.classList.add('pwa-standalone');
}

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

// Global pointer events — drag only (swipe is handled on screensWrapper via capture)
document.addEventListener('pointermove', e => {
  // Cancel touch hold if finger moved too far
  if (holdTimer) {
    if (Math.abs(e.clientX - pStartX) > 8 || Math.abs(e.clientY - pStartY) > 8) {
      clearTimeout(holdTimer); holdTimer = null; tapInfo = null;
    }
  }
  // Mouse: start drag on significant move
  if (tapInfo && e.pointerType !== 'touch') {
    if (Math.abs(e.clientX - pStartX) > 5 || Math.abs(e.clientY - pStartY) > 5) {
      const info = tapInfo; tapInfo = null;
      startDrag(info, e);
    }
  }
  // Drag ghost + drop highlight
  if (!drag) return;
  moveGhost(e.clientX, e.clientY);
  const target = dropTargetAt(e.clientX, e.clientY);
  clearHighlight();
  if (target) { target.classList.add('drag-over'); lastTarget = target; }
}, { passive: true });

document.addEventListener('pointerup', e => {
  if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
  if (tapInfo) { openDialog(tapInfo.appId); tapInfo = null; return; }
  if (drag) commitDrop(e.clientX, e.clientY);
});

document.addEventListener('pointercancel', () => {
  if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
  tapInfo = null;
  if (drag) { drag.el.classList.remove('dragging'); drag = null; }
  ghostEl.classList.remove('active');
  clearHighlight();
  if (swipe) { swipe = null; screensWrapper.style.transition = ''; goTo(currentScreen); }
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

// swipe state: null | { id, x, y, ok }
let swipe = null;

// Pointer capture happens immediately on pointerdown so iOS never loses the event.
// pointermove/pointerup stay on screensWrapper (events are redirected there by capture).
screensWrapper.addEventListener('pointerdown', e => {
  if (e.target.closest('.app-icon') || drag || swipe) return;
  swipe = { id: e.pointerId, x: e.clientX, y: e.clientY, ok: false };
  screensWrapper.setPointerCapture(e.pointerId);   // lock events to this element
  screensWrapper.style.transition = 'none';
}, { passive: true });

screensWrapper.addEventListener('pointermove', e => {
  if (!swipe || e.pointerId !== swipe.id || drag) return;
  const dx = e.clientX - swipe.x, dy = e.clientY - swipe.y;
  if (!swipe.ok) {
    // Clear vertical gesture early → release capture so native scroll isn't blocked
    if (Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx)) {
      screensWrapper.releasePointerCapture(e.pointerId);
      swipe = null;
      screensWrapper.style.transition = '';
      return;
    }
    if (Math.abs(dx) < 5) return;   // wait for clear horizontal intent
    swipe.ok = true;
  }
  e.preventDefault();   // block browser back-swipe and scroll
  screensWrapper.style.transform =
    `translateX(calc(-${currentScreen * 100}% + ${dx}px))`;
}, { passive: false });  // must be non-passive to call preventDefault

screensWrapper.addEventListener('pointerup', e => {
  if (!swipe || e.pointerId !== swipe.id) return;
  screensWrapper.style.transition = '';
  const dx = e.clientX - swipe.x, wasOk = swipe.ok;
  swipe = null;
  if (wasOk && Math.abs(dx) > 50) goTo(dx < 0 ? currentScreen + 1 : currentScreen - 1);
  else goTo(currentScreen);
});

screensWrapper.addEventListener('pointercancel', e => {
  if (!swipe || e.pointerId !== swipe.id) return;
  swipe = null;
  screensWrapper.style.transition = '';
  goTo(currentScreen);
});

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
