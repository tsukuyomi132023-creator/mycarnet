/* ============================================================
   LOGO DEL DEPARTAMENTO (incrustado como base64, imagen fija)
   ============================================================ */
const LOGO_SRC = "logo especialidad.jpg"

/* ============================================================
   ICONOS (diseños propios y abstractos por rol de ciberhéroe)
   ============================================================ */
const ICONS = {
  firewall: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"><path d="M20 90V55h60v35"/><path d="M20 70h60M35 55v15M65 55v15M50 55v15"/><path d="M50 10c8 10 14 16 14 26a14 14 0 1 1-28 0c0-6 3-10 6-14 2 6 4 8 6 6 1-4 0-9 2-18z"/></svg>`,
  lock: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="6"><rect x="24" y="46" width="52" height="42" rx="8"/><path d="M34 46V32a16 16 0 0 1 32 0v14"/><circle cx="50" cy="65" r="6"/><path d="M50 71v10"/></svg>`,
  bolt: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"><path d="M55 6 L22 54 H46 L38 94 L80 42 H54 Z"/></svg>`,
  code: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M35 25 L12 50 L35 75"/><path d="M65 25 L88 50 L65 75"/><path d="M58 18 L42 82"/></svg>`,
  network: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5"><circle cx="50" cy="20" r="9"/><circle cx="20" cy="75" r="9"/><circle cx="80" cy="75" r="9"/><circle cx="50" cy="55" r="9"/><path d="M50 29 L50 46 M28 70 L44 58 M72 70 L56 58"/></svg>`,
  mask: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"><path d="M50 10 C25 10 15 30 15 50 C15 66 26 78 40 84 L40 68 C30 64 26 56 26 48 C26 34 34 22 50 22 C66 22 74 34 74 48 C74 56 70 64 60 68 L60 84 C74 78 85 66 85 50 C85 30 75 10 50 10Z"/><circle cx="38" cy="45" r="4"/><circle cx="62" cy="45" r="4"/></svg>`,
  search: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5"><circle cx="42" cy="42" r="26"/><path d="M61 61 L88 88"/><path d="M42 30v24 M30 42h24"/></svg>`,
  hexshield: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5"><path d="M50 6 L88 27 V73 L50 94 L12 73 V27 Z"/><path d="M50 30 L70 42 V64 L50 76 L30 64 V42 Z"/></svg>`,
  phoenix: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 90 C50 60 40 55 15 45 C30 45 42 50 50 62 C58 50 70 45 85 45 C60 55 50 60 50 90Z"/><path d="M50 62 C50 40 46 25 50 8 C54 25 50 40 50 62Z"/></svg>`,
  sword: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 8 L50 66"/><path d="M36 66 H64 L58 78 H42 Z"/><path d="M50 78 V92"/><path d="M30 30 H70 M30 46 H70"/></svg>`,
  eye: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5"><path d="M6 50 C22 22 78 22 94 50 C78 78 22 78 6 50Z"/><circle cx="50" cy="50" r="14"/></svg>`,
  cloud: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"><path d="M28 66a16 16 0 0 1-2-31.8A22 22 0 0 1 68 28a18 18 0 0 1 4 35.6z"/><circle cx="50" cy="50" r="7"/></svg>`,
  bug: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5"><ellipse cx="50" cy="46" rx="26" ry="24"/><path d="M50 70 V88 M37 70 V82 M63 70 V82"/><circle cx="39" cy="42" r="5"/><circle cx="61" cy="42" r="5"/><path d="M22 40 H10 M78 40 H90 M27 22 L17 12 M73 22 L83 12"/></svg>`,
  skullglitch: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 8 C28 8 14 24 14 44 C14 56 20 64 28 70 L28 88 L38 88 L38 78 L44 78 L44 88 L38 90 M56 78 L56 88 L66 88 L66 78 L72 70 C80 64 86 56 86 44 C86 24 72 8 50 8 Z"/><path d="M28 42 L40 54 M40 42 L28 54" stroke-width="5.5"/><path d="M60 42 L72 54 M72 42 L60 54" stroke-width="5.5"/><path d="M41 64 H59"/><path d="M6 36 H16 M6 40 H12 M84 36 H94 M88 40 H94" stroke-width="3" opacity=".75"/><path d="M20 20 L14 14 M80 20 L86 14" stroke-width="3" opacity=".6"/></svg>`,
  circuit: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5"><rect x="30" y="30" width="40" height="40" rx="6"/><circle cx="50" cy="50" r="8"/><path d="M50 10v20 M50 70v20 M10 50h20 M70 50h20 M22 22l14 14 M78 22l-14 14 M22 78l14-14 M78 78l-14-14"/></svg>`,
  target: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5"><circle cx="50" cy="50" r="38"/><circle cx="50" cy="50" r="20"/><path d="M50 4v18 M50 78v18 M4 50h18 M78 50h18"/></svg>`,
  key: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"><circle cx="34" cy="34" r="16"/><path d="M46 46 L88 88 M68 68 L80 56 M78 78 L90 66"/></svg>`
};

/* ============================================================
   FRASES (una por rol, provistas por el usuario)
   ============================================================ */
