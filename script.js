// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");

    // Abrir e fechar menu responsivo (mobile)
    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Alterna o ícone entre barras e "X"
        const icon = mobileMenu.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // Fechar o menu ao clicar em qualquer link (melhor experiência no mobile)
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = mobileMenu.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });
});
