let slide1 = document.getElementById("slide01");
let slide2 = document.getElementById("slide02");
let showSlide1 = true;

setInterval( () => {
    if(showSlide1) {
        showSlide1 = false;
        slide1.style.display = "none"
        slide2.style.display = "grid"
    }
    else {
        showSlide1 = true;
        slide1.style.display = "grid"
        slide2.style.display = "none"
    }
}, 5000);