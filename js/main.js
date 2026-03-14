const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

ScrollReveal().reveal('.hero-content', {
    delay: 300,
    distance: '50px',
    origin: 'bottom'
});

ScrollReveal().reveal('.system-card', {
    interval: 200,
    distance: '30px',
    origin: 'bottom'
});

ScrollReveal().reveal('.gallery-grid img', {
    interval: 150,
    distance: '20px',
    origin: 'bottom'
});

function openImage(img) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;

}

function closeImage() {

    document.getElementById("lightbox").style.display = "none";

}

function animateCounter(id, target) {

    let element = document.getElementById(id);
    let count = 0;
    let speed = target / 100;

    let interval = setInterval(() => {

        count += speed;

        if (count >= target) {
            count = target;
            clearInterval(interval);
        }

        element.innerText = Math.floor(count);

    }, 20);

}

animateCounter("players-online", 120);
animateCounter("discord-members", 850);