import"./modulepreload-polyfill-9p4a8sJU.js";(function(){const l=document.querySelectorAll(".about-button"),n=document.querySelector(".title"),a=document.querySelectorAll(".bg-button"),i=["2022년 6월 29일 수요일 밤 9시 첫방송! 본방사수","이상한 변호사 우영우의 대형 로펌 생존기","똑바로 읽어도 거꾸로 읽어도 우영우입니다"];let o=0;const u=t=>{const e=t.target,r=e.dataset.target,b=document.querySelector(`#${r}`),h=e.parentNode.children[0];b.classList.toggle("show"),h.classList.toggle("darken")},s=()=>i[Math.floor(Math.random()*3)],d=()=>{n.textContent="",o=0,c(s())},c=t=>{n.textContent.length<t.length?(n.textContent+=t.charAt(o),o++,setTimeout(()=>{c(t)},100)):setTimeout(d,3500)},g=t=>{const e=t.target.id,r=document.querySelector(".container");r.style.backgroundImage=`url('/memories/assets/images/extraordinary-attorney_${e}.webp')`};function m(){l.forEach(t=>t.addEventListener("click",u)),a.forEach(t=>t.addEventListener("click",g)),c(s())}m()})();