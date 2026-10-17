(function(){
var root=document.getElementById('heroPhoto');if(!root)return;
var imgs=[].slice.call(root.querySelectorAll('.hp-img'));
var dots=[].slice.call(root.querySelectorAll('.hp-dots i'));
var num=document.getElementById('hpNum');
var btn=document.getElementById('hpPause');
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var i=0,paused=rm,t=null;
function show(n){i=(n+imgs.length)%imgs.length;imgs.forEach(function(im,k){im.classList.toggle('on',k===i);});dots.forEach(function(d,k){d.classList.toggle('on',k===i);});num.textContent='0'+(i+1);}
function run(){clearInterval(t);if(!paused)t=setInterval(function(){if(!document.hidden)show(i+1);},5500);}
function setBtn(){btn.setAttribute('aria-pressed',String(paused));btn.setAttribute('aria-label',paused?'הפעלת החלפת התמונות':'עצירת החלפת התמונות');}
btn.addEventListener('click',function(){paused=!paused;setBtn();if(!paused)show(i+1);run();});
setBtn();run();
if(rm||!matchMedia('(hover: hover) and (pointer: fine)').matches)return;
var frame=root.querySelector('.hp-frame'),arch=root.querySelector('.hp-arch');
var host=root.parentNode;
host.addEventListener('mousemove',function(e){var r=root.getBoundingClientRect();var x=(e.clientX-(r.left+r.width/2))/r.width,y=(e.clientY-(r.top+r.height/2))/r.height;frame.style.transform='translate('+(-x*14).toFixed(1)+'px,'+(-y*14).toFixed(1)+'px)';arch.style.transform='translate('+(x*6).toFixed(1)+'px,'+(y*6).toFixed(1)+'px)';});
host.addEventListener('mouseleave',function(){frame.style.transform='';arch.style.transform='';});
arch.style.transition='transform .9s cubic-bezier(.2,.7,.2,1)';
})();
