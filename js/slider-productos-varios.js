//! ******* Slider presentando la sección de productos *******

const slider = document.querySelector(".productos-slider");
let sliderSection = document.querySelectorAll(".slider__section-1");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#btn-prev");
const btnRigth = document.querySelector("#btn-next");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section-1")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
       slider.style.transition = "none";
       slider.insertAdjacentElement('beforeend', sliderSectionFirst);
       slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section-1");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
       slider.style.transition = "none";
       slider.insertAdjacentElement('afterbegin', sliderSectionLast);
       slider.style.marginLeft = "-100%";
    }, 500);
}

function autoplay() {
    interval = setInterval(function () {
        Next();
    },5000);
}

autoplay();

//! ******* Slider Mesas *******

const sliderMesas = document.querySelector(".slider-mesas");
let sliderSectionDos = document.querySelectorAll(".slider__section-2");
let sliderSectionLastDos = sliderSectionDos[sliderSectionDos.length-1];

const btnLeftDos = document.querySelector("#btn-prev-2");
const btnRigthDos = document.querySelector("#btn-next-2");

sliderMesas.insertAdjacentElement('afterbegin', sliderSectionLastDos);

function NextDos() {
    let sliderSectionFirstDos = document.querySelectorAll(".slider__section-2")[0];
    sliderMesas.style.marginLeft = "-200%";
    sliderMesas.style.transition = "all 0.5s";
    setTimeout(function () {
       sliderMesas.style.transition = "none";
       sliderMesas.insertAdjacentElement('beforeend', sliderSectionFirstDos);
       sliderMesas.style.marginLeft = "-100%";
    }, 500);
}

function PrevDos() {
    let sliderSectionDos = document.querySelectorAll(".slider__section-2");
    let sliderSectionLastDos = sliderSectionDos[sliderSectionDos.length-1];
    sliderMesas.style.marginLeft = "0";
    sliderMesas.style.transition = "all 0.5s";
    setTimeout(function () {
       sliderMesas.style.transition = "none";
       sliderMesas.insertAdjacentElement('afterbegin', sliderSectionLastDos);
       sliderMesas.style.marginLeft = "-100%";
    }, 500);
}

btnRigthDos.addEventListener('click', function () {
    NextDos();
});

btnLeftDos.addEventListener('click', function () {
    PrevDos();
});

//! ******* Slider Luminarias *******

const sliderLuminarias = document.querySelector(".slider-luminarias");
let sliderSectionTres = document.querySelectorAll(".slider__section-3");
let sliderSectionLastTres = sliderSectionTres[sliderSectionTres.length-1];

const btnLeftTres = document.querySelector("#btn-prev-3");
const btnRigthTres = document.querySelector("#btn-next-3");

sliderLuminarias.insertAdjacentElement('afterbegin', sliderSectionLastTres);

function NextTres() {
    let sliderSectionFirstTres = document.querySelectorAll(".slider__section-3")[0];
    sliderLuminarias.style.marginLeft = "-200%";
    sliderLuminarias.style.transition = "all 0.5s";
    setTimeout(function () {
       sliderLuminarias.style.transition = "none";
       sliderLuminarias.insertAdjacentElement('beforeend', sliderSectionFirstTres);
       sliderLuminarias.style.marginLeft = "-100%";
    }, 500);
}

function PrevTres() {
    let sliderSectionTres = document.querySelectorAll(".slider__section-3");
    let sliderSectionLastTres = sliderSectionTres[sliderSectionTres.length-1];
    sliderLuminarias.style.marginLeft = "0";
    sliderLuminarias.style.transition = "all 0.5s";
    setTimeout(function () {
       sliderLuminarias.style.transition = "none";
       sliderLuminarias.insertAdjacentElement('afterbegin', sliderSectionLastTres);
       sliderLuminarias.style.marginLeft = "-100%";
    }, 500);
}

btnRigthTres.addEventListener('click', function () {
    NextTres();
});

