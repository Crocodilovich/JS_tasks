"use strict";


const showSlide = (slideIndex) => {
    switch (slideIndex) {
        case 1:
            document.querySelector(".slide-1").style.display = "none";
            document.querySelector(".slide-2").style.display = "grid";
            break;
        case 2:
            document.querySelector(".slide-2").style.display = "none";
            document.querySelector(".slide-3").style.display = "grid";
            break;
        case 3:
            document.querySelector(".slide-3").style.display = "none";
            document.querySelector(".slide-1").style.display = "grid";
            break;
    }
};