const PHRASES = [
  "La verdadera fuerza está en defender a los demás.",
  "No nací con superpoderes, los desarrollé con conocimiento.",
  "La misión nunca termina mientras exista una amenaza.",
  "El valor es nuestra primera línea de defensa.",
  "Donde otros ven amenazas, un héroe ve una misión.",
  "Todo héroe tiene una misión. La mía es la ciberseguridad.",
  "Los verdaderos superpoderes son el conocimiento.",
  "Cada clic cuenta. Cada defensa importa.",
  "Mi escudo es el conocimiento. Mi misión es la seguridad.",
  "La mejor defensa es un héroe preparado.",
  "La seguridad comienza con quienes deciden actuar.",
  "La información es un tesoro; protegerla es nuestra misión.",
  "Somos el firewall entre el caos y la seguridad.",
  "En el mundo digital, cada héroe cuenta.",
  "El mal nunca descansa... y nosotros tampoco.",
  "Porque todo héroe necesita una causa, la nuestra es la ciberseguridad."
];

/* ============================================================
   ROLES DE CIBERHÉROES (provistos por el usuario)
   ============================================================ */
const ROLE_DEFS = [
  { key:'firewall',   label:'Capitán Firewall',            c1:'#b3341c', c2:'#e0a53e', icon:'firewall'  },
  { key:'cifrado',     label:'Guardián del Cifrado',         c1:'#1f3a5f', c2:'#4a6fa5', icon:'lock'      },
  { key:'flash',       label:'Cyber Flash',                  c1:'#b58900', c2:'#1c4fa0', icon:'bolt'      },
  { key:'codigo',      label:'Maestro del Código',           c1:'#14532d', c2:'#3f6212', icon:'code'      },
  { key:'nexo',        label:'Nexo Digital',                 c1:'#4c1d95', c2:'#6d28d9', icon:'network'   },
  { key:'shadow',      label:'Shadow Ética',                 c1:'#27272a', c2:'#6b21a8', icon:'mask'      },
  { key:'zeroday',     label:'Detective Zero-Day',           c1:'#78350f', c2:'#b45309', icon:'search'    },
  { key:'quantum',     label:'Escudo Quantum',                c1:'#0f766e', c2:'#0ea5e9', icon:'hexshield' },
  { key:'fenix',       label:'Fénix Digital',                 c1:'#9a3412', c2:'#ea580c', icon:'phoenix'   },
  { key:'guerrero',    label:'Guerrero de la Red',            c1:'#374151', c2:'#b91c1c', icon:'sword'     },
  { key:'ojo',         label:'Ojo del Ciberespacio',          c1:'#312e81', c2:'#4338ca', icon:'eye'       },
  { key:'vigilante',   label:'Vigilante de la Nube',          c1:'#0369a1', c2:'#38bdf8', icon:'cloud'     },
  { key:'malware',     label:'Doctor Malware',                c1:'#14532d', c2:'#65a30d', icon:'skullglitch' },
  { key:'ia',          label:'Guardian AI',                   c1:'#1e3a8a', c2:'#2563eb', icon:'circuit'   },
  { key:'cazador',     label:'Cazador de Amenazas',           c1:'#450a0a', c2:'#7f1d1d', icon:'target'    },
  { key:'criptografico', label:'Comandante Criptográfico',    c1:'#1e293b', c2:'#a16207', icon:'key'       }
];

const ROLES = {};
ROLE_DEFS.forEach((r, i)=>{
  ROLES[r.key] = { ...r, iconSvg: ICONS[r.icon], phrase: PHRASES[i % PHRASES.length] };
});
const DEFAULT_ROLE = ROLE_DEFS[0].key;

/* ---------------- State ---------------- */
let currentData = { name:'', cedula:'', edad:'', seccion:'', hero:DEFAULT_ROLE, photo:null, frase: ROLES[DEFAULT_ROLE].phrase, uid:null };
let gallery = []; // {id, data}
let idCounter = 1;

