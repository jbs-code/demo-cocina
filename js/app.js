//inicio
const tl = gsap.timeline({ default: { ease: 'power1.out' } });

tl.from(".home", { opacity: 0, scale: 0, duration: 1.5 });
tl.fromTo(".nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.from(".lema", { y: "100%", duration: 1, ease: "back" }, "-=0.5");
tl.fromTo(".lema", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");

//menu
const hamburger = document.querySelector(".nav-hamburger");
const menu = document.querySelector(".nav-menu");
const nav = document.querySelector(".nav-shadow");

hamburger.addEventListener("click", () => {
    if (menu.classList.contains("nav-menu--no-focus")) {
        menu.classList.remove("nav-menu--no-focus");
        menu.classList.add("nav-menu--focus");
    }
    else if (menu.classList.contains("nav-menu--focus")) {
        menu.classList.remove("nav-menu--focus");
        menu.classList.add("nav-menu--no-focus");
    }
    else {
        menu.classList.add("nav-menu--focus");
        menu.classList.remove("nav-menu--opacity");
    }

});

if (window.innerWidth < 850) {
    menu.classList.add("nav-menu--no-focus");
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 850) {
        menu.classList.add("nav-menu--no-focus");
    }
    else {
        if (menu.classList.contains("nav-menu--no-focus")) {
            menu.classList.remove("nav-menu--no-focus");
        }
        if (menu.classList.contains("nav-menu--focus")) {
            menu.classList.remove("nav-menu--focus");
        }
    }
});

document.addEventListener("click", function (e) {
    var click = e.target;
    if (window.innerWidth < 850) {
        if (!menu.classList.contains("nav-menu--no-focus") && click != menu && click != hamburger) {
            menu.classList.remove("nav-menu--focus");
            menu.classList.add("nav-menu--no-focus");
        }
    }
}, false);

if (window.scrollY > 20) {
    nav.style.opacity = "1";
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        nav.style.opacity = "1";
    }
    else {
        nav.style.opacity = "0";
    }
});

//opiniones de clientes
const opinion = document.querySelector(".cliente-opinion");
const nombre = document.querySelector(".cliente-nombre");
var cont = 0;

var opciones = [["Very good", "Delicioso", "MMmmmm!"], ["Max Verstappen", "Sergio Pérez", "Lewis Hamilton"]];

opinion.textContent = opciones[0][cont];
nombre.textContent = opciones[1][cont];
cont++;

setInterval(() => {
    if (cont == opciones[0].length) {
        cont = 0;
    }
    opinion.textContent = opciones[0][cont];
    nombre.textContent = opciones[1][cont];
    cont++;
}, 5000);


