'use strict';
const deadline=new Date('2026-11-01T13:15:00+03:00').getTime();
const pad=n=>String(n).padStart(2,'0');
function updateCountdown(){const total=Math.max(0,Math.floor((deadline-Date.now())/1000));const values=[Math.floor(total/86400),Math.floor(total%86400/3600),Math.floor(total%3600/60),total%60];['days','hours','minutes','seconds'].forEach((id,i)=>{document.getElementById(id).textContent=pad(values[i]);});}
updateCountdown();setInterval(updateCountdown,1000);
const cover=document.getElementById('cover');const audio=document.getElementById('music');const toggle=document.getElementById('musicToggle');
function openInvitation(){cover.classList.add('opened');audio.play().catch(()=>{});}
cover.addEventListener('click',openInvitation);cover.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openInvitation();}});
toggle.addEventListener('click',()=>{if(audio.paused){audio.play().catch(()=>{});}else{audio.pause();}});

function syncMusicIcon(){toggle.classList.toggle('is-muted',audio.paused);toggle.setAttribute('aria-label',audio.paused?'Müziği aç':'Müziği kapat');}
audio.addEventListener('play',syncMusicIcon);audio.addEventListener('pause',syncMusicIcon);audio.addEventListener('ended',syncMusicIcon);syncMusicIcon();