/* ---------------- Helpers ---------------- */
function escapeHtml(str){
  return String(str ?? '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}
function showToast(msg, isError){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.toggle('error', !!isError);
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove('show'), isError ? 4500 : 2200);
}
function showError(msg){
  const box = document.getElementById('errBox');
  box.textContent = msg;
  box.classList.add('show');
}
function clearError(){
  const box = document.getElementById('errBox');
  box.classList.remove('show'); box.textContent='';
}
function uid(){ return 'g' + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function nextCardCode(){ return 'CS-' + String(idCounter++).padStart(6,'0'); }

/* ---------------- Card template ---------------- */
function cardHTML(data){
  const role = ROLES[data.hero] || ROLES[DEFAULT_ROLE];
  const code = data.uid || 'CS-000000';
  return `
    <div class="carnet-frame" style="--c1:${role.c1};--c2:${role.c2};">
    <div class="carnet">
      <div class="watermark">${role.iconSvg}</div>
      <div class="carnet-header">
        <img class="brand-logo" src="${LOGO_SRC}" alt="logo">
        <div class="brand-text">
          <div class="brand-title">CIBERSEGURIDAD</div>
          <div class="brand-sub">Carnet de identificación</div>
        </div>
        <span class="top-msg">Te esperamos en Ciberseguridad</span>
      </div>
      <div class="phrase-banner">${escapeHtml(data.frase || role.phrase)}</div>
      <div class="carnet-body">
        <div class="carnet-photo">
          ${data.photo ? `<img src="${data.photo}" alt="foto">` : `<div class="ph">SIN<br>FOTO</div>`}
        </div>
        <div class="carnet-info">
          <div class="carnet-name">${escapeHtml(data.name) || 'Nombre Apellido'}</div>
          <div class="carnet-row"><span class="lbl">Cédula</span><span class="val">${escapeHtml(data.cedula) || '—'}</span></div>
          <div class="carnet-row"><span class="lbl">Edad</span><span class="val">${escapeHtml(data.edad) || '—'}</span></div>
          <div class="carnet-row"><span class="lbl">Sección</span><span class="val">${escapeHtml(data.seccion) || '—'}</span></div>
        </div>
      </div>
      <div class="carnet-bottom">
        <div class="role-callout">
          <span class="role-callout-label">Tu nuevo rol es:</span>
          <span class="role-callout-value">${escapeHtml(role.label)}</span>
        </div>
        <span class="code">${escapeHtml(code)}</span>
      </div>
    </div>
    </div>`;
}

/* ---------------- Build role picker ---------------- */
function buildHeroGrid(){
  const grid = document.getElementById('heroGrid');
  grid.innerHTML = ROLE_DEFS.map(r=>`
    <label class="hero-opt ${r.key===currentData.hero?'selected':''}" style="--hc:${r.c1}" data-hero="${r.key}">
      <input type="radio" name="hero" value="${r.key}" ${r.key===currentData.hero?'checked':''}>
      ${ROLES[r.key].iconSvg}
      <span>${r.label}</span>
    </label>`).join('');
  grid.querySelectorAll('.hero-opt').forEach(opt=>{
    opt.addEventListener('click', ()=>{
      const key = opt.dataset.hero;
      currentData.hero = key;
      currentData.frase = ROLES[key].phrase;
      document.getElementById('fFrase').value = currentData.frase;
      grid.querySelectorAll('.hero-opt').forEach(o=>o.classList.remove('selected'));
      opt.classList.add('selected');
      renderPreview();
    });
  });
}

/* ---------------- Preview render ---------------- */
function renderPreview(){
  if(!currentData.uid) currentData.uid = nextCardCode();
  document.getElementById('cardPreview').innerHTML = cardHTML(currentData);
}

/* ---------------- Form bindings ---------------- */
document.getElementById('fName').addEventListener('input', e=>{ currentData.name = e.target.value; renderPreview(); });
document.getElementById('fCedula').addEventListener('input', e=>{
  // Solo números y guiones, nunca letras
  const clean = e.target.value.replace(/[^0-9-]/g, '');
  if(clean !== e.target.value) e.target.value = clean;
  currentData.cedula = clean;
  renderPreview();
});
document.getElementById('fEdad').addEventListener('input', e => {
    // Solo números
    e.target.value = e.target.value.replace(/[^0-9]/g, '');

    let edad = parseInt(e.target.value, 10);

    if (!isNaN(edad) && edad < 0) {
        edad = 0;
        e.target.value = "0";
    }

    currentData.edad = e.target.value;
    renderPreview();
});

document.getElementById('fSeccion').addEventListener('input', e => {
    currentData.seccion = e.target.value;
    renderPreview();
});

/* ---------------- Editor de fotografía (posición / zoom) ---------------- */
const PE_FRAME_W = 220, PE_FRAME_H = 264; // relación 5:6, igual que el recorte final
const PE_OUTPUT_W = 300, PE_OUTPUT_H = 360;
let rawPhotoDataUrl = null;
let peNatW = 0, peNatH = 0;
let peScale = 1, peBaseScale = 1;
let peTX = 0, peTY = 0;
let peDragging = false, peDragStart = {x:0,y:0}, peStartT = {x:0,y:0};

function peApplyTransform(){
  const imgEl = document.getElementById('peImg');
  imgEl.style.width = (peNatW*peScale)+'px';
  imgEl.style.height = (peNatH*peScale)+'px';
  imgEl.style.left = peTX+'px';
  imgEl.style.top = peTY+'px';
}
function peClamp(){
  const dispW = peNatW*peScale, dispH = peNatH*peScale;
  peTX = Math.min(0, Math.max(PE_FRAME_W - dispW, peTX));
  peTY = Math.min(0, Math.max(PE_FRAME_H - dispH, peTY));
}
function openPhotoEditor(dataUrl){
  const overlay = document.getElementById('photoEditorOverlay');
  const imgEl = document.getElementById('peImg');
  imgEl.onload = ()=>{
    peNatW = imgEl.naturalWidth; peNatH = imgEl.naturalHeight;
    peBaseScale = Math.max(PE_FRAME_W/peNatW, PE_FRAME_H/peNatH);
    peScale = peBaseScale;
    peTX = (PE_FRAME_W - peNatW*peScale)/2;
    peTY = (PE_FRAME_H - peNatH*peScale)/2;
    peClamp();
    document.getElementById('peZoom').value = 100;
    peApplyTransform();
  };
  imgEl.onerror = ()=>{
    showToast('No se pudo leer la imagen seleccionada.', true);
    overlay.classList.remove('show');
  };
  imgEl.src = dataUrl;
  overlay.classList.add('show');
}

document.getElementById('photoInput').addEventListener('change', e=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ev=>{
    rawPhotoDataUrl = ev.target.result;
    openPhotoEditor(rawPhotoDataUrl);
  };
  reader.onerror = ()=> showToast('No se pudo leer la imagen seleccionada.', true);
  reader.readAsDataURL(file);
});

document.getElementById('btnEditPhoto').addEventListener('click', ()=>{
  if(rawPhotoDataUrl) openPhotoEditor(rawPhotoDataUrl);
});

const peFrame = document.getElementById('peFrame');
peFrame.addEventListener('pointerdown', e=>{
  peDragging = true;
  peDragStart = { x:e.clientX, y:e.clientY };
  peStartT = { x:peTX, y:peTY };
  peFrame.setPointerCapture(e.pointerId);
  peFrame.classList.add('dragging');
});
peFrame.addEventListener('pointermove', e=>{
  if(!peDragging) return;
  peTX = peStartT.x + (e.clientX - peDragStart.x);
  peTY = peStartT.y + (e.clientY - peDragStart.y);
  peClamp();
  peApplyTransform();
});
function peEndDrag(){ peDragging = false; peFrame.classList.remove('dragging'); }
peFrame.addEventListener('pointerup', peEndDrag);
peFrame.addEventListener('pointercancel', peEndDrag);

document.getElementById('peZoom').addEventListener('input', e=>{
  const newScale = peBaseScale * (e.target.value/100);
  const cx = PE_FRAME_W/2, cy = PE_FRAME_H/2;
  const imgPX = (cx - peTX)/peScale;
  const imgPY = (cy - peTY)/peScale;
  peScale = newScale;
  peTX = cx - imgPX*peScale;
  peTY = cy - imgPY*peScale;
  peClamp();
  peApplyTransform();
});

document.getElementById('peCancel').addEventListener('click', ()=>{
  document.getElementById('photoEditorOverlay').classList.remove('show');
});

document.getElementById('peConfirm').addEventListener('click', ()=>{
  const canvas = document.createElement('canvas');
  canvas.width = PE_OUTPUT_W; canvas.height = PE_OUTPUT_H;
  const ctx = canvas.getContext('2d');
  const sx = -peTX/peScale, sy = -peTY/peScale;
  const sw = PE_FRAME_W/peScale, sh = PE_FRAME_H/peScale;
  ctx.drawImage(document.getElementById('peImg'), sx, sy, sw, sh, 0, 0, PE_OUTPUT_W, PE_OUTPUT_H);
  const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
  currentData.photo = dataUrl;
  document.getElementById('photoThumb').innerHTML = `<img src="${dataUrl}" alt="foto">`;
  document.getElementById('btnEditPhoto').style.display = 'block';
  document.getElementById('photoEditorOverlay').classList.remove('show');
  renderPreview();
});

document.getElementById('btnClear').addEventListener('click', ()=>{
  currentData = { name:'', cedula:'', edad:'', seccion:'', hero:DEFAULT_ROLE, photo:null, frase: ROLES[DEFAULT_ROLE].phrase, uid:null };
  document.getElementById('fName').value='';
  document.getElementById('fCedula').value='';
  document.getElementById('fEdad').value='';
  document.getElementById('fSeccion').value='';
  document.getElementById('fFrase').value= ROLES[DEFAULT_ROLE].phrase;
  document.getElementById('photoInput').value='';
  document.getElementById('photoThumb').innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="3.4"/><path d="M4 20c1.2-4 4.4-6 8-6s6.8 2 8 6"/></svg>`;
  document.getElementById('btnEditPhoto').style.display='none';
  rawPhotoDataUrl = null;
  clearError();
  buildHeroGrid();
  renderPreview();
});

/* ---------------- Tabs ---------------- */
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-'+btn.dataset.tab).classList.add('active');
  });
});

/* ---------------- Export helpers ---------------- */
function triggerDownload(dataUrl, filename){
  const a = document.createElement('a');
  a.href = dataUrl; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
}
function safeFileName(data){
  const n = ((data && data.name) || 'carnet').trim().toLowerCase().replace(/[^a-z0-9áéíóúñ\s-]/gi,'').replace(/\s+/g,'-');
  return n || 'carnet';
}

async function waitForImagesToLoad(container){
  const imgs = Array.from(container.querySelectorAll('img'));
  await Promise.all(imgs.map(img=>{
    if(img.complete && img.naturalWidth>0) return Promise.resolve();
    return new Promise(resolve=>{
      img.addEventListener('load', resolve, { once:true });
      img.addEventListener('error', resolve, { once:true });
    });
  }));
}

let fontsReadyPromise = null;
function fontsReady(){
  if(!fontsReadyPromise){
    fontsReadyPromise = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  }
  return fontsReadyPromise;
}

async function renderCardToCanvas(data, scale){
  scale = scale || 3;
  const holder = document.getElementById('hiddenRender');
  holder.innerHTML = cardHTML(data);
  const el = holder.querySelector('.carnet-frame');
  if(!el) throw new Error('No se pudo preparar el carnet para exportar.');

  await fontsReady();
  await waitForImagesToLoad(el);
  await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
  await new Promise(r=>setTimeout(r, 40));

  let canvas;
  try{
    canvas = await html2canvas(el, { scale, backgroundColor:'#ffffff', useCORS:true, logging:false });
  } finally {
    holder.innerHTML = '';
  }
  if(!canvas || canvas.width===0 || canvas.height===0){
    throw new Error('La imagen del carnet salió vacía. Intenta de nuevo.');
  }
  return canvas;
}

/* ---------------- Export single card ---------------- */
document.getElementById('btnPNG').addEventListener('click', async ()=>{
  clearError();
  try{
    const canvas = await renderCardToCanvas(currentData);
    triggerDownload(canvas.toDataURL('image/png'), safeFileName(currentData)+'.png');
    showToast('Carnet descargado en PNG');
  }catch(err){
    console.error(err);
    showError('No se pudo generar el PNG: ' + err.message);
    showToast('Error al generar el PNG', true);
  }
});

document.getElementById('btnJPG').addEventListener('click', async ()=>{
  clearError();
  try{
    const canvas = await renderCardToCanvas(currentData);
    triggerDownload(canvas.toDataURL('image/jpeg', 0.95), safeFileName(currentData)+'.jpg');
    showToast('Carnet descargado en JPG');
  }catch(err){
    console.error(err);
    showError('No se pudo generar el JPG: ' + err.message);
    showToast('Error al generar el JPG', true);
  }
});

document.getElementById('btnPDF').addEventListener('click', async ()=>{
  clearError();
  try{
    const canvas = await renderCardToCanvas(currentData);
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation:'landscape', unit:'mm', format:[85.6,54] });
    pdf.addImage(canvas.toDataURL('image/jpeg',0.97), 'JPEG', 0, 0, 85.6, 54);
    pdf.save(safeFileName(currentData)+'.pdf');
    showToast('Carnet descargado en PDF');
  }catch(err){
    console.error(err);
    showError('No se pudo generar el PDF: ' + err.message);
    showToast('Error al generar el PDF', true);
  }
});

/* ---------------- ImgBB (subida real, para un QR simple con URL corta) ---------------- */
const IMGBB_KEY_STORAGE = 'carnets_imgbb_api_key';

function loadSavedApiKey(){
  try{ return localStorage.getItem(IMGBB_KEY_STORAGE) || ''; }
  catch(e){ return ''; }
}
function saveApiKey(key){
  try{ localStorage.setItem(IMGBB_KEY_STORAGE, key); }catch(e){ /* almacenamiento no disponible, se usa solo en memoria */ }
}

function canvasToBlob(canvas, type, quality){
  return new Promise(resolve=> canvas.toBlob(resolve, type, quality));
}

async function uploadToImgBB(canvas, apiKey){
  const blob = await canvasToBlob(canvas, 'image/jpeg', 0.92);
  if(!blob) throw new Error('No se pudo preparar la imagen para subirla.');
  const form = new FormData();
  form.append('image', blob, 'carnet.jpg');

  let res;
  try{
    res = await fetch(`https://api.imgbb.com/1/upload?key=${encodeURIComponent(apiKey)}`, {
      method:'POST',
      body: form
    });
  }catch(networkErr){
    throw new Error('No hay conexión a internet o ImgBB no respondió.');
  }

  let json;
  try{ json = await res.json(); }catch(parseErr){ throw new Error('ImgBB devolvió una respuesta inválida.'); }

  if(!res.ok || !json || json.success===false){
    const msg = (json && json.error && json.error.message) ? json.error.message : `Error HTTP ${res.status}`;
    throw new Error('ImgBB rechazó la subida: ' + msg + ' (revisa que tu API key sea correcta).');
  }
  const data = json.data || {};
  const url = data.display_url || data.url || (data.image && data.image.url);
  if(!url) throw new Error('ImgBB no devolvió una URL de imagen.');
  return { url, deleteUrl: data.delete_url || null };
}

