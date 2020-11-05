
function HamburgerMenu(){
    let x = document.getElementById("c-mobile-nav");
    let y = document.getElementById("c-page");

    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.borderRadius = "30px";
    } else {
        x.style.display = "block";
        y.style.borderRadius = "0 0 30px 30px";
    }
}





function ShowHidePar(){
    let content = document.getElementById("c-parameters")
    let arrowUp = document.getElementById("c-par-open")
    let arrowDown = document.getElementById("c-par-close")

    if (content.style.display === "none") {
        content.style.display = "block";
        arrowUp.style.display = "block";
        arrowDown.style.display = "none";
    } else {
        content.style.display = "none";
        arrowUp.style.display = "none";
        arrowDown.style.display = "block";
    }
}

function ShowHideMan(){
    let content = document.getElementById("c-manual")
    let arrowUp = document.getElementById("c-man-open")
    let arrowDown = document.getElementById("c-man-close")

    if (content.style.display === "none") {
        content.style.display = "block";
        arrowUp.style.display = "block";
        arrowDown.style.display = "none";
    } else {
        content.style.display = "none";
        arrowUp.style.display = "none";
        arrowDown.style.display = "block";
    }
}

function ShowHideEle(){
    let content = document.getElementById("c-electronics")
    let arrowUp = document.getElementById("c-ele-open")
    let arrowDown = document.getElementById("c-ele-close")

    if (content.style.display === "none") {
        content.style.display = "block";
        arrowUp.style.display = "block";
        arrowDown.style.display = "none";
    } else {
        content.style.display = "none";
        arrowUp.style.display = "none";
        arrowDown.style.display = "block";
    }
}






/* Slideshow JS code from: https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9*/

let slideIndex = 1;
let myTimer;
let slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
    clearInterval(myTimer);
    if (n < 0){
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1){
        myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
    } else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("c-slide");
    let dots = document.getElementsByClassName("c-slideshow-dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dot-active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () =>{
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}



/*
//JUST MANUAL SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("c-slide");
    let dots = document.getElementsByClassName("c-slideshow-dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dot-active";
}
*/


function NeniKDispozici(){      /* delete when project is complete */
    alert("Omlouváme se, ale tento odkaz nyní není k dispozici. Funkční je prozatím jen Tříbarevná dioda");
}