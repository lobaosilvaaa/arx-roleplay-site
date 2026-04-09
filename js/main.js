document.addEventListener("DOMContentLoaded", () => {

    // NAVBAR SCROLL
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        });
    }

    // SCROLL REVEAL (só se existir)
    if (typeof ScrollReveal !== "undefined") {

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

    }

    // CONTADORES
    function animateCounter(id, target) {

        let element = document.getElementById(id);

        // proteção contra erro
        if (!element) return;

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

    // executa só se existir no HTML
    if (document.getElementById("players-online")) {
        animateCounter("players-online", 120);
    }

    if (document.getElementById("discord-members")) {
        animateCounter("discord-members", 850);
    }

});


// LIGHTBOX (fora do DOMContentLoaded para funcionar globalmente)
function openImage(img) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!lightbox || !lightboxImg) return;

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;

}

function closeImage() {

    const lightbox = document.getElementById("lightbox");

    if (!lightbox) return;

    lightbox.style.display = "none";

}
