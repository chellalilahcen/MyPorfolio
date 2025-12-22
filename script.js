// Navbar color change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
    } else {
        document.querySelector('.navbar').classList.remove('scrolled');
    }
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('id') !== 'back-to-top') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- TRANSLATIONS ---
const translations = {
    en: {
        title: "LAHCEN's Portfolio",
        nav_portfolio: "My Portfolio",
        nav_about: "About Me",
        nav_education: "Education & Certificates",
        nav_skills: "Skills",
        nav_languages: "Languages",
        nav_contact: "Contact",
        hero_subtitle: "IT Engineer",
        hero_button: "Get In Touch",
        about_title: "About Me",
        about_p1: "An MBI holder (Master Degree in Business and Informatics) with more than 10 years of experience in computer science, management and electrical domain, certified as a QHSE supervisor, and a participant in numerous trainings in the fields of Information Technology, GSM devices and Telecommunication. I worked as an IT Engineer for SONELGAZ (Algerian National Electricity and Gas Company). Most of my professional experiences were in SONELGAZ; in addition to freelance work for Foreign and National Companies. I am looking for new challenges and experiences, and always seeking to quench my thirst for learning and developing myself both professionally and personally.",
        about_p2: "My goal is to build digital experiences that not only meet but exceed client expectations. I believe in the power of continuous learning and staying up-to-date with the latest technologies.",
        education_title: "Education & Certificates",
        edu_cert_1_title: "Microsoft Azure AZ900",
        edu_cert_1_subtitle: "Certificate",
        edu_cert_2_title: "HSE for 60kV Operator",
        edu_cert_2_subtitle: "Certificate",
        edu_cert_3_title: "IP Phone Technolgies",
        edu_cert_3_subtitle: "Certificate",
        edu_cert_4_title: "Telecommunication",
        edu_cert_4_subtitle: "Certificate",
        edu_cert_5_title: "Electrical Safety",
        edu_cert_5_subtitle: "Certificate",
        edu_cert_6_title: "MicroSCADA",
        edu_cert_6_subtitle: "Certificate",
        edu_cert_7_title: "Business & Informatics",
        edu_cert_7_subtitle: "Master degree",
        edu_cert_8_title: "HSE Supervisor",
        edu_cert_8_subtitle: "Certificate",
        edu_cert_9_title: "GSM Station Maintenance (Hard & Soft)",
        edu_cert_9_subtitle: "Certificate",
        skills_title: "My Skills",
        languages_title: "Languages",
        lang_1: "English: Good",
        lang_2: "French: Good",
        lang_3: "Arabic: Mother Tongue",
        lang_4: "German: B2",
        contact_title: "Get In Touch",
        contact_subtitle: "Feel free to reach out. I'm always open to connecting.",
        contact_email_title: "Email",
        contact_phone_title: "Phone",
        contact_location_title: "Location",
        contact_location_value: "Bonn, Germany",
        footer_text: "© 2024 Lahcen Chellali. All rights reserved."
    },
    de: {
        title: "LAHCENs Portfolio",
        nav_portfolio: "Mein Portfolio",
        nav_about: "Über Mich",
        nav_education: "Bildung & Zertifikate",
        nav_skills: "Fähigkeiten",
        nav_languages: "Sprachen",
        nav_contact: "Kontakt",
        hero_subtitle: "IT Engineer",
        hero_button: "Kontakt aufnehmen",
        about_title: "Über Mich",
        about_p1: "Inhaber eines MBI (Master-Abschluss in Wirtschaft und Informatik) mit mehr als 10 Jahren Erfahrung in den Bereichen Informatik, Management und Elektrotechnik, zertifizierter QHSE-Supervisor und Teilnehmer zahlreicher Schulungen in den Bereichen Informationstechnologie, GSM-Geräte und Telekommunikation. Ich arbeitete als IT-Ingenieur für SONELGAZ (Algerische Nationale Elektrizitäts- und Gasgesellschaft). Die meisten meiner beruflichen Erfahrungen sammelte ich bei SONELGAZ; zusätzlich zu freiberuflicher Arbeit für ausländische und nationale Unternehmen. Ich suche neue Herausforderungen und Erfahrungen und bin stets bestrebt, meinen Lern- und Entwicklungswillen sowohl beruflich als auch persönlich zu stillen.",
        about_p2: "Mein Ziel ist es, digitale Erlebnisse zu schaffen, die die Erwartungen der Kunden nicht nur erfüllen, sondern übertreffen. Ich glaube an die Kraft des kontinuierlichen Lernens und daran, mit den neuesten Technologien und Designtrends auf dem Laufenden zu bleiben.",
        education_title: "Bildung & Zertifikate",
        edu_cert_1_title: "Microsoft Azure AZ900",
        edu_cert_1_subtitle: "Zertifikat",
        edu_cert_2_title: "HSE für 60kV-Betreiber",
        edu_cert_2_subtitle: "Zertifikat",
        edu_cert_3_title: "IP-Telefonie-Technologien",
        edu_cert_3_subtitle: "Zertifikat",
        edu_cert_4_title: "Telekommunikation",
        edu_cert_4_subtitle: "Zertifikat",
        edu_cert_5_title: "Elektrische Sicherheit",
        edu_cert_5_subtitle: "Zertifikat",
        edu_cert_6_title: "MicroSCADA",
        edu_cert_6_subtitle: "Zertifikat",
        edu_cert_7_title: "Wirtschaftsinformatik",
        edu_cert_7_subtitle: "Master-Abschluss",
        edu_cert_8_title: "HSE-Supervisor",
        edu_cert_8_subtitle: "Zertifikat",
        edu_cert_9_title: "GSM-Stationswartung (Hard- & Software)",
        edu_cert_9_subtitle: "Zertifikat",
        skills_title: "Meine Fähigkeiten",
        languages_title: "Sprachen",
        lang_1: "Englisch: Gut",
        lang_2: "Französisch: Gut",
        lang_3: "Arabisch: Muttersprache",
        lang_4: "Deutsch: B2",
        contact_title: "Kontakt aufnehmen",
        contact_subtitle: "Zögern Sie nicht, mich zu kontaktieren. Ich bin immer offen für neue Verbindungen.",
        contact_email_title: "E-Mail",
        contact_phone_title: "Telefon",
        contact_location_title: "Standort",
        contact_location_value: "Bonn, Deutschland",
        footer_text: "© 2024 Lahcen Chellali. Alle Rechte vorbehalten."
    },
    fr: {
        title: "Portfolio de LAHCEN",
        nav_portfolio: "Mon Portfolio",
        nav_about: "À Propos de Moi",
        nav_education: "Formation & Certificats",
        nav_skills: "Compétences",
        nav_languages: "Langues",
        nav_contact: "Contact",
        hero_subtitle: "Ingénieur IT",
        hero_button: "Me Contacter",
        about_title: "À Propos de Moi",
        about_p1: "Titulaire d'un MBI (Master en Commerce et Informatique) avec plus de 10 ans d'expérience dans les domaines de l'informatique, de la gestion et de l'électricité, certifié superviseur QHSE, et participant à de nombreuses formations dans les domaines des technologies de l'information, des appareils GSM et des télécommunications. J'ai travaillé comme ingénieur informaticien pour SONELGAZ (Société Nationale Algérienne de l'Électricité et du Gaz). La plupart de mes expériences professionnelles ont été chez SONELGAZ; en plus de travaux en freelance pour des entreprises étrangères et nationales. Je suis à la recherche de nouveaux défis et de nouvelles expériences, et je cherche toujours à étancher ma soif d'apprendre et de me développer tant sur le plan professionnel que personnel.",
        about_p2: "Mon objectif est de créer des expériences numériques qui non seulement répondent mais dépassent les attentes des clients. Je crois au pouvoir de l'apprentissage continu et à la nécessité de se tenir au courant des dernières technologies et tendances en matière de design.",
        education_title: "Formation & Certificats",
        edu_cert_1_title: "Microsoft Azure AZ900",
        edu_cert_1_subtitle: "Certificat",
        edu_cert_2_title: "HSE pour Opérateur 60kV",
        edu_cert_2_subtitle: "Certificat",
        edu_cert_3_title: "Technologies de Téléphonie IP",
        edu_cert_3_subtitle: "Certificat",
        edu_cert_4_title: "Télécommunication",
        edu_cert_4_subtitle: "Certificat",
        edu_cert_5_title: "Sécurité Électrique",
        edu_cert_5_subtitle: "Certificat",
        edu_cert_6_title: "MicroSCADA",
        edu_cert_6_subtitle: "Certificat",
        edu_cert_7_title: "Commerce et Informatique",
        edu_cert_7_subtitle: "Master",
        edu_cert_8_title: "Superviseur HSE",
        edu_cert_8_subtitle: "Certificat",
        edu_cert_9_title: "Maintenance de Station GSM (Matériel & Logiciel)",
        edu_cert_9_subtitle: "Certificat",
        skills_title: "Mes Compétences",
        languages_title: "Langues",
        lang_1: "Anglais : Bon",
        lang_2: "Français : Bon",
        lang_3: "Arabe : Langue Maternelle",
        lang_4: "Allemand : B2",
        contact_title: "Me Contacter",
        contact_subtitle: "N'hésitez pas à me contacter. Je suis toujours ouvert à la discussion.",
        contact_email_title: "Email",
        contact_phone_title: "Téléphone",
        contact_location_title: "Lieu",
        contact_location_value: "Bonn, Allemagne",
        footer_text: "© 2024 Lahcen Chellali. Tous droits réservés."
    }
};

