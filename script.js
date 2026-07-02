function showLetter() {

    // إخفاء الصفحة الأولى
    document.querySelector(".hero").style.display = "none";

    // إظهار الرسالة
    document.getElementById("letter").style.display = "block";

    // تشغيل الأغنية
    const song = document.getElementById("song");
    if (song) {
        song.play().catch(function (error) {
            console.log("تعذر تشغيل الأغنية:", error);
        });
    }

    // النزول للرسالة
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// إنشاء القلوب
const hearts = document.querySelector(".hearts");

function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 300);

// تأثير الصور
const photos = document.querySelectorAll(".photos img");

photos.forEach(photo => {

    photo.addEventListener("mouseenter", () => {
        photo.style.transform = "scale(1.08) rotate(2deg)";
    });

    photo.addEventListener("mouseleave", () => {
        photo.style.transform = "scale(1)";
    });

});

// زر النهاية
const btn = document.querySelector(".forgive");

if (btn) {

    btn.addEventListener("click", () => {

        btn.innerHTML = "❤️ وأنا بحبك أكتر يا بيروو ❤️";

        btn.style.background = "#ff2d55";
        btn.style.color = "#fff";

        alert("❤️ بحبك يا نور عيني... وهفضل أحبك دايمًا ❤️");

    });

}
