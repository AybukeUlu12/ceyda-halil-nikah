const cover=document.getElementById("cover");
const invite=document.getElementById("invitation");
const audio=document.getElementById("musicAudio");
const toggle=document.getElementById("musicToggle");
document.getElementById("open").addEventListener("click",()=>{
  invite.inert=false;invite.classList.add("visible");cover.classList.add("hidden");
  audio.play().then(()=>toggle.classList.remove("muted")).catch(()=>toggle.classList.add("muted"));
});
toggle.addEventListener("click",()=>{
  if(audio.paused){audio.play().then(()=>toggle.classList.remove("muted")).catch(()=>toggle.classList.add("muted"));}
  else{audio.pause();toggle.classList.add("muted");}
});
const target=new Date("2026-11-01T13:15:00+03:00").getTime();
function update(){
 const remaining=Math.max(0,Math.floor((target-Date.now())/1000));
 const nums=[Math.floor(remaining/86400),Math.floor(remaining%86400/3600),Math.floor(remaining%3600/60),remaining%60];
 ["days","hours","minutes","seconds"].forEach((id,i)=>document.getElementById(id).textContent=String(nums[i]).padStart(2,"0"));
}
update();setInterval(update,1000);
