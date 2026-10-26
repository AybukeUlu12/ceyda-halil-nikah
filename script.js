const cover=document.getElementById('cover');
const invitation=document.getElementById('invitation');
const openButton=document.getElementById('open');
const music=document.getElementById('music');
const musicToggle=document.getElementById('musicToggle');
function openInvitation(){if(cover.classList.contains('is-open'))return;invitation.inert=false;invitation.classList.add('is-visible');cover.classList.add('is-open');musicToggle.hidden=false;music.play().then(()=>{musicToggle.classList.remove('muted')}).catch(()=>{musicToggle.classList.add('muted')});setTimeout(()=>cover.hidden=true,1050)}
openButton.addEventListener('click',openInvitation);
musicToggle.addEventListener('click',()=>{if(music.paused){music.play().then(()=>musicToggle.classList.remove('muted')).catch(()=>{})}else{music.pause();musicToggle.classList.add('muted')}});
const target=new Date('2026-11-01T13:15:00+03:00').getTime();
function updateCountdown(){let left=Math.max(0,target-Date.now());const days=Math.floor(left/86400000);left%=86400000;const hours=Math.floor(left/3600000);left%=3600000;const minutes=Math.floor(left/60000);left%=60000;const seconds=Math.floor(left/1000);for(const [id,val] of Object.entries({days,hours,minutes,seconds}))document.getElementById(id).textContent=String(val).padStart(2,'0')}
updateCountdown();setInterval(updateCountdown,1000);
