/* Adams Computer — logika bersama (data, helper) */
const CONFIG = {   // nilai awal; diganti otomatis dari Pengaturan Toko (halaman admin)
  shopName: 'Adams Computer',
  wa: '6281234567890', address: 'Jl. Contoh No. 1, Kota Anda', hours: 'Senin – Sabtu, 09.00 – 19.00',
  email: 'halo@adamscomputer.id', merchant: 'ADAMS COMPUTER', qrisImage: ''
};
const ORDER_STATUS = ['Menunggu', 'Diproses', 'Dikirim', 'Selesai', 'Dibatalkan'];
const SERVICE_STATUS = ['Diterima', 'Diagnosa', 'Dikerjakan', 'Siap Diambil', 'Selesai', 'Dibatalkan'];
const SELL_STATUS = ['Menunggu', 'Ditawar', 'Disetujui', 'Ditolak'];
const SERVICE_TYPES = [
  { n: 'Install Ulang Windows / Linux', p: 'mulai Rp 100.000', e: 'disc' },
  { n: 'Ganti Layar / LCD', p: 'mulai Rp 450.000', e: 'monitor' },
  { n: 'Ganti Keyboard', p: 'mulai Rp 200.000', e: 'keyboard' },
  { n: 'Ganti Baterai', p: 'mulai Rp 300.000', e: 'battery' },
  { n: 'Upgrade RAM / SSD', p: 'mulai Rp 150.000', e: 'ram' },
  { n: 'Cleaning & Thermal Paste', p: 'mulai Rp 120.000', e: 'fan' },
  { n: 'Mati Total / Mainboard', p: 'estimasi setelah cek', e: 'cpu' },
  { n: 'Bersih Virus & Optimasi', p: 'mulai Rp 80.000', e: 'shield' },
  { n: 'Lainnya', p: 'konsultasi gratis', e: 'chat' }
];


/* ---------- ikon realistis (SVG sprite, gaya glossy) ---------- */
const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<linearGradient id="gO" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD59A"/><stop offset=".55" stop-color="#F29A3C"/><stop offset="1" stop-color="#B8620F"/></linearGradient>
<linearGradient id="gD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b5a56"/><stop offset=".5" stop-color="#352C2B"/><stop offset="1" stop-color="#1a1312"/></linearGradient>
<linearGradient id="gS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#d5d9e0"/><stop offset="1" stop-color="#8c94a3"/></linearGradient>
<linearGradient id="gB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a9d6ff"/><stop offset=".5" stop-color="#4c8dff"/><stop offset="1" stop-color="#1d4bb5"/></linearGradient>
<linearGradient id="gG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9af7b6"/><stop offset=".5" stop-color="#2ec46a"/><stop offset="1" stop-color="#0f7d3d"/></linearGradient>
<linearGradient id="gR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff9a8a"/><stop offset=".5" stop-color="#ef4a3a"/><stop offset="1" stop-color="#a61b12"/></linearGradient>
<linearGradient id="gY" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff2a8"/><stop offset=".5" stop-color="#ffc83a"/><stop offset="1" stop-color="#c98a06"/></linearGradient>
<linearGradient id="gP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3fbf78"/><stop offset="1" stop-color="#17724a"/></linearGradient>
<linearGradient id="gGl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>