const qrKeyInput = document.getElementById('qrApiKey');
let qrLastDownloadUrl = null;
let qrLastFileName = '';

function markKeyState(){
  const cfg = document.getElementById('qrConfig');
  cfg.classList.toggle('saved', !!qrKeyInput.value.trim());
}

/* ---- Modo administrador ----
   Esta es una protección a nivel de interfaz para evitar que cualquier
   persona con acceso a la pantalla vea o cambie la API key por accidente.
   No es una autenticación real de servidor (esta app es 100% estática),
   así que quien tenga acceso al código fuente podría evadirla; para una
   protección real, la subida de imágenes debería hacerse desde un backend
   propio en vez de exponer una API key en el navegador. */
const ADMIN_PASSWORD = 'ciberadmin'; // cámbiala por la clave que prefieras
let adminUnlocked = false;

const adminBtn = document.getElementById('qrAdminBtn');
const eyeBtn = document.getElementById('qrToggleVisibility');
const eyeIcon = document.getElementById('qrEyeIcon');
const saveKeyBtn = document.getElementById('qrSaveKey');

const EYE_OPEN = '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>';
const EYE_CLOSED = '<path d="M3 3l18 18"/><path d="M10.6 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a15.6 15.6 0 0 1-3.2 4.1M6.6 6.6C4.1 8.3 2 12 2 12s3.6 7 10 7a9.9 9.9 0 0 0 3.4-.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>';

