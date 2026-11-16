/* =========================================================
   Aardblij Workshops · gedeelde scripts voor alle pagina's
   ========================================================= */

/* Site-instellingen: pas hier het Formspree-adres aan.
   Het geldt voor de Reserveer-pop-up én het offerteformulier. */
window.AARDBLIJ = {
    formspree: 'https://formspree.io/f/xoederek'
};

(function () {
    const nav = document.querySelector('nav');
    const menuKnop = document.querySelector('.nav-toggle');

    function sluitMenu() {
        if (nav) nav.classList.remove('open');
        if (menuKnop) menuKnop.setAttribute('aria-expanded', 'false');
    }

    // Hamburgermenu openen en sluiten
    if (menuKnop) {
        menuKnop.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('open');
            menuKnop.setAttribute('aria-expanded', isOpen);
        });
    }

    // Soepel scrollen binnen de pagina; logo en Home (#top / #home) gaan naar boven
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const doel = link.getAttribute('href');
            if (doel === '#') return;
            e.preventDefault();
            if (doel === '#top' || doel === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.querySelector(doel);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
            sluitMenu();
        });
    });
})();
