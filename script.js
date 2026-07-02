function showLetter() {

document.getElementById("letter").style.display = "block";

window.scrollTo({
top: document.body.scrollHeight,
behavior: "smooth"
});

}

const hearts = document.querySelector(".hearts");

function createHeart(){

const heart = document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*35)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,300);

const photos=document.querySelectorAll(".photos img");

photos.forEach(photo=>{

photo.addEventListener("mouseenter",()=>{

photo.style.transform="scale(1.08) rotate(2deg)";

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform="scale(1)";

});

});

const btn=document.querySelector(".forgive");

btn.addEventListener("click",()=>{

btn.innerHTML="❤️ وأنا كمان بحبك يا بيروو ❤️";

btn.style.background="#ff2d55";

btn.style.color="white";

alert("❤️ ربنا يخليكي ليا يا أجمل حاجة في حياتي ❤️");

});
