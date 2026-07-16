// ========================================
// HEADER
// ========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ========================================
// SCROLL SUAVE
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


// ========================================
// REVEAL ANIMATION
// ========================================

const reveals = document.querySelectorAll(

    ".section-header,\
     .service,\
     .gallery-card,\
     .review,\
     .cta__box,\
     .cta__info article,\
     .experience__image,\
     .experience__content,\
     .trust__numbers article"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

reveals.forEach(item => revealObserver.observe(item));


// ========================================
// COUNTERS
// ========================================

const counters = document.querySelectorAll(".trust__numbers strong");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const el = entry.target;

        const text = el.innerText;

        const value = parseFloat(text.replace(/[^\d.]/g, ""));

        let current = 0;

        const increment = value / 60;

        const update = () => {

            current += increment;

            if (current < value) {

                if (text.includes(".")) {

                    el.innerText = current.toFixed(1);

                } else {

                    el.innerText = Math.floor(current);

                }

                requestAnimationFrame(update);

            } else {

                el.innerText = text;

            }

        };

        update();

        counterObserver.unobserve(el);

    });

}, {

    threshold: .5

});

counters.forEach(counter => counterObserver.observe(counter));