(function(){
var WA='';
var root=document.documentElement;
var hdr=document.getElementById('hdr');
function onScroll(){hdr.classList.toggle('scrolled',window.scrollY>10);}
addEventListener('scroll',onScroll,{passive:true});onScroll();
var b=document.getElementById('burger'),m=document.getElementById('mnav');
b.addEventListener('click',function(){var o=m.hidden;m.hidden=!o;b.setAttribute('aria-expanded',String(o));});
document.querySelectorAll('[data-close]').forEach(function(a){a.addEventListener('click',function(){m.hidden=true;b.setAttribute('aria-expanded','false');});});
var tabs=[].slice.call(document.querySelectorAll('.tab'));
function select(t,focus){tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',String(on));x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on;});if(focus)t.focus();}
tabs.forEach(function(t,i){
t.addEventListener('click',function(){select(t,false);});
t.addEventListener('keydown',function(e){var n=null;if(e.key==='ArrowLeft')n=tabs[(i+1)%tabs.length];if(e.key==='ArrowRight')n=tabs[(i-1+tabs.length)%tabs.length];if(e.key==='Home')n=tabs[0];if(e.key==='End')n=tabs[tabs.length-1];if(n){e.preventDefault();select(n,true);}});
});
var f=document.getElementById('lead');
f.addEventListener('submit',function(e){e.preventDefault();
var g=function(n){return (f.elements[n]&&f.elements[n].value)||'';};
var lines=['שלום, הגעתי מהאתר של Element Diamonds.','שם: '+g('name'),'טלפון: '+g('phone'),'מתעניין/ת ב: '+g('type')];
if(g('message'))lines.push('הערות: '+g('message'));
if(WA)window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(lines.join(String.fromCharCode(10))),'_blank','noopener');
[].slice.call(f.children).forEach(function(c){if(c.id!=='sent')c.hidden=true;});
document.getElementById('sent').hidden=false;
});
document.getElementById('yr').textContent=new Date().getFullYear();
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
root.classList.add('js');
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){var d=[].indexOf.call(en.target.parentNode.children,en.target);en.target.style.transitionDelay=Math.min(d,4)*90+'ms';en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
els.forEach(function(el){io.observe(el);});
}
})();
(function(){
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var intro=document.getElementById('intro');
function hideIntro(){if(intro)intro.classList.add('done');}
if(rm){hideIntro();}else{var t0=performance.now();addEventListener('load',function(){setTimeout(hideIntro,Math.max(0,1300-(performance.now()-t0)));});setTimeout(hideIntro,2600);}
var bar=document.getElementById('progress');
function prog(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')';}
addEventListener('scroll',prog,{passive:true});prog();
if(rm)return;
var cv=document.getElementById('dust');
if(cv&&cv.getContext){
var ctx=cv.getContext('2d'),W=0,H=0,dpr=1,ps=[],vis=true;
function size(){var r=cv.getBoundingClientRect();dpr=Math.min(devicePixelRatio||1,2);W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);}
size();addEventListener('resize',size);
var n=Math.round(Math.min(70,W/18));
for(var i=0;i<n;i++)ps.push({x:Math.random()*W,y:Math.random()*H,r:.6+Math.random()*1.8,v:.15+Math.random()*.45,d:Math.random()*Math.PI*2,s:.5+Math.random()*1.5});
new IntersectionObserver(function(e){vis=e[0].isIntersecting;}).observe(cv);
(function tick(t){
if(vis){ctx.clearRect(0,0,W,H);
for(var i=0;i<ps.length;i++){var p=ps[i];p.y-=p.v;p.x+=Math.sin(t/2000+p.d)*.25;if(p.y<-5){p.y=H+5;p.x=Math.random()*W;}
var a=.25+.55*(.5+.5*Math.sin(t/600*p.s+p.d));
ctx.beginPath();ctx.fillStyle='rgba(194,162,102,'+a.toFixed(3)+')';ctx.shadowColor='rgba(233,211,160,.9)';ctx.shadowBlur=6;ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();}
ctx.shadowBlur=0;}
requestAnimationFrame(tick);})(0);
}
var fine=matchMedia('(hover: hover) and (pointer: fine)').matches;
if(!fine)return;
var art=document.getElementById('heroArt');
var dia=art&&art.querySelector('.diamond');
if(art)art.addEventListener('animationend',function(e){if(e.target===art)art.style.animation='none';});
if(art){art.parentNode.addEventListener('mousemove',function(e){var r=art.getBoundingClientRect();var x=(e.clientX-(r.left+r.width/2))/r.width,y=(e.clientY-(r.top+r.height/2))/r.height;art.style.transform='perspective(900px) rotateY('+(x*10).toFixed(2)+'deg) rotateX('+(-y*10).toFixed(2)+'deg)';if(dia)dia.style.translate=(x*16).toFixed(1)+'px '+(y*16).toFixed(1)+'px';});
art.parentNode.addEventListener('mouseleave',function(){art.style.transform='';if(dia)dia.style.translate='';});}
document.querySelectorAll('.card').forEach(function(c){
c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();var x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transition='transform .1s';c.style.transform='perspective(800px) rotateY('+(x*8).toFixed(2)+'deg) rotateX('+(-y*8).toFixed(2)+'deg) translateY(-8px)';});
c.addEventListener('mouseleave',function(){c.style.transition='';c.style.transform='';});
});
})();
