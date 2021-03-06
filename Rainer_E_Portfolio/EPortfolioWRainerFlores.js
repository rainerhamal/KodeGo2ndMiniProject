//SVG Skills Section

var svgCircle = document.getElementById("svgCircle");
let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step4 = document.getElementById("step4");
let step5 = document.getElementById("step5");
let projectsMain = document.getElementById("Projects");
let projectBox = document.querySelector("#projectBox")

projectsMain.style.backgroundImage = "url(Rainer_E_Portfolio\ePortfolioImages\pythonLogo.png)";

step1.addEventListener('click', (e) => {
    svgCircle.style.strokeDashoffset = "1004";
    projectsMain.style.backgroundImage = "url(./ePortfolioImages/godaiproj.png)";
    projectBox.style.top = "150px";

    e.preventDefault();
});

step2.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "753";
    projectsMain.style.backgroundImage = "url(./ePortfolioImages/eCalculatorproj.png)";
    projectBox.style.top = "-220px";

    e.preventDefault();
});

step3.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "502";
    projectsMain.style.backgroundImage = "url(./ePortfolioImages/responsiveLayout.png)";
    projectBox.style.top = "-610px";

    e.preventDefault();
});

step4.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "251";
    projectsMain.style.backgroundImage = "url(./ePortfolioImages/medicalRegFormProj.png)";
    projectBox.style.top = "-980px";

    e.preventDefault();
});

step5.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "0";
    projectBox.style.top = "-1350px";

    e.preventDefault();
});

//Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', function() {
    this.classList.toggle("is-active");

    const visibility = navMenu.getAttribute("data-visible");
    if (visibility === "false") {
        navMenu.setAttribute("data-visible", true);
        hamburger.setAttribute("aria-expanded", true)
    } else {
        navMenu.setAttribute("data-visible", false)
        hamburger.setAttribute("aria-expanded", false)
    }
});





//Navbar section
let navbar = document.querySelector(".navbar");
let heroSection = document.querySelector(".hero-section");
let sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
};


let sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        // console.log(entry.target)
        if (!entry.isIntersecting) {
            navbar.classList.add("nav-scrolled");
        }
        else {
            navbar.classList.remove("nav-scrolled");
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(heroSection);

//Download CV
let cvDownload = document.querySelector("#div-block-3 #CVLink");
cvDownload.addEventListener('click', () => {
    const span = document.querySelector("#CVLink span");
    span.style.visibility = "visible";

    setTimeout(() => {
        span.style.visibility = "hidden";
        cvDownload.style.transition = "1s ease-in-out";
    }, 3000)
})


//Fade-in Section

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};
const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target)
                }
            })
        }, 
        appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        })