<g id="i-laptop"><rect x="8" y="9" width="32" height="22" rx="3" fill="url(#gD)"/><rect x="10.5" y="11.5" width="27" height="17" rx="1.5" fill="url(#gO)"/><path d="M10.5 11.5h27v7c-8 3-19 3-27 0z" fill="url(#gGl)"/><path d="M3 33h42l-3 5a3 3 0 0 1-2.6 1.5H8.6A3 3 0 0 1 6 38z" fill="url(#gS)" stroke="#8c94a3" stroke-width=".8"/><rect x="19" y="33" width="10" height="2" rx="1" fill="#7b8494"/></g>
<g id="i-tools"><g transform="rotate(-40 24 24)"><path d="M18.5 3.5h4v7h3v-7h4v9.5a6.5 6.5 0 0 1-4 6V41a3 3 0 0 1-6 0V19a6.5 6.5 0 0 1-4-6z" fill="url(#gS)" stroke="#7b8494" stroke-width=".8"/></g><g transform="rotate(40 24 24)"><rect x="21.5" y="22" width="5" height="22" rx="1.2" fill="url(#gS)" stroke="#7b8494" stroke-width=".6"/><path d="M20 4h8l1.4 18h-10.8z" fill="url(#gO)" stroke="#B8620F" stroke-width=".6"/><path d="M22 5h2l-.5 16H21z" fill="url(#gGl)"/></g></g>
<g id="i-box"><path d="M24 5 41 13.5 24 22 7 13.5z" fill="#FFE2B4"/><path d="M7 13.5 24 22v21L7 34.5z" fill="url(#gO)"/><path d="M41 13.5 24 22v21l17-8.5z" fill="#C9701A"/><path d="M15.5 9.3 32.5 17.8 24 22 7 13.5z" fill="#fff" opacity=".55"/><path d="M24 22v21" stroke="#8a4a0a" stroke-width=".8" opacity=".5"/></g>
<g id="i-chat"><path d="M8 8h32a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H22l-9 8v-8H8a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" fill="url(#gB)"/><path d="M8 8h32a4 4 0 0 1 4 4v6c-12 5-28 5-40 0v-6a4 4 0 0 1 4-4z" fill="url(#gGl)"/><circle cx="15" cy="21" r="2.6" fill="#fff"/><circle cx="24" cy="21" r="2.6" fill="#fff"/><circle cx="33" cy="21" r="2.6" fill="#fff"/></g>
<g id="i-pin"><ellipse cx="24" cy="44" rx="7" ry="1.8" fill="#000" opacity=".28"/><path d="M24 3a14 14 0 0 0-14 14c0 10 14 28 14 28s14-18 14-28A14 14 0 0 0 24 3z" fill="url(#gR)"/><circle cx="24" cy="17" r="5.5" fill="#fff"/><path d="M24 3a14 14 0 0 0-13.6 10.5C16 17 32 17 37.6 13.5A14 14 0 0 0 24 3z" fill="url(#gGl)"/></g>
<g id="i-coins"><path d="M8 32v5c0 2.8 7.2 5 16 5s16-2.2 16-5v-5z" fill="#B97A08"/><ellipse cx="24" cy="32" rx="16" ry="5" fill="url(#gY)"/><path d="M8 24v5c0 2.8 7.2 5 16 5s16-2.2 16-5v-5z" fill="#B97A08"/><ellipse cx="24" cy="24" rx="16" ry="5" fill="url(#gY)"/><path d="M8 16v5c0 2.8 7.2 5 16 5s16-2.2 16-5v-5z" fill="#B97A08"/><ellipse cx="24" cy="16" rx="16" ry="5" fill="url(#gY)"/><ellipse cx="24" cy="16" rx="10" ry="2.8" fill="none" stroke="#D69A12"/><path d="M14 14.5c4-2 16-2 20 0" stroke="#fff" stroke-opacity=".75" stroke-width="1.2" fill="none"/></g>
<g id="i-note"><rect x="9" y="7" width="30" height="37" rx="4" fill="url(#gS)" stroke="#8c94a3"/><rect x="14" y="3" width="20" height="8" rx="3" fill="url(#gD)"/><path d="M15 21h18M15 27h18M15 33h11" stroke="#F29A3C" stroke-width="2.4" stroke-linecap="round"/></g>
<g id="i-star"><path d="M24 4l5.8 12 13.2 1.8-9.6 9.2 2.4 13.1L24 33.8 12.2 40.1l2.4-13.1L5 17.8 18.2 16z" fill="url(#gY)" stroke="#c98a06" stroke-width="1" stroke-linejoin="round"/><path d="M24 4l5.8 12-5.8 2-5.8-2z" fill="#fff" opacity=".6"/></g>
<g id="i-wa"><circle cx="24" cy="24" r="21" fill="url(#gG)" stroke="#fff" stroke-width="2"/><path d="M24 10.5a13.5 13.5 0 0 0-11.6 20.4L10.5 37.5l6.8-1.8A13.5 13.5 0 1 0 24 10.5z" fill="#fff"/><path d="M19 17c-.8.8-1.4 2-.9 3.8 1.2 4 4.6 7.4 8.6 8.6 1.8.5 3-.1 3.8-.9l.9-1.2-3.5-2.1-1.5 1.5c-2.1-.9-4-2.8-4.9-4.9l1.5-1.5-2.1-3.5z" fill="#1fb85a"/></g>
<g id="i-check"><circle cx="24" cy="24" r="21" fill="url(#gG)"/><path d="M24 3a21 21 0 0 0-20 15c11 5 29 5 40 0A21 21 0 0 0 24 3z" fill="url(#gGl)"/><path d="M14 25l7 7 14-15" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></g>
<g id="i-clock"><circle cx="24" cy="24" r="20" fill="url(#gS)" stroke="#8c94a3" stroke-width="1.5"/><circle cx="24" cy="24" r="16" fill="#fff"/><path d="M24 12v12l8 5" stroke="#352C2B" stroke-width="3" stroke-linecap="round" fill="none"/><circle cx="24" cy="24" r="2" fill="#F29A3C"/></g>
<g id="i-mail"><rect x="5" y="11" width="38" height="27" rx="4" fill="url(#gS)" stroke="#8c94a3"/><path d="M6 14l18 14L42 14" fill="none" stroke="#8c94a3" stroke-width="2"/><path d="M5 15a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4L24 29z" fill="#fff" opacity=".75"/><circle cx="24" cy="27" r="3" fill="url(#gO)"/></g>
<g id="i-alert"><path d="M24 5L45 41a2.5 2.5 0 0 1-2.2 3.7H5.2A2.5 2.5 0 0 1 3 41z" fill="url(#gY)" stroke="#b97a08" stroke-width="1.2" stroke-linejoin="round"/><path d="M24 17v13" stroke="#352C2B" stroke-width="3.6" stroke-linecap="round"/><circle cx="24" cy="36.5" r="2.2" fill="#352C2B"/></g>
<g id="i-trash"><path d="M11 15h26l-2 27a3 3 0 0 1-3 2.8H16a3 3 0 0 1-3-2.8z" fill="url(#gS)" stroke="#7b8494"/><rect x="8" y="9" width="32" height="5" rx="2" fill="url(#gS)" stroke="#7b8494"/><path d="M18 5h12v4H18z" fill="#aab1bd"/><path d="M19 20v17M24 20v17M29 20v17" stroke="#8c94a3" stroke-width="2.2" stroke-linecap="round"/></g>
<g id="i-download"><path d="M6 32v8a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-8" fill="none" stroke="#c4c9d2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 5v25M14 21l10 10 10-10" fill="none" stroke="#7fb4ff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
<g id="i-plus"><circle cx="24" cy="24" r="21" fill="url(#gO)" stroke="#fff" stroke-width="2"/><path d="M24 3a21 21 0 0 0-20 15c11 5 29 5 40 0A21 21 0 0 0 24 3z" fill="url(#gGl)"/><path d="M24 14v20M14 24h20" stroke="#fff" stroke-width="5" stroke-linecap="round"/></g>
<g id="i-globe"><circle cx="24" cy="24" r="20" fill="url(#gB)"/><path d="M12 14c5-3 9 1 12-1s6 3 4 7-8 3-9 8-6 5-8 1-2-12 1-15zM30 30c4-2 8 1 7 5s-6 7-9 4 0-7 2-9z" fill="#4fd17f"/><ellipse cx="18" cy="12" rx="11" ry="6" fill="url(#gGl)"/><circle cx="24" cy="24" r="20" fill="none" stroke="#fff" stroke-opacity=".5"/></g>
<g id="i-logout"><path d="M20 6H10a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h10" fill="none" stroke="#c4c9d2" stroke-width="3.5" stroke-linecap="round"/><path d="M18 24h24M33 14l10 10-10 10" fill="none" stroke="#F29A3C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
<g id="i-chart"><rect x="6" y="26" width="9" height="16" rx="2" fill="url(#gB)"/><rect x="19" y="16" width="9" height="26" rx="2" fill="url(#gO)"/><rect x="32" y="7" width="9" height="35" rx="2" fill="url(#gG)"/><path d="M4 44.5h40" stroke="#c4c9d2" stroke-width="2.5" stroke-linecap="round"/></g>
<g id="i-cart"><path d="M3 5h5l2 7" fill="none" stroke="#c4c9d2" stroke-width="3.5" stroke-linecap="round"/><path d="M10 12h34l-5 18H16z" fill="url(#gS)" stroke="#7b8494"/><path d="M20 16v10M27 16v10M34 16v10" stroke="#8c94a3" stroke-width="1.8"/><path d="M14 34h24" stroke="#aab1bd" stroke-width="2.5" stroke-linecap="round"/><circle cx="19" cy="40" r="3.5" fill="url(#gO)"/><circle cx="35" cy="40" r="3.5" fill="url(#gO)"/></g>
<g id="i-brief"><path d="M17 14v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" fill="none" stroke="#B8620F" stroke-width="3"/><rect x="4" y="14" width="40" height="27" rx="4" fill="url(#gO)"/><path d="M4 25h40" stroke="#B8620F" stroke-width="1.5"/><rect x="20" y="22" width="8" height="7" rx="1.5" fill="url(#gD)"/><path d="M5 18a3 3 0 0 1 3-3h32a3 3 0 0 1 3 3v4c-13 4-25 4-38 0z" fill="url(#gGl)"/></g>
<g id="i-inbox"><path d="M5 28l6-17a3 3 0 0 1 2.8-2h20.4a3 3 0 0 1 2.8 2l6 17v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" fill="url(#gS)" stroke="#8c94a3"/><path d="M5 28h12a3 3 0 0 1 3 3 4 4 0 0 0 8 0 3 3 0 0 1 3-3h12" fill="none" stroke="#8c94a3" stroke-width="2"/></g>
<g id="i-disc"><circle cx="24" cy="24" r="20" fill="url(#gS)" stroke="#8c94a3"/><path d="M24 4a20 20 0 0 1 14 6L24 24z" fill="#7ec8ff" opacity=".55"/><path d="M24 44a20 20 0 0 1-14-6L24 24z" fill="#ffb86b" opacity=".5"/><circle cx="24" cy="24" r="8" fill="none" stroke="#8c94a3"/><circle cx="24" cy="24" r="4.5" fill="#2a1f1d"/></g>
<g id="i-monitor"><rect x="4" y="6" width="40" height="27" rx="3" fill="url(#gD)"/><rect x="7" y="9" width="34" height="21" rx="1.5" fill="url(#gB)"/><path d="M7 9h34v9c-10 4-24 4-34 0z" fill="url(#gGl)"/><path d="M18 33h12l2 8H16z" fill="url(#gS)"/><rect x="12" y="40" width="24" height="3.5" rx="1.7" fill="url(#gS)" stroke="#8c94a3" stroke-width=".6"/></g>
<g id="i-keyboard"><rect x="3" y="12" width="42" height="26" rx="4" fill="url(#gD)" stroke="#6b5a56"/><path d="M7 18h34M7 24h34" stroke="#cfd3da" stroke-width="4" stroke-dasharray="4 1.6"/><rect x="14" y="29.5" width="20" height="4" rx="1" fill="#cfd3da"/></g>
<g id="i-battery"><rect x="4" y="13" width="36" height="22" rx="4" fill="url(#gD)" stroke="#6b5a56"/><rect x="40" y="19" width="4" height="10" rx="1.5" fill="#8c94a3"/><rect x="7" y="16" width="30" height="16" rx="2" fill="url(#gG)"/><path d="M7 18a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v3c-10 3-20 3-30 0z" fill="url(#gGl)"/><path d="M25 17l-8 8h6l-3 7 9-9h-6z" fill="#fff"/></g>
<g id="i-ram"><rect x="3" y="12" width="42" height="24" rx="2" fill="url(#gP)" stroke="#0f5a39"/><g fill="#1a1312"><rect x="7" y="16" width="7" height="13" rx="1"/><rect x="16" y="16" width="7" height="13" rx="1"/><rect x="25" y="16" width="7" height="13" rx="1"/><rect x="34" y="16" width="7" height="13" rx="1"/></g><path d="M8 18h5M17 18h5M26 18h5M35 18h5" stroke="#fff" stroke-opacity=".4" stroke-width="1.2"/><path d="M5 34h38" stroke="#FFC83A" stroke-width="3.6" stroke-dasharray="1.8 1.2"/></g>
<g id="i-cpu"><path d="M16 7v4M24 7v4M32 7v4M16 37v4M24 37v4M32 37v4M7 16h4M7 24h4M7 32h4M37 16h4M37 24h4M37 32h4" stroke="#c4c9d2" stroke-width="2.6" stroke-linecap="round"/><rect x="11" y="11" width="26" height="26" rx="3" fill="url(#gD)" stroke="#6b5a56"/><rect x="17" y="17" width="14" height="14" rx="2" fill="url(#gO)"/><path d="M17 19a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3c-5 2-9 2-14 0z" fill="url(#gGl)"/></g>
<g id="i-fan"><circle cx="24" cy="24" r="20" fill="url(#gD)" stroke="#6b5a56"/><g fill="url(#gS)" stroke="#7b8494" stroke-width=".6"><path id="i-blade" d="M24 24C20 16 22 7 29 7 35 7 33 18 24 24z"/><use href="#i-blade" transform="rotate(90 24 24)"/><use href="#i-blade" transform="rotate(180 24 24)"/><use href="#i-blade" transform="rotate(270 24 24)"/></g><circle cx="24" cy="24" r="4" fill="url(#gO)"/></g>
<g id="i-shield"><path d="M24 4l16 6v12c0 11-7 19-16 22C15 41 8 33 8 22V10z" fill="url(#gB)" stroke="#1d4bb5"/><path d="M24 4l16 6v6C30 20 18 20 8 16v-6z" fill="url(#gGl)"/><path d="M16 24l6 6 11-12" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
<g id="i-search"><circle cx="20" cy="20" r="13" fill="#bfe3ff" fill-opacity=".5" stroke="url(#gS)" stroke-width="4"/><path d="M13 14a9 9 0 0 1 9-4" stroke="#fff" stroke-width="2.5" stroke-linecap="round" fill="none"/><path d="M30 30l12 12" stroke="#F29A3C" stroke-width="6.5" stroke-linecap="round"/></g>
<g id="i-gear"><g fill="url(#gS)" stroke="#7b8494" stroke-width=".8"><rect id="i-tooth" x="20.5" y="3" width="7" height="10" rx="1.6"/><use href="#i-tooth" transform="rotate(45 24 24)"/><use href="#i-tooth" transform="rotate(90 24 24)"/><use href="#i-tooth" transform="rotate(135 24 24)"/><use href="#i-tooth" transform="rotate(180 24 24)"/><use href="#i-tooth" transform="rotate(225 24 24)"/><use href="#i-tooth" transform="rotate(270 24 24)"/><use href="#i-tooth" transform="rotate(315 24 24)"/><circle cx="24" cy="24" r="14"/></g><circle cx="24" cy="24" r="14" fill="url(#gGl)" opacity=".55"/><circle cx="24" cy="24" r="6.5" fill="url(#gD)" stroke="#6b5a56"/></g>
</defs></svg>`;
document.body.insertAdjacentHTML('afterbegin', SPRITE);
const ico = n => `<svg class="ico" viewBox="0 0 48 48" aria-hidden="true"><use href="#i-${n}"/></svg>`;

/* ---------- helper ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const rupiah = n => 'Rp ' + Number(n || 0).toLocaleString('id-ID');
const fmtDate = t => new Date(t).toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
const slug = s => String(s).toLowerCase().replace(/\s+/g, '-');
const badge = s => `<span class="badge s-${slug(s)}">${esc(s)}</span>`;
const stars = n => { const r = Math.round(n); return `<span class="stars">${'★'.repeat(r)}<i>${'★'.repeat(5 - r)}</i></span>`; };
const normWA = v => { let d = String(v).replace(/\D/g, ''); if (d.startsWith('0')) d = '62' + d.slice(1); return d; };
const waLink = (text, num = CONFIG.wa) => `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
function uid(p) { const a = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let s = ''; for (let i = 0; i < 5; i++) s += a[Math.floor(Math.random() * a.length)]; return p + '-' + s; }

