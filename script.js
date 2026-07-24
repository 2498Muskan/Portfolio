// =========================
// NAVBAR ACTIVE LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}

// =========================
// SCROLL TO TOP
// =========================

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.opacity = "1";
        scrollBtn.style.pointerEvents = "auto";

    } else {

        scrollBtn.style.opacity = "0";
        scrollBtn.style.pointerEvents = "none";

    }

});

if (scrollBtn) {

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// =========================
// TYPING EFFECT
// =========================

const typingElement = document.querySelector(".hero h2");

if (typingElement) {

    const words = [

        "Full Stack Developer",

        "Laravel Developer",

        "AI Explorer",

        "Web Designer"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        let currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent = currentWord.substring(0, charIndex);

            charIndex++;

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1200);

                return;

            }

        } else {

            typingElement.textContent = currentWord.substring(0, charIndex);

            charIndex--;

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, deleting ? 60 : 100);

    }

    typeEffect();

}

// =========================
// REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(

".card,.skill-card,.project-card,.certificate-card,.timeline-card,.workshop-card,.contact-card,.stat-card"

);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("visible");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// =========================
// PARALLAX PROFILE
// =========================

const profile = document.querySelector(".profile-card");

document.addEventListener("mousemove", (e) => {

    if (!profile) return;

    const x = (window.innerWidth / 2 - e.pageX) / 35;

    const y = (window.innerHeight / 2 - e.pageY) / 35;

    profile.style.transform =

        "rotateY(" + x + "deg) rotateX(" + (-y) + "deg)";

});

// =========================
// BUTTON RIPPLE
// =========================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", () => {

        const btn = contactForm.querySelector("button");

        btn.innerHTML = "Sending...";

        setTimeout(() => {

            btn.innerHTML =

                '<i class="fa-solid fa-paper-plane"></i> Send Message';

        }, 2500);

    });

}

// =========================
// FLOATING CARDS
// =========================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.transform =

            "perspective(1000px) rotateY(" +

            ((x - rect.width / 2) / 25) +

            "deg) rotateX(" +

            ((rect.height / 2 - y) / 25) +

            "deg)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

            "perspective(1000px) rotateY(0deg) rotateX(0deg)";

    });

});

// =========================
// LOADING ANIMATION
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log(

"%cWelcome to Muskan's Portfolio 🚀",

"color:#8b5cf6;font-size:22px;font-weight:bold;"

);

console.log(

"%cFull Stack Developer | Laravel | AI Explorer",

"color:#38bdf8;font-size:16px;"

);
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";

});
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(e){

    e.preventDefault();

    submitBtn.disabled = true;

    submitBtn.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        Sending...
    `;

    status.textContent = "";

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    )
    .then(function(){

        submitBtn.disabled = false;

        submitBtn.innerHTML = `
            <i class="fas fa-paper-plane"></i>
            Send Message
        `;

        status.innerHTML = "✅ Thank you! Your message has been sent successfully.";
        status.style.color = "#4ade80";

        form.reset();

    })
    .catch(function(error){

        submitBtn.disabled = false;

        submitBtn.innerHTML = `
            <i class="fas fa-paper-plane"></i>
            Send Message
        `;

        status.innerHTML = "❌ Failed to send message. Please try again.";
        status.style.color = "#ff6b6b";

        console.log(error);

    });

});