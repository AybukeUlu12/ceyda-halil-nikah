const cover=document.getElementById('cover');
const openButton=document.getElementById('open');
const invitation=document.getElementById('invitation');
const music=document.getElementById('music');
const toggle=document.getElementById('musicToggle');
let opened=false;
function updateMusic(){toggle.classList.toggle('muted',music.paused);toggle.setAttribute('aria-label',music.paused?'Müziği aç':'Müziği kapat');}
function startMusic(){const p=music.play();if(p&&typeof p.catch==='function')p.catch(()=>updateMusic());}
openButton.addEventListener('click',()=>{
  if(opened)return;opened=true;
  // Must run inside the actual user gesture for iPhone autoplay permissions.
  startMusic();
  invitation.inert=false;
  invitation.classList.add('visible');
  cover.classList.add('opening');
  toggle.hidden=false;
  updateMusic();
  cover.addEventListener('animationend',e=>{if(e.target===cover){cover.hidden=true;}},{once:true});
  setTimeout(()=>{cover.hidden=true;},1750);
});
toggle.addEventListener('click',()=>{if(music.paused)startMusic();else music.pause();});
music.addEventListener('play',updateMusic);
music.addEventListener('pause',updateMusic);
music.addEventListener('error',()=>{toggle.classList.add('muted');toggle.title='Müzik yüklenemedi';});
const target=new Date('2026-11-01T13:15:00+03:00').getTime();
function tick(){const remaining=Math.max(0,target-Date.now());const values=[Math.floor(remaining/86400000),Math.floor(remaining/3600000)%24,Math.floor(remaining/60000)%60,Math.floor(remaining/1000)%60];['days','hours','minutes','seconds'].forEach((id,i)=>{document.getElementById(id).textContent=String(values[i]).padStart(2,'0');});}
tick();setInterval(tick,1000);