btnLeftTres.addEventListener('click', function () {
    PrevTres();
});

//! ******* Slider Mates *******

const sliderMates = document.querySelector(".slider-mates");
let sliderSectionCuatro = document.querySelectorAll(".slider__section-4");
let sliderSectionLastCuatro = sliderSectionCuatro[sliderSectionCuatro.length-1];

const btnLeftCuatro = document.querySelector("#btn-prev-4");
const btnRigthCuatro = document.querySelector("#btn-next-4");

sliderMates.insertAdjacentElement('afterbegin', sliderSectionLastCuatro);

function NextCuatro() {
    let sliderSectionFirstCuatro = document.querySelectorAll(".slider__section-4")[0];
    sliderMates.style.marginLeft = "-200%";
    sliderMates.style.transition = "all 0.5s";
    setTimeout(function () {
       sliderMates.style.transition = "none";
       sliderMates.insertAdjacentElement('beforeend', sliderSectionFirstCuatro);
       sliderMates.style.marginLeft = "-100%";
    }, 500);
}

function PrevCuatro() {
    let sliderSectionCuatro = document.querySelectorAll(".slider__section-4");
    let sliderSectionLastCuatro = sliderSectionCuatro[sliderSectionCuatro.length-1];
    sliderMates.style.marginLeft = "0";
    sliderMates.style.transition = "all 0.5s";
    setTimeout(function () {
       sliderMates.style.transition = "none";
       sliderMates.insertAdjacentElement('afterbegin', sliderSectionLastCuatro);
       sliderMates.style.marginLeft = "-100%";
    }, 500);
}

btnRigthCuatro.addEventListener('click', function () {
    NextCuatro();
});

btnLeftCuatro.addEventListener('click', function () {
    PrevCuatro();
});

//! ******* Slider Espejos *******

const sliderEspejos = document.querySelector(".slider-espejos");
let sliderSectionCinco = document.querySelectorAll(".slider__section-5");
let sliderSectionLastCinco = sliderSectionCinco[sliderSectionCinco.length-1];

const btnLeftCinco = document.querySelector("#btn-prev-5");
const btnRigthCinco = document.querySelector("#btn-next-5");

sliderEspejos.insertAdjacentElement('afterbegin', sliderSectionLastCinco);

function NextCinco() {
    let sliderSectionFirstCinco = document.querySelectorAll(".slider__section-5")[0];
    sliderEspejos.style.marginLeft = "-200%";
    sliderEspejos.style.transition = "all 0.5s";
    setTimeout(function () {
       sliderEspejos.style.transition = "none";
       sliderEspejos.insertAdjacentElement('beforeend', sliderSectionFirstCinco);
       sliderEspejos.style.marginLeft = "-100%";
    }, 500);
}

function PrevCinco() {
    let sliderSectionCinco = document.querySelectorAll(".slider__section-5");
    let sliderSectionLastCinco = sliderSectionCinco[sliderSectionCinco.length-1];
    sliderEspejos.style.marginLeft = "0";
    sliderEspejos.style.transition = "all 0.5s";
    setTimeout(function () {
       sliderEspejos.style.transition = "none";
       sliderEspejos.insertAdjacentElement('afterbegin', sliderSectionLastCinco);
       sliderEspejos.style.marginLeft = "-100%";
    }, 500);
}

btnRigthCinco.addEventListener('click', function () {
    NextCinco();
});

btnLeftCinco.addEventListener('click', function () {
    PrevCinco();
});

//! ******* Slider Cuadros *******

const sliderCuadros = document.querySelector(".slider-cuadros");
let sliderSectionSeis = document.querySelectorAll(".slider__section-6");
let sliderSectionLastSeis = sliderSectionSeis[sliderSectionSeis.length-1];

const btnLeftSeis = document.querySelector("#btn-prev-6");
const btnRigthSeis = document.querySelector("#btn-next-6");

sliderCuadros.insertAdjacentElement('afterbegin', sliderSectionLastSeis);