/* ---------- data (dari server) ---------- */
const CACHE = { products: [], orders: [], services: [], sells: [], reviews: [] };
const PUB = { svcDone: 0 };
const list = c => CACHE[c] || [];
async function api(url, method = 'GET', body) {
  let r;
  try { r = await fetch(url, { method, headers: body !== undefined ? { 'Content-Type': 'application/json' } : {}, body: body !== undefined ? JSON.stringify(body) : undefined, credentials: 'same-origin' }); }
  catch (e) { const err = new Error(location.protocol === 'file:' ? 'Halaman dibuka langsung dari file. Jalankan server (node server.js) lalu buka http://localhost:3000' : 'Tidak dapat terhubung ke server. Periksa koneksi internet.'); err.offline = true; throw err; }
  let d = null; try { d = await r.json(); } catch (e) { }
  if (!r.ok) { const err = new Error((d && d.error) || 'Terjadi kesalahan (' + r.status + ')'); err.status = r.status; throw err; }
  return d;
}
function applySettings(s) { if (!s) return; Object.assign(CONFIG, { wa: s.wa, address: s.address, hours: s.hours, email: s.email, merchant: s.merchant, qrisImage: s.qris ? '/api/qris?v=' + s.qrisV : '' }); }
async function loadPublic() { const d = await api('/api/public'); CACHE.products = d.products; CACHE.reviews = d.reviews; PUB.svcDone = d.svcDone; applySettings(d.settings); }
async function loadAdmin() { Object.assign(CACHE, await api('/api/admin/data')); applySettings(CACHE.settings); }
const ratingInfo = () => {
  const r = list('reviews'); const n = r.length;
  const avg = n ? r.reduce((a, b) => a + b.rating, 0) / n : 0;
  const dist = [5, 4, 3, 2, 1].map(s => r.filter(x => x.rating === s).length);
  return { n, avg, dist };
};

