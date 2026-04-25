// =========================
// INIT
// =========================

document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initScrollReveal();
    initVIPSystem();
    initLightbox();
    initLightEffect();
    initEntryModal();
});


// =========================
// NAVBAR
// =========================

function initNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
}


// =========================
// SCROLL REVEAL
// =========================

function initScrollReveal() {

    if (typeof ScrollReveal === "undefined") return;

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


// =========================
// LIGHTBOX (CORRIGIDO)
// =========================

function initLightbox() {

    const lightbox = document.getElementById("lightbox");

    if (!lightbox) return;

    // Fecha clicando fora da imagem
    lightbox.addEventListener("click", (e) => {
        if (e.target.id === "lightbox") {
            closeImage();
        }
    });
}

function openImage(img) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!lightbox || !lightboxImg || !img) return;

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
}

function closeImage() {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!lightbox) return;

    lightbox.style.display = "none";

    if (lightboxImg) {
        lightboxImg.src = "";
    }
}


// =========================
// TRAILER
// =========================

function openTrailer() {

    const modal = document.getElementById("trailer-modal");
    const video = document.getElementById("trailer-video");

    if (!modal || !video) return;

    modal.style.display = "flex";
    video.src = "https://www.youtube.com/embed/uLveNU0p88A?autoplay=1";
}

function closeTrailer() {

    const modal = document.getElementById("trailer-modal");
    const video = document.getElementById("trailer-video");

    if (!modal || !video) return;

    modal.style.display = "none";
    video.src = "";
}

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("trailer-modal");

    if (!modal) return;

    modal.addEventListener("click", (e) => {
        if (e.target.id === "trailer-modal") {
            closeTrailer();
        }
    });

});


// =========================
// UX GLOBAL
// =========================

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeTrailer();
        closeImage(); // 🔥 melhora UX
    }
});


// =========================
// VIP LIGHT EFFECT (CORRIGIDO)
// =========================

function initLightEffect() {

    document.querySelectorAll(".vip-card").forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
        });

    });

}


// =========================
// VIP SYSTEM (placeholder)
// =========================

function initVIPSystem() {
    // reservado para futuras funções
}

// =========================
// ENTRY MODAL
// =========================

// =========================
// ENTRY MODAL
// =========================

function initEntryModal() {

    const modal = document.getElementById("entry-modal");

    if (!modal) return;

    // mostra após pequeno delay
    setTimeout(() => {
        modal.style.display = "flex";
    }, 800);

}

// fechar
function closeEntry() {

    const modal = document.getElementById("entry-modal");
    if (!modal) return;

    modal.style.display = "none";

}

document.querySelectorAll(".creator-card-3d").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        const inner = card.querySelector(".card-inner");

        inner.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

        inner.style.setProperty("--x", `${x}px`);
        inner.style.setProperty("--y", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {
        const inner = card.querySelector(".card-inner");
        inner.style.transform = "rotateX(0) rotateY(0)";
    });

});

// =========================
// LIVE STATUS (SIMPLES)
// =========================

function initLiveStatus() {

    const liveBadge = document.getElementById("live-status");

    if (!liveBadge) return;

    // 🔥 ALTERE AQUI (true = ao vivo)
    const isLive = true;

    if (isLive) {
        liveBadge.style.display = "block";
    }

}

document.addEventListener("DOMContentLoaded", () => {
    initLiveStatus();
});