const filters=document.querySelectorAll(".filter"),tiles=document.querySelectorAll(".tile");
filters.forEach(btn=>btn.addEventListener("click",()=>{filters.forEach(b=>b.classList.remove("active"));btn.classList.add("active");const f=btn.dataset.filter;tiles.forEach(t=>t.classList.toggle("hide",f!=="todos"&&t.dataset.cat!==f))}));
const lb=document.getElementById("lightbox"),lbImg=document.getElementById("lightbox-img");
tiles.forEach(t=>t.addEventListener("click",()=>{lbImg.src=t.querySelector("img").src;lbImg.alt=t.querySelector("img").alt;lb.classList.add("open");lb.setAttribute("aria-hidden","false")}));
function closeLb(){lb.classList.remove("open");lb.setAttribute("aria-hidden","true");lbImg.src=""}
document.querySelector(".close").addEventListener("click",closeLb);lb.addEventListener("click",e=>{if(e.target===lb)closeLb()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLb()});