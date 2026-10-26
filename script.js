const cover=document.getElementById('cover');
const openButton=document.getElementById('open');
const invitation=document.getElementById('invitation');
const music=document.getElementById('music');
const toggle=document.getElementById('musicToggle');
let opened=false;
function syncMusic(){toggle.classList.toggle('muted',music.paused);toggle.setAttribute('aria-label',music.paused?'Müziği aç':'Müziği kapat');}
function playMusic(){const promise=music.play();if(promise&&promise.catch)promise.catch(syncMusic);}
openButton.addEventListener('click',()=>{
 if(opened)return;opened=true;
 playMusic(); // iPhone requires playback inside this direct tap event.
 invitation.inert=false;invitation.classList.add('visible');
 cover.classList.add('opening');toggle.hidden=false;
 window.setTimeout(()=>{cover.hidden=true;},950);
});
toggle.addEventListener('click',()=>{if(music.paused)playMusic();else music.pause();});
music.addEventListener('play',syncMusic);music.addEventListener('pause',syncMusic);
music.addEventListener('error',()=>{toggle.classList.add('muted');toggle.title='Müzik dosyası yüklenemedi';});
const target=Date.parse('2026-11-01T13:15:00+03:00');
function updateCountdown(){const diff=Math.max(0,target-Date.now());const parts=[Math.floor(diff/86400000),Math.floor(diff/3600000)%24,Math.floor(diff/60000)%60,Math.floor(diff/1000)%60];['days','hours','minutes','seconds'].forEach((id,i)=>{document.getElementById(id).textContent=String(parts[i]).padStart(2,'0');});}
updateCountdown();setInterval(updateCountdown,1000);
