//! ******* Slider presentando la sección de talleres *******

const slider = document.querySelector(".taller-slider");
let sliderSection = document.querySelectorAll(".slider__section-1");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#btn-prev-uno");
const btnRigth = document.querySelector("#btn-next-uno");

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

btnRigth.addEventListener('click', function () {
    Next();
});

btnLeft.addEventListener('click', function () {
    Prev();
});

// function autoplay() {
//     interval = setInterval(function () {
//         Next();
//     },5000);
// }

// autoplay();

//! ******* Slider de imagen y texto con los testimonios de las alumnas *******

const sliderTest = document.querySelector(".slider-testimonio");
let sliderSectionTes = document.querySelectorAll(".slider__section_testimonio");
let sliderSectionLastTes = sliderSectionTes[sliderSectionTes.length-1];

const btnLeftTes = document.querySelector("#btn-prev-tes");
const btnRigthTes = document.querySelector("#btn-next-tes");

sliderTest.insertAdjacentElement('afterbegin', sliderSectionLastTes);

function NextTes() {
    let sliderSectionFirstTes = document.querySelectorAll(".slider__section_testimonio")[0];
    sliderTest.style.marginLeft = "-200%";
    sliderTest.style.transition = "all 0.5s";
    setTimeout(function () {
       sliderTest.style.transition = "none";
       sliderTest.insertAdjacentElement('beforeend', sliderSectionFirstTes);
       sliderTest.style.marginLeft = "-100%";
    }, 500);
}

function PrevTes() {
    let sliderSectionTes = document.querySelectorAll(".slider__section_testimonio");
    let sliderSectionLastTes = sliderSectionTes[sliderSectionTes.length-1];
    sliderTest.style.marginLeft = "0";
    sliderTest.style.transition = "all 0.5s";
    setTimeout(function () {
       sliderTest.style.transition = "none";
       sliderTest.insertAdjacentElement('afterbegin', sliderSectionLastTes);
       sliderTest.style.marginLeft = "-100%";
    }, 500);
}

btnRigthTes.addEventListener('click', function () {
    NextTes();
});

btnLeftTes.addEventListener('click', function () {
    PrevTes();
});

//! ******* Slider del taller de La Esperanza *******

const sliderMesas = document.querySelector(".slider-la-esperanza");
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

//! ******* Slider del taller de Campos de Roca *******

const sliderFanales = document.querySelector(".slider-campos");
let sliderSectionTres = document.querySelectorAll(".slider__section-3");
let sliderSectionLastTres = sliderSectionTres[sliderSectionTres.length-1];

const btnLeftTres = document.querySelector("#btn-prev-3");
const btnRigthTres = document.querySelector("#btn-next-3");

sliderFanales.insertAdjacentElement('afterbegin', sliderSectionLastTres);

function NextTres() {
    let sliderSectionFirstTres = document.querySelectorAll(".slider__section-3")[0];
    sliderFanales.style.marginLeft = "-200%";
    sliderFanales.style.transition = "all 0.5s";
    setTimeout(function () {
       sliderFanales.style.transition = "none";
       sliderFanales.insertAdjacentElement('beforeend', sliderSectionFirstTres);
       sliderFanales.style.marginLeft = "-100%";
    }, 500);
}

function PrevTres() {
    let sliderSectionTres = document.querySelectorAll(".slider__section-3");
    let sliderSectionLastTres = sliderSectionTres[sliderSectionTres.length-1];
    sliderFanales.style.marginLeft = "0";
    sliderFanales.style.transition = "all 0.5s";
    setTimeout(function () {
       sliderFanales.style.transition = "none";
       sliderFanales.insertAdjacentElement('afterbegin', sliderSectionLastTres);
       sliderFanales.style.marginLeft = "-100%";
    }, 500);
}

btnRigthTres.addEventListener('click', function () {
    NextTres();
});

btnLeftTres.addEventListener('click', function () {
    PrevTres();
});

//! ******* Slider del taller de El Ático *******

const sliderMates = document.querySelector(".slider-atico");
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
  
  