let currentTypingInterval;

function typeEffect(text) {
    const element = document.getElementById('typing-subtitle');
    if (element) {
        element.innerHTML = "";
        let i = 0;
        // Clear any existing typing animation
        if (currentTypingInterval) {
            clearInterval(currentTypingInterval);
        }
        currentTypingInterval = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(currentTypingInterval);
            }
        }, 120);
    }
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (key === 'hero_subtitle') {
                // Handle typing effect separately
                typeEffect(translations[lang][key]);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}


// All other initializations go here
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Library
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });

    // Language Switcher
    const langSwitchers = document.querySelectorAll('.lang-switcher');
    langSwitchers.forEach(switcher => {
        switcher.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);


    // Theme Switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeIcon = themeSwitcher.querySelector('i');
    const setTheme = (theme) => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    };
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);
    themeSwitcher.addEventListener('click', () => {
        const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Interactive Cursor
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorRing = document.querySelector(".cursor-ring");
    if (cursorDot && cursorRing) {
        window.addEventListener("mousemove", (e) => {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
            requestAnimationFrame(() => {
                cursorRing.style.left = `${e.clientX}px`;
                cursorRing.style.top = `${e.clientY}px`;
            });
        });
        const hoverables = document.querySelectorAll('a, button, .skill-item, .timeline-content, .contact-card');
        hoverables.forEach((el) => {
            el.addEventListener("mouseover", () => {
                cursorRing.classList.add("cursor-hover");
            });
            el.addEventListener("mouseout", () => {
                cursorRing.classList.remove("cursor-hover");
            });
        });
        document.addEventListener('mousedown', () => cursorRing.classList.add('cursor-click'));
        document.addEventListener('mouseup', () => cursorRing.classList.remove('cursor-click'));
    }
});