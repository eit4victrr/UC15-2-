document.addEventListener("DOMContentLoaded", () => {

    const saudacaoElement = document.getElementById("saudacao");
    const horaAtual = new Date().getHours();
    if (horaAtual >= 5 && horaAtual < 12) {
        saudacaoElement.textContent = "Bom dia! 🌅";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacaoElement.textContent = "Boa tarde! ☀️";
    } else {
        saudacaoElement.textContent = "Boa noite! 🌙";
    }

    document.getElementById("current-year").textContent = new Date().getFullYear();

    const btnMenu = document.querySelector(".btn-menu");
    const navMenu = document.querySelector(".nav");

    btnMenu.addEventListener("click", () => {
        const isActive = navMenu.classList.toggle("active");
        btnMenu.setAttribute("aria-expanded", isActive);
    });

    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    });

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        let formValido = true;

        document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

        const nameInput = document.getElementById("name");
        if (nameInput.value.trim().length < 3) {
            document.getElementById("name-error").textContent = "Por favor, insira um nome válido (mínimo 3 caracteres).";
            formValido = false;
        }

        const emailInput = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            document.getElementById("email-error").textContent = "Por favor, insira um e-mail com formato válido.";
            formValido = false;
        }

        const messageInput = document.getElementById("message");
        if (messageInput.value.trim().length < 10) {
            document.getElementById("message-error").textContent = "A mensagem deve conter pelo menos 10 caracteres.";
            formValido = false;
        }

        const consentInput = document.getElementById("consent");
        if (!consentInput.checked) {
            document.getElementById("consent-error").textContent = "Você precisa aceitar os termos para prosseguir.";
            formValido = false;
        }

        if (formValido) {
            alert("Sucesso! Sua mensagem foi enviada! (Será que foi mesmo? Quem vai saber?)");
            form.reset();
        }
    });
});