function setAdminUnlocked(unlocked){
  adminUnlocked = unlocked;
  qrKeyInput.disabled = !unlocked;
  eyeBtn.disabled = !unlocked;
  saveKeyBtn.disabled = !unlocked;
  adminBtn.classList.toggle('unlocked', unlocked);
  adminBtn.textContent = unlocked ? '🔓 Administrador activo' : '🔒 Modo administrador';
  if(!unlocked){
    qrKeyInput.type = 'password';
    eyeIcon.innerHTML = EYE_OPEN;
  }
}

adminBtn.addEventListener('click', ()=>{
  if(adminUnlocked){
    setAdminUnlocked(false);
    return;
  }
  const pass = prompt('Ingresa la clave de administrador para ver o modificar la API key:');
  if(pass === null) return;
  if(pass === ADMIN_PASSWORD){
    setAdminUnlocked(true);
    showToast('Modo administrador activado');
  }else{
    showToast('Clave de administrador incorrecta', true);
  }
});

eyeBtn.addEventListener('click', ()=>{
  if(!adminUnlocked) return;
  const showing = qrKeyInput.type === 'text';
  qrKeyInput.type = showing ? 'password' : 'text';
  eyeIcon.innerHTML = showing ? EYE_OPEN : EYE_CLOSED;
  eyeBtn.title = showing ? 'Mostrar API key' : 'Ocultar API key';
});

