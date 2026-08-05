const READER_ID = 'reader';
let html5QrCode = null;
let scanning = false;

const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const resultBox = document.getElementById('result');
const resHolder = document.getElementById('resHolder');
const resCode = document.getElementById('resCode');
const resRaw = document.getElementById('resRaw');
const resWarn = document.getElementById('resWarn');
const resOpen = document.getElementById('resOpen');
const historyList = document.getElementById('historyList');
const historyEmpty = document.getElementById('historyEmpty');

const HISTORY_KEY = 'ciberheroes_scan_history';

function loadHistory(){
  try{ return JSON.parse(sessionStorage.getItem(HISTORY_KEY) || '[]'); }
  catch(e){ return []; }
}

function saveHistory(list){
  try{ sessionStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0,15))); }catch(e){}
}

function renderHistory(){
  const list = loadHistory();
  if(list.length === 0){
    historyList.innerHTML = '';
    historyEmpty.style.display = 'block';
    return;
  }
  historyEmpty.style.display = 'none';
  historyList.innerHTML = list.map(item => `
    <li>
      <span>${escapeHtml(item.holder || 'Carnet')} ${item.code ? '· ' + escapeHtml(item.code) : ''}</span>
      <a href="${item.url}" target="_blank" rel="noopener">Abrir</a>
    </li>
  `).join('');
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function parseVerifyUrl(text){
  try{
    const url = new URL(text, location.href);
    const isVerify = url.pathname.toLowerCase().endsWith('verificar.html');
    const name = url.searchParams.get('name') || '';
    const uid = url.searchParams.get('uid') || '';
    return { isVerify, name, uid, url: url.href };
  }catch(e){
    return { isVerify:false, name:'', uid:'', url:null };
  }
}

function showResult(decodedText){
  const parsed = parseVerifyUrl(decodedText);
  resultBox.classList.add('show');
  resRaw.textContent = decodedText;

  if(parsed.isVerify){
    resHolder.textContent = parsed.name || 'Ciberhéroe';
    resCode.textContent = parsed.uid || '';
    resWarn.style.display = 'none';
    resOpen.href = parsed.url;
    resOpen.style.display = 'inline-flex';

    const list = loadHistory();
    list.unshift({ holder: parsed.name, code: parsed.uid, url: parsed.url, ts: Date.now() });
    saveHistory(list);
    renderHistory();
  }else{
    resHolder.textContent = 'Código QR leído';
    resCode.textContent = '';
    resWarn.textContent = 'Este QR no parece ser de un carnet de la Legión Cibernética (no apunta a verificar.html).';
    resWarn.style.display = 'block';
    resOpen.style.display = 'none';
  }
}

async function startScanner(){
  if(scanning) return;
  if(typeof Html5Qrcode === 'undefined'){
    alert('No se pudo cargar la librería de escaneo. Revisa tu conexión a internet e intenta de nuevo.');
    return;
  }
  html5QrCode = new Html5Qrcode(READER_ID);
  try{
    await html5QrCode.start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: { width: 240, height: 240 } },
      (decodedText) => {
        showResult(decodedText);
      },
      () => { /* frame sin QR detectado: se ignora, es normal mientras se enfoca */ }
    );
    scanning = true;
    btnStart.style.display = 'none';
    btnStop.style.display = 'flex';
  }catch(err){
    console.error('No se pudo iniciar la cámara:', err);
    alert('No se pudo acceder a la cámara. Revisa que le hayas dado permiso a este sitio y que no esté siendo usada por otra app.');
  }
}

async function stopScanner(){
  if(!scanning || !html5QrCode) return;
  try{
    await html5QrCode.stop();
    await html5QrCode.clear();
  }catch(e){ /* noop */ }
  scanning = false;
  btnStart.style.display = 'flex';
  btnStop.style.display = 'none';
}

btnStart.addEventListener('click', startScanner);
btnStop.addEventListener('click', stopScanner);

renderHistory();
