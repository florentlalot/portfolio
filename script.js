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