document.getElementById('qrSaveKey').addEventListener('click', ()=>{
  if(!adminUnlocked) return;
  const val = qrKeyInput.value.trim();
  saveApiKey(val); // sobrescribe siempre lo anterior: se puede actualizar sin límite
  markKeyState();
  showToast(val ? 'API key guardada en este navegador' : 'API key eliminada');
});
// Además de "Guardar", persiste automáticamente mientras escribe (solo si el
// administrador desbloqueó el campo) para no depender de que recuerde
// presionar el botón antes de generar.
qrKeyInput.addEventListener('change', ()=>{
  if(!adminUnlocked) return;
  saveApiKey(qrKeyInput.value.trim());
  markKeyState();
});

function renderQRCode(text){
  const qrBox = document.getElementById('qrCodeBox');
  qrBox.innerHTML = '';
  new QRCode(qrBox, {
    text: text,
    width: 290,
    height: 290,
    correctLevel: QRCode.CorrectLevel.L
  });
}

/* Construye la página intermedia que se abre al escanear el QR: intenta
   descargar el carnet automáticamente y, si el navegador del teléfono no lo
   permite, deja siempre visible el botón "Descárgalo aquí" como respaldo. */
function buildDownloadPageUrl(imageUrl, filename){
  const target = new URL('descarga.html', window.location.href);
  target.searchParams.set('img', imageUrl);
  target.searchParams.set('name', filename);
  return target;
}

/* ---- Validación del enlace del QR (evita net::ERR_CONNECTION_REFUSED) ----
   Un celular escaneando el QR es SIEMPRE un dispositivo externo: si la app
   se está sirviendo desde localhost/127.0.0.1/una IP privada (o directo
   desde un archivo file://), ese enlace nunca va a poder abrirse fuera de
   esta misma computadora, sin importar que el servidor esté funcionando
   perfecto. Por eso esto se valida ANTES de generar el código. */
const PRIVATE_HOST_PATTERNS = [
  /^localhost$/i,
  /^127\./,
  /^0\.0\.0\.0$/,
  /^\[?::1\]?$/,
  /^10\./,
  /^192\.168\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^169\.254\./,
  /\.local$/i
];

function describeUnreachableUrl(urlObj){
  if(urlObj.protocol === 'file:'){
    return 'Esta página se está abriendo directamente desde un archivo local (file://) y no desde un servidor web. Un enlace file:// jamás puede abrirse desde otro dispositivo. Sube estos archivos (incluyendo descarga.html) a un servidor web con una URL pública y abre la app desde ahí.';
  }
  if(urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:'){
    return `El protocolo "${urlObj.protocol}" del enlace no es accesible desde otros dispositivos.`;
  }
  if(PRIVATE_HOST_PATTERNS.some(re => re.test(urlObj.hostname))){
    return `Esta página se está sirviendo desde "${urlObj.hostname}", que es una dirección local o privada. Esas direcciones solo responden dentro de esta misma red/equipo: un celular por internet no puede alcanzarlas, por eso da net::ERR_CONNECTION_REFUSED al escanear. Publica la aplicación en un dominio o IP pública (o expórtala con un túnel como ngrok / Cloudflare Tunnel) y vuelve a intentarlo desde esa URL pública.`;
  }
  return null;
}

/* Comprueba que la URL realmente responda antes de meterla en el QR.
   Como el navegador del administrador SÍ puede llegar al servidor (está
   usando la app ahí mismo), esto confirma que el archivo existe y que el
   servidor/puerto/proxy están respondiendo correctamente en esta ruta. */
async function checkUrlReachable(url, timeoutMs){
  const controller = new AbortController();
  const timer = setTimeout(()=>controller.abort(), timeoutMs || 6000);
  try{
    const res = await fetch(url, { method:'GET', cache:'no-store', signal: controller.signal });
    return { ok: res.ok, status: res.status };
  }catch(err){
    return { ok:false, status:null, errorMessage: err && err.name==='AbortError' ? 'La verificación tardó demasiado (tiempo agotado).' : (err && err.message) };
  }finally{
    clearTimeout(timer);
  }
}

