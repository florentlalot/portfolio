// Animation au scroll
const elements = document.querySelectorAll('.fade, .slide');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
        }
    });
});

elements.forEach(el => observer.observe(el));


// -------------------------
// CARROUSEL
// -------------------------

const track = document.querySelector(".carousel-track");
const carouselSection = document.querySelector(".carousel-section"); // <-- AJOUT IMPORTANT
let lastCategory = null; // <-- AJOUT IMPORTANT


const images = {
    decisionnelle: [
        "img/decisionnelle1.png",
        "img/decisionnelle2.png",
        "img/decisionnelle3.png",
        "img/decisionnelle4.png",
        "img/decisionnelle5.png",
        "img/decisionnelle6.png",
        "img/decisionnelle7.png",
        "img/decisionnelle8.png",
        "img/decisionnelle9.png"
    ],
    gestion: [
        "img/gestion1.png",
        "img/gestion2.png",
        "img/gestion3.png",
        "img/gestion4.png",
        "img/gestion5.png",
        "img/gestion6.png",
        "img/gestion7.png",
        "img/gestion8.png",
        "img/gestion9.png"
    ],
    communication: [
        "img/communication1.png",
        "img/communication2.png",
        "img/communication3.png",
        "img/communication4.png",
        "img/communication5.png"
    ]
};


// Fonction qui charge les images
function loadImages(type) {
    track.innerHTML = ""; // reset

    images[type].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        track.appendChild(img);
    });

    // duplique les images pour un défilement infini
    images[type].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        track.appendChild(img);
    });
}


// -------------------------
// GESTION DU CLIC SUR LES CARDS
// -------------------------

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {

        let category = null;

        if (card.textContent.includes("décisionnelle")) category = "decisionnelle";
        if (card.textContent.includes("gestion")) category = "gestion";
        if (card.textContent.includes("Communication")) category = "communication";

        // Si on clique sur la même card → on ferme le carrousel
        if (category === lastCategory) {
            carouselSection.classList.toggle("hidden");
            return;
        }

        // Sinon → on charge les images et on affiche le carrousel
        lastCategory = category;
        loadImages(category);
        carouselSection.classList.remove("hidden");
    });
});
