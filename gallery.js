(function(){
var box=document.getElementById('reels');if(!box)return;
var vids=[].slice.call(box.querySelectorAll('video'));
var btn=document.getElementById('galPlay');
var paused=matchMedia('(prefers-reduced-motion: reduce)').matches;
function load(v){if(!v.src&&v.dataset.src){v.src=v.dataset.src;}}
function setBtn(){btn.setAttribute('aria-pressed',String(paused));btn.setAttribute('aria-label',paused?'הפעלת הסרטונים':'עצירת הסרטונים');}
function sync(){vids.forEach(function(v){if(!paused&&v._vis){load(v);var p=v.play();if(p&&p.catch)p.catch(function(){});}else{v.pause();}});}
if('IntersectionObserver' in window){
var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target._vis=e.isIntersecting;if(e.isIntersecting&&!paused)load(e.target);});sync();},{rootMargin:'200px'});
vids.forEach(function(v){io.observe(v);});
}else{vids.forEach(function(v){v._vis=true;});sync();}
btn.addEventListener('click',function(){paused=!paused;if(!paused)vids.forEach(function(v){if(v._vis)load(v);});setBtn();sync();});
setBtn();
function step(dir){var r=box.querySelector('.reel');var w=r?r.getBoundingClientRect().width+22:300;box.scrollBy({left:dir*w*-1,behavior:'smooth'});}
document.getElementById('galNext').addEventListener('click',function(){step(1);});
document.getElementById('galPrev').addEventListener('click',function(){step(-1);});
document.addEventListener('visibilitychange',function(){if(document.hidden)vids.forEach(function(v){v.pause();});else sync();});
})();
