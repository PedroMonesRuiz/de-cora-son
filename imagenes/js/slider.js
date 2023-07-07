//! ******* Slider presentando De Cora Son *******

const slider = document.querySelector(".slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#btn-prev");
const btnRigth = document.querySelector("#btn-next");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.10s";
    setTimeout(function () {
       slider.style.transition = "none";
       slider.insertAdjacentElement('beforeend', sliderSectionFirst);
       slider.style.marginLeft = "-100%";
    }, 1000);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.10s";
    setTimeout(function () {
       slider.style.transition = "none";
       slider.insertAdjacentElement('afterbegin', sliderSectionLast);
       slider.style.marginLeft = "-100%";
    }, 1000);
}

btnRigth.addEventListener('click', function () {
    Next();
});

btnLeft.addEventListener('click', function () {
    Prev();
});

//! ******* Función para la imagen principal de De Cora Son *******

//! Permite que cuando la primera animación de la imagen termine
//!            comience la siguiente que es infinita.

document.addEventListener("DOMContentLoaded", function() {
    var imagen = document.querySelector(".imagen-principal");
    imagen.addEventListener("animationend", function() {
      imagen.classList.remove("imagen-principal1");
      imagen.classList.add("imagen-principal2");
    });
  });

