// PRELOADER

window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
});

// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".custom-navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
});

// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 100;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 30);
        }
        else{
            counter.innerText = target;
        }
    };

    updateCounter();
});

// SCROLL REVEAL

function revealSections(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);

// SCROLL TO TOP

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        scrollBtn.style.display = "block";
    }
    else{
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });

});

// PARALLAX EFFECT

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero-section");

    hero.style.backgroundPositionY = `${window.pageYOffset * 0.5}px`;

});