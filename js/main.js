document.addEventListener("DOMContentLoaded", () => {

    // NAVBAR SCROLL
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        });
    }

    // SCROLL REVEAL
    if (typeof ScrollReveal !== "undefined") {

        const sr = ScrollReveal();

        sr.reveal('.hero-content', {
            delay: 300,
            distance: '50px',
            origin: 'bottom'
        });

        sr.reveal('.system-card', {
            interval: 200,
            distance: '30px',
            origin: 'bottom'
        });

        sr.reveal('.gallery-grid img', {
            interval: 150,
            distance: '20px',
            origin: 'bottom'
        });

    }

});

function openTrailer() {

    const modal = document.getElementById("trailer-modal");
    const video = document.getElementById("trailer-video");

    if (!modal || !video) return;

    modal.style.display = "block"; // 🔥 corrigido

    video.src = "https://www.youtube.com/embed/uLveNU0p88A?autoplay=1";

}

function closeTrailer() {

    const modal = document.getElementById("trailer-modal");
    const video = document.getElementById("trailer-video");

    if (!modal || !video) return;

    modal.style.display = "none";
    video.src = "";

}

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closeTrailer();
    }

});

function openImage(img) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!lightbox || !lightboxImg || !img) return;

    lightboxImg.src = img.src;

    lightbox.classList.add("active");

}

function closeImage() {

    const lightbox = document.getElementById("lightbox");

    if (!lightbox) return;

    lightbox.classList.remove("active");

}