function NextSeis() {
    let sliderSectionFirstSeis = document.querySelectorAll(".slider__section-6")[0];
    sliderCuadros.style.marginLeft = "-200%";
    sliderCuadros.style.transition = "all 0.6s";
    setTimeout(function () {
       sliderCuadros.style.transition = "none";
       sliderCuadros.insertAdjacentElement('beforeend', sliderSectionFirstSeis);
       sliderCuadros.style.marginLeft = "-100%";
    }, 600);
}

function PrevSeis() {
    let sliderSectionSeis = document.querySelectorAll(".slider__section-6");
    let sliderSectionLastSeis = sliderSectionSeis[sliderSectionSeis.length-1];
    sliderCuadros.style.marginLeft = "0";
    sliderCuadros.style.transition = "all 0.6s";
    setTimeout(function () {
       sliderCuadros.style.transition = "none";
       sliderCuadros.insertAdjacentElement('afterbegin', sliderSectionLastSeis);
       sliderCuadros.style.marginLeft = "-100%";
    }, 600);
}

btnRigthSeis.addEventListener('click', function () {
    NextSeis();
});

btnLeftSeis.addEventListener('click', function () {
    PrevSeis();
});

//! ******* Slider Murales *******

const sliderMurales = document.querySelector(".slider-murales");
let sliderSectionSiete = document.querySelectorAll(".slider__section-7");
let sliderSectionLastSiete = sliderSectionSiete[sliderSectionSiete.length-1];

const btnLeftSiete = document.querySelector("#btn-prev-7");
const btnRigthSiete = document.querySelector("#btn-next-7");

sliderMurales.insertAdjacentElement('afterbegin', sliderSectionLastSiete);

function NextSiete() {
    let sliderSectionFirstSiete = document.querySelectorAll(".slider__section-7")[0];
    sliderMurales.style.marginLeft = "-200%";
    sliderMurales.style.transition = "all 0.7s";
    setTimeout(function () {
       sliderMurales.style.transition = "none";
       sliderMurales.insertAdjacentElement('beforeend', sliderSectionFirstSiete);
       sliderMurales.style.marginLeft = "-100%";
    }, 700);
}

function PrevSiete() {
    let sliderSectionSiete = document.querySelectorAll(".slider__section-7");
    let sliderSectionLastSiete = sliderSectionSiete[sliderSectionSiete.length-1];
    sliderMurales.style.marginLeft = "0";
    sliderMurales.style.transition = "all 0.7s";
    setTimeout(function () {
       sliderMurales.style.transition = "none";
       sliderMurales.insertAdjacentElement('afterbegin', sliderSectionLastSiete);
       sliderMurales.style.marginLeft = "-100%";
    }, 700);
}

btnRigthSiete.addEventListener('click', function () {
    NextSiete();
});

btnLeftSiete.addEventListener('click', function () {
    PrevSiete();
});

//! ******* Slider Bandejas *******

const sliderBandejas = document.querySelector(".slider-bandejas");
let sliderSectionOcho = document.querySelectorAll(".slider__section-8");
let sliderSectionLastOcho = sliderSectionOcho[sliderSectionOcho.length-1];

const btnLeftOcho = document.querySelector("#btn-prev-8");
const btnRigthOcho = document.querySelector("#btn-next-8");

sliderBandejas.insertAdjacentElement('afterbegin', sliderSectionLastOcho);

function NextOcho() {
    let sliderSectionFirstOcho = document.querySelectorAll(".slider__section-8")[0];
    sliderBandejas.style.marginLeft = "-200%";
    sliderBandejas.style.transition = "all 0.8s";
    setTimeout(function () {
       sliderBandejas.style.transition = "none";
       sliderBandejas.insertAdjacentElement('beforeend', sliderSectionFirstOcho);
       sliderBandejas.style.marginLeft = "-100%";
    }, 800);
}

