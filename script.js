// إظهار الرسالة
function showLetter() {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("letter").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// قلوب متطايرة
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
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

setInterval(createHeart, 300);

// تأثير النجوم مع حركة الماوس
document.addEventListener("mousemove", function (e) {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";
    star.style.pointerEvents = "none";
    star.style.fontSize = "12px";
    star.style.transition = ".8s";

    document.body.appendChild(star);

    setTimeout(() => {
        star.style.opacity = "0";
        star.style.transform = "translateY(-20px)";
    }, 50);

    setTimeout(() => {
        star.remove();
    }, 800);

});

// زر سامحتك
const forgive = document.querySelector(".forgive");

if (forgive) {

    forgive.onclick = function () {

        for (let i = 0; i < 80; i++) {

            setTimeout(createHeart, i * 50);

        }

        alert("❤️ بحبك يا ريم... وشكرًا إنك سامحتيني ❤️");

    }

}