/* ---------- UI ---------- */
function toast(msg, type = 'ok') {
  let w = $('#toasts'); if (!w) { w = document.createElement('div'); w.id = 'toasts'; document.body.appendChild(w); }
  const t = document.createElement('div'); t.className = 'toast ' + type; t.textContent = msg; w.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 300); }, 3200);
}
function openModal(html, cls = '') {
  closeModal();
  const b = document.createElement('div'); b.className = 'modal-back';
  b.innerHTML = `<div class="modal glass ${cls}" role="dialog" aria-modal="true"><button class="modal-x" aria-label="Tutup" data-close>✕</button>${html}</div>`;
  b.addEventListener('click', e => { if (e.target === b || e.target.closest('[data-close]')) closeModal(); });
  document.body.appendChild(b); document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => b.classList.add('show'));
  return b.querySelector('.modal');
}
function closeModal() { const b = $('.modal-back'); if (b) b.remove(); document.body.style.overflow = ''; }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

let _svgN = 0;
function laptopSVG(h = 28) {
  const n = ++_svgN;
  return `<svg viewBox="0 0 240 150" class="lap" aria-hidden="true"><defs><linearGradient id="ls${n}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${h} 95% 62%)"/><stop offset="1" stop-color="hsl(${(h + 50) % 360} 80% 36%)"/></linearGradient><linearGradient id="lg${n}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><rect x="40" y="10" width="160" height="104" rx="9" fill="#1c1514" stroke="rgba(255,255,255,.35)"/><rect x="47" y="17" width="146" height="90" rx="4" fill="url(#ls${n})"/><path d="M47 17h146v38c-40 14-100 14-146 0z" fill="url(#lg${n})"/><path d="M18 120h204l-12 14a8 8 0 0 1-6 3H36a8 8 0 0 1-6-3z" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.42)"/><rect x="100" y="120" width="40" height="5" rx="2.5" fill="rgba(255,255,255,.38)"/><circle cx="120" cy="13" r="1.6" fill="rgba(255,255,255,.55)"/></svg>`;
}
function compressImage(file, max = 800, q = .72) {
  return new Promise((res, rej) => {
    const r = new FileReader(); r.onerror = rej;
    r.onload = () => {
      const im = new Image(); im.onerror = rej;
      im.onload = () => {
        const k = Math.min(1, max / Math.max(im.width, im.height));
        const c = document.createElement('canvas'); c.width = Math.round(im.width * k); c.height = Math.round(im.height * k);
        c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); res(c.toDataURL('image/jpeg', q));
      };
      im.src = r.result;
    };
    r.readAsDataURL(file);
  });
}