function PrevOcho() {
    let sliderSectionOcho = document.querySelectorAll(".slider__section-8");
    let sliderSectionLastOcho = sliderSectionOcho[sliderSectionOcho.length-1];
    sliderBandejas.style.marginLeft = "0";
    sliderBandejas.style.transition = "all 0.8s";
    setTimeout(function () {
       sliderBandejas.style.transition = "none";
       sliderBandejas.insertAdjacentElement('afterbegin', sliderSectionLastOcho);
       sliderBandejas.style.marginLeft = "-100%";
    }, 800);
}

btnRigthOcho.addEventListener('click', function () {
    NextOcho();
});

btnLeftOcho.addEventListener('click', function () {
    PrevOcho();
});

//! ******* Slider Decoración para el hogar *******

const sliderDeco = document.querySelector(".slider-deco");
let sliderSectionNueve = document.querySelectorAll(".slider__section-9");
let sliderSectionLastNueve = sliderSectionNueve[sliderSectionNueve.length-1];

const btnLeftNueve = document.querySelector("#btn-prev-9");
const btnRigthNueve = document.querySelector("#btn-next-9");

sliderDeco.insertAdjacentElement('afterbegin', sliderSectionLastNueve);

function NextNueve() {
    let sliderSectionFirstNueve = document.querySelectorAll(".slider__section-9")[0];
    sliderDeco.style.marginLeft = "-200%";
    sliderDeco.style.transition = "all 0.10s";
    setTimeout(function () {
       sliderDeco.style.transition = "none";
       sliderDeco.insertAdjacentElement('beforeend', sliderSectionFirstNueve);
       sliderDeco.style.marginLeft = "-100%";
    }, 1000);
}

function PrevNueve() {
    let sliderSectionNueve = document.querySelectorAll(".slider__section-9");
    let sliderSectionLastNueve = sliderSectionNueve[sliderSectionNueve.length-1];
    sliderDeco.style.marginLeft = "0";
    sliderDeco.style.transition = "all 0.10s";
    setTimeout(function () {
       sliderDeco.style.transition = "none";
       sliderDeco.insertAdjacentElement('afterbegin', sliderSectionLastNueve);
       sliderDeco.style.marginLeft = "-100%";
    }, 1000);
}

btnRigthNueve.addEventListener('click', function () {
    NextNueve();
});

btnLeftNueve.addEventListener('click', function () {
    PrevNueve();
});

//! ******* Slider Jardineria *******

const sliderMacetas = document.querySelector(".slider-jardineria");
let sliderSectionDiez = document.querySelectorAll(".slider__section-10");
let sliderSectionLastDiez = sliderSectionDiez[sliderSectionDiez.length-1];

const btnLeftDiez = document.querySelector("#btn-prev-10");
const btnRigthDiez = document.querySelector("#btn-next-10");

sliderMacetas.insertAdjacentElement('afterbegin', sliderSectionLastDiez);

function NextDiez() {
    let sliderSectionFirstDiez = document.querySelectorAll(".slider__section-10")[0];
    sliderMacetas.style.marginLeft = "-200%";
    sliderMacetas.style.transition = "all 0.10s";
    setTimeout(function () {
       sliderMacetas.style.transition = "none";
       sliderMacetas.insertAdjacentElement('beforeend', sliderSectionFirstDiez);
       sliderMacetas.style.marginLeft = "-100%";
    }, 1000);
}

function PrevDiez() {
    let sliderSectionDiez = document.querySelectorAll(".slider__section-10");
    let sliderSectionLastDiez = sliderSectionDiez[sliderSectionDiez.length-1];
    sliderMacetas.style.marginLeft = "0";
    sliderMacetas.style.transition = "all 0.10s";
    setTimeout(function () {
       sliderMacetas.style.transition = "none";
       sliderMacetas.insertAdjacentElement('afterbegin', sliderSectionLastDiez);
       sliderMacetas.style.marginLeft = "-100%";
    }, 1000);
}

btnRigthDiez.addEventListener('click', function () {
    NextDiez();
});

btnLeftDiez.addEventListener('click', function () {
    PrevDiez();
});