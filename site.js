/* =========================================================
   Aardblij Workshops · gedeelde scripts voor alle pagina's
   ========================================================= */

/* Site-instellingen: pas hier het Formspree-adres aan.
   Het geldt voor de Reserveer-pop-up én het offerteformulier. */
window.AARDBLIJ = {
    formspree: 'https://formspree.io/f/xoederek',

    /* Alle workshops, op één plek. Deze lijst vult de keuzelijst in
       de Reserveer-pop-up én in het offerteformulier.
       Nieuwe workshop? Zet hem hier erbij, dan staat hij in beide formulieren. */
    workshops: [
        'Cocktail Kaarsen Maken',
        'Epoxy Gieten',
        'Schilderen tussen Alpacas',
        'Schilderen in de Appelboomgaard',
        'Schilderen in het Voedselbos',
        'Bosbaden',
        'Sieraden Maken',
        'Mozaïeken',
        'Aanstekers Bedazzelen',
        'Verf Therapie',
        'Fotoshoot met Telefoon',
        'Kerstkransen en Kerststukjes Maken'
    ],

    /* Laatste keuze onderaan de lijst */
    workshopAnders: 'Anders, of ik weet het nog niet',

    /* Zet de workshops als keuzes in een <select>
       (na de eerste "Kies een workshop"-regel die er al staat) */
    vulWorkshops(select) {
        this.workshops.concat(this.workshopAnders).forEach(naam => {
            select.add(new Option(naam, naam));
        });
    }
};

(function () {
    // Keuzelijsten met data-workshops vullen (bijv. op de offertepagina)
    document.querySelectorAll('select[data-workshops]').forEach(select => {
        window.AARDBLIJ.vulWorkshops(select);
    });

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
