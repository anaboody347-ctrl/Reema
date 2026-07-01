function showLetter() {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("letter").style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ❤️ قلوب متطايرة
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.opacity = "1";
    heart.style.transition = "transform 8s linear, opacity 8s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(110vh)";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 350);

// ✨ نجوم مع حركة الماوس
document.addEventListener("mousemove", function(e){

    let star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";
    star.style.pointerEvents = "none";
    star.style.fontSize = "12px";
    star.style.transition = ".8s";

    document.body.appendChild(star);

    setTimeout(()=>{
        star.style.opacity="0";
        star.style.transform="translateY(-20px)";
    },50);

    setTimeout(()=>{
        star.remove();
    },800);

});

// ❤️ عند الضغط على سامحتك
document.addEventListener("click",function(e){

    if(e.target.classList.contains("forgive")){

        for(let i=0;i<100;i++){

            setTimeout(createHeart,i*30);

        }

        e.target.innerHTML="🥹 بحبك يا بطتي ❤️";

        alert("❤️ شكراً يا ريم... بحبك وهفضل أحبك كل يوم ❤️");

    }

});

// 📸 تكبير الصور
document.querySelectorAll(".photos img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="10000";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="20px";

overlay.appendChild(image);

overlay.onclick=function(){

overlay.remove();

}

document.body.appendChild(overlay);

});

});
