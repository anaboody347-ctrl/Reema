function openLetter() {

document.querySelector(".hero").style.display="none";

document.getElementById("letter").style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

}

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.transition="transform 8s linear, opacity 8s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(110vh)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,300);

document.addEventListener("mousemove",function(e){

const dot=document.createElement("div");

dot.innerHTML="✨";

dot.style.position="fixed";

dot.style.left=e.clientX+"px";

dot.style.top=e.clientY+"px";

dot.style.pointerEvents="none";

dot.style.fontSize="12px";

dot.style.transition=".8s";

document.body.appendChild(dot);

setTimeout(()=>{

dot.style.opacity="0";

dot.style.transform="translateY(-20px)";

},50);

setTimeout(()=>{

dot.remove();

},800);

});