/* ---------- QRIS (contoh / demo) ---------- */
function fakeQR() {
  const N = 29, m = Array.from({ length: N }, () => Array(N).fill(0)); let s = 20261103;
  const rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) m[y][x] = rnd() < .48 ? 1 : 0;
  const finder = (ox, oy) => { for (let y = -1; y <= 7; y++) for (let x = -1; x <= 7; x++) { const X = ox + x, Y = oy + y; if (X < 0 || Y < 0 || X >= N || Y >= N) continue; const edge = x === -1 || y === -1 || x === 7 || y === 7, ring = x === 0 || y === 0 || x === 6 || y === 6, core = x >= 2 && x <= 4 && y >= 2 && y <= 4; m[Y][X] = edge ? 0 : (ring || core) ? 1 : 0; } };
  finder(0, 0); finder(N - 7, 0); finder(0, N - 7);
  for (let i = 8; i < N - 8; i++) { m[6][i] = i % 2 ? 0 : 1; m[i][6] = i % 2 ? 0 : 1; }
  let d = ''; for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (m[y][x]) d += `M${x + 2} ${y + 2}h1v1h-1z`;
  const T = N + 4;
  return `<svg class="qr" viewBox="0 0 ${T} ${T}" shape-rendering="crispEdges" role="img" aria-label="QR contoh"><rect width="${T}" height="${T}" fill="#fff"/><path d="${d}" fill="#1a1312"/><rect x="13" y="13" width="7" height="7" rx="1.6" fill="#F29A3C" stroke="#fff" stroke-width="1"/></svg>`;
}
function qrisBox(total) {
  const demo = !CONFIG.qrisImage;
  return `<div class="qris"><div class="qris-h"><b>QRIS</b>${demo ? '<span class="qris-demo">DEMO</span>' : ''}</div><div class="qris-m">${esc(CONFIG.merchant)}</div>${demo ? fakeQR() : `<img class="qr" src="${esc(CONFIG.qrisImage)}" alt="QRIS ${esc(CONFIG.merchant)}">`}<div class="qris-t">${rupiah(total)}</div><div class="qris-n">${demo ? 'QR contoh, bukan pembayaran sungguhan. Tidak bisa dipindai.' : 'Scan dengan aplikasi bank atau e-wallet, lalu kirim bukti bayar via WhatsApp.'}</div></div>`;
}