document.getElementById('btnShowQR').addEventListener('click', async ()=>{
  const overlay = document.getElementById('qrOverlay');
  const statusEl = document.getElementById('qrStatus');
  const qrBox = document.getElementById('qrCodeBox');
  const previewImg = document.getElementById('qrPreviewImg');
  const linkRow = document.getElementById('qrLinkRow');
  const linkText = document.getElementById('qrLinkText');
  const linkSublabel = document.getElementById('qrLinkSublabel');
  const deleteLink = document.getElementById('qrDeleteLink');
  const disclaimer = document.getElementById('qrDisclaimer');
  const targetRow = document.getElementById('qrTargetRow');
  const targetLabel = document.getElementById('qrTargetLabel');
  const targetLinkText = document.getElementById('qrTargetLinkText');

  qrBox.innerHTML = '';
  previewImg.removeAttribute('src');
  linkRow.style.display = 'none';
  linkSublabel.style.display = 'none';
  deleteLink.style.display = 'none';
  targetRow.style.display = 'none';
  targetLabel.style.display = 'none';
  targetLinkText.value = '';
  statusEl.classList.remove('error','working');
  overlay.classList.add('show');

  // Usamos siempre lo que está escrito en el campo en este momento, sin depender
  // de haber presionado "Guardar" antes (aunque igual queda guardado para la próxima vez).
  const apiKey = qrKeyInput.value.trim();
  if(apiKey) saveApiKey(apiKey);

  if(!apiKey){
    statusEl.classList.add('error');
    statusEl.textContent = 'Pega tu API key de ImgBB arriba y presiona "Guardar" para poder generar el QR.';
    disclaimer.textContent = 'Un QR solo puede leerse fácil si guarda muy poco texto (como un link corto). Meter una imagen completa directamente adentro del código lo vuelve demasiado denso para que cualquier celular lo enfoque, así que esta herramienta necesita subir el carnet a un hosting (ImgBB) primero y poner ese link en el QR.';
    qrKeyInput.focus();
    return;
  }

  try{
    statusEl.classList.add('working');
    statusEl.textContent = 'Generando carnet...';
    const canvas = await renderCardToCanvas(currentData);
    const fullDataUrl = canvas.toDataURL('image/png');
    previewImg.src = fullDataUrl;
    qrLastDownloadUrl = fullDataUrl;
    qrLastFileName = safeFileName(currentData) + '.png';

    statusEl.textContent = 'Subiendo carnet a ImgBB...';
    const { url, deleteUrl } = await uploadToImgBB(canvas, apiKey);
    linkText.value = url;
    linkRow.style.display = 'flex';
    linkSublabel.style.display = 'block';
    if(deleteUrl){
      deleteLink.href = deleteUrl;
      deleteLink.style.display = 'block';
    }

    const targetUrlObj = buildDownloadPageUrl(url, qrLastFileName);
    const targetUrlStr = targetUrlObj.toString();
    targetLinkText.value = targetUrlStr;
    targetRow.style.display = 'flex';
    targetLabel.style.display = 'block';

    // 1) ¿La página se está sirviendo desde una dirección que un celular
    //    externo jamás podría alcanzar (localhost, IP privada, file://)?
    const unreachableReason = describeUnreachableUrl(targetUrlObj);
    if(unreachableReason){
      statusEl.classList.remove('working');
      statusEl.classList.add('error');
      statusEl.textContent = '⚠️ No se generó el QR: ' + unreachableReason;
      disclaimer.textContent = 'Usa los botones "Copiar" o "Abrir" de arriba para revisar el enlace exacto que se intentó usar.';
      return; // nunca se genera un QR que sabemos que va a fallar
    }

    // 2) Confirmamos que el enlace realmente responde antes de convertirlo en QR.
    statusEl.textContent = 'Verificando que el enlace sea accesible...';
    const check = await checkUrlReachable(targetUrlStr);
    if(!check.ok){
      statusEl.classList.remove('working');
      statusEl.classList.add('error');
      const detail = check.status ? `el servidor respondió con HTTP ${check.status}` : (check.errorMessage || 'no hubo respuesta del servidor');
      statusEl.textContent = `⚠️ No se generó el QR: no se pudo verificar "descarga.html" (${detail}). Revisa que el archivo descarga.html esté publicado en la misma carpeta que esta página, que el servidor esté escuchando en el puerto correcto, y que ningún proxy inverso o firewall esté bloqueando la ruta.`;
      disclaimer.textContent = 'Usa el botón "Abrir" junto al enlace de arriba para ver el error exacto en una pestaña nueva.';
      return;
    }

    renderQRCode(targetUrlStr);
    disclaimer.textContent = 'El carnet se subió a ImgBB en calidad completa. Al escanear el QR, el celular abre una página que intenta descargar el carnet automáticamente y siempre muestra el botón "Descárgalo aquí" por si el navegador del teléfono no permite la descarga directa. El enlace queda accesible para quien lo tenga, así que usa "Borrar esta imagen" en cuanto ya no lo necesites.';

    statusEl.classList.remove('working');
    statusEl.textContent = 'Código verificado y listo para escanear.';
  }catch(err){
    console.error('Fallo al generar el QR:', err);
    statusEl.classList.remove('working');
    statusEl.classList.add('error');
    statusEl.textContent = 'No se pudo generar el QR: ' + err.message + ' (revisa la consola del navegador para más detalle).';
  }
});

document.getElementById('qrCopyTargetLink').addEventListener('click', ()=>{
  const targetLinkText = document.getElementById('qrTargetLinkText');
  targetLinkText.select();
  targetLinkText.setSelectionRange(0, 99999);
  navigator.clipboard?.writeText(targetLinkText.value).then(()=>{
    showToast('Enlace copiado');
  }).catch(()=>{
    document.execCommand('copy');
    showToast('Enlace copiado');
  });
});

document.getElementById('qrOpenTargetLink').addEventListener('click', ()=>{
  const targetLinkText = document.getElementById('qrTargetLinkText');
  if(!targetLinkText.value) return;
  window.open(targetLinkText.value, '_blank', 'noopener');
});

document.getElementById('qrCopyLink').addEventListener('click', ()=>{
  const linkText = document.getElementById('qrLinkText');
  linkText.select();
  linkText.setSelectionRange(0, 99999);
  navigator.clipboard?.writeText(linkText.value).then(()=>{
    showToast('Enlace copiado');
  }).catch(()=>{
    document.execCommand('copy');
    showToast('Enlace copiado');
  });
});

document.getElementById('qrClose').addEventListener('click', ()=>{
  document.getElementById('qrOverlay').classList.remove('show');
  setAdminUnlocked(false); // por seguridad, si la pantalla es compartida
});

document.getElementById('qrDownload').addEventListener('click', ()=>{
  if(!qrLastDownloadUrl) return;
  triggerDownload(qrLastDownloadUrl, qrLastFileName || 'carnet.png');
  showToast('Carnet descargado');
});

/* ---------------- Gallery ---------------- */
function renderGallery(){
  const grid = document.getElementById('galleryGrid');
  const empty = document.getElementById('galleryEmpty');
  document.getElementById('galleryCount').textContent = gallery.length;

  if(gallery.length===0){
    grid.innerHTML='';
    empty.style.display='block';
    return;
  }
  empty.style.display='none';

  grid.innerHTML = gallery.map(item=>`
    <div class="gallery-item" data-id="${item.id}">
      <input type="checkbox" class="g-check" ${item.selected?'checked':''}>
      <button class="g-remove" data-remove="${item.id}">✕</button>
      <div class="gallery-thumb-wrap">
        <div class="thumb-scale">${cardHTML(item.data)}</div>
      </div>
      <div class="g-name">${escapeHtml(item.data.name) || 'Sin nombre'}</div>
      <div class="g-sub">${escapeHtml(ROLES[item.data.hero]?.label || '')} · ${escapeHtml(item.data.uid || '')}</div>
    </div>
  `).join('');

  grid.querySelectorAll('.g-check').forEach(chk=>{
    chk.addEventListener('change', e=>{
      const id = e.target.closest('.gallery-item').dataset.id;
      const item = gallery.find(g=>g.id===id);
      if(item) item.selected = e.target.checked;
    });
  });
  grid.querySelectorAll('[data-remove]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const id = e.target.dataset.remove;
      gallery = gallery.filter(g=>g.id!==id);
      renderGallery();
    });
  });
}

document.getElementById('btnAddGallery').addEventListener('click', ()=>{
  if(!currentData.name && !currentData.cedula){
    showToast('Completa al menos el nombre o la cédula', true);
    return;
  }
  const dataCopy = JSON.parse(JSON.stringify(currentData));
  dataCopy.uid = nextCardCode(); // ID único garantizado, aunque se repita el mismo carnet
  gallery.push({ id: uid(), data: dataCopy, selected:true });
  renderGallery();
  showToast('Carnet agregado a la hoja de impresión');
});

document.getElementById('btnSelectAll').addEventListener('click', ()=>{ gallery.forEach(g=>g.selected=true); renderGallery(); });
document.getElementById('btnSelectNone').addEventListener('click', ()=>{ gallery.forEach(g=>g.selected=false); renderGallery(); });
document.getElementById('btnClearGallery').addEventListener('click', ()=>{
  if(gallery.length && !confirm('¿Vaciar toda la lista de impresión?')) return;
  gallery = []; renderGallery();
});

/* ---------------- Generate print sheet PDF ---------------- */
document.getElementById('btnGeneratePDF').addEventListener('click', async ()=>{
  const selected = gallery.filter(g=>g.selected);
  if(selected.length===0){
    showToast('Selecciona al menos un carnet', true);
    return;
  }
  const btn = document.getElementById('btnGeneratePDF');
  const label = document.getElementById('btnGenerateLabel');
  const originalLabel = label.textContent;
  btn.disabled = true;

  try{
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });

    const cardW = 85.6, cardH = 54;
    const cols = 2, rows = 4;
    const gapX = 6, gapY = 6;
    const pageW = 210, pageH = 297;
    const gridW = cols*cardW + (cols-1)*gapX;
    const gridH = rows*cardH + (rows-1)*gapY;
    const marginX = (pageW-gridW)/2;
    const marginY = (pageH-gridH)/2;
    const perPage = cols*rows;

    let failedCount = 0;

    for(let i=0;i<selected.length;i++){
      label.textContent = `Generando ${i+1} de ${selected.length}...`;
      const posInPage = i % perPage;
      if(posInPage===0 && i!==0) pdf.addPage();

      const col = posInPage % cols;
      const row = Math.floor(posInPage/cols);
      const x = marginX + col*(cardW+gapX);
      const y = marginY + row*(cardH+gapY);

      try{
        const canvas = await renderCardToCanvas(selected[i].data, 3);
        pdf.addImage(canvas.toDataURL('image/jpeg',0.97), 'JPEG', x, y, cardW, cardH);
      }catch(cardErr){
        console.error('Fallo al renderizar carnet', selected[i], cardErr);
        failedCount++;
        // Dibuja un recuadro de aviso en vez de dejar el hueco en blanco
        pdf.setDrawColor(220,80,80);
        pdf.setLineWidth(0.3);
        pdf.rect(x, y, cardW, cardH);
        pdf.setFontSize(8);
        pdf.setTextColor(200,60,60);
        pdf.text('No se pudo generar este carnet', x+4, y+cardH/2);
      }

      // Guía de corte (línea muy clara, casi no gasta tinta)
      pdf.setDrawColor(190);
      pdf.setLineWidth(0.1);
      pdf.rect(x, y, cardW, cardH);
    }

    pdf.save('hoja-carnets.pdf');

    if(failedCount>0){
      showToast(`Hoja generada, pero ${failedCount} carnet(s) no se pudieron dibujar`, true);
    } else {
      showToast('Hoja PDF generada — lista para imprimir y recortar');
    }
  }catch(err){
    console.error(err);
    showToast('No se pudo generar la hoja PDF: ' + err.message, true);
  } finally {
    btn.disabled = false;
    label.textContent = originalLabel;
  }
});

/* ---------------- Init ---------------- */
buildHeroGrid();
document.getElementById('fFrase').value = currentData.frase;
renderPreview();
renderGallery();

const savedKey = loadSavedApiKey();
if(savedKey){
  document.getElementById('qrApiKey').value = savedKey;
  document.getElementById('qrConfig').classList.add('saved');
}
