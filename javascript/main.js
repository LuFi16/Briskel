
/* warning and info styling (general function) */
let gWarning = document.getElementById("c-warning")
let gWarningInfo = document.getElementById("c-warning-info")
let gScreenWidth = parseInt(window.innerWidth);
if (gWarning.style.display === "none") {
    if(gScreenWidth >= "800px"){
        gWarningInfo.style.borderTopRightRadius = "0";
        gWarningInfo.style.borderTopLeftRadius = "0";
    }
    if(gScreenWidth < "800px"){
        gWarningInfo.style.borderTopRightRadius = "2rem";
        gWarningInfo.style.borderTopLeftRadius = "2rem";
    }

} else {
    gWarningInfo.style.borderTopRightRadius = "0";
    gWarningInfo.style.borderTopLeftRadius = "0";
}



/* menu on smaller screens */
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



/* functions for opening and close sections on page (Parameters, Manual, Electronics) */

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

/* SLIDER on main page*/
/* Slideshow JS code from: https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9*/

let gSlideIndex = 1;
let gMyTimer;
let gSlideshowContainer;

window.addEventListener("load",function() {
    showSlides(gSlideIndex);
    gMyTimer = setInterval(function(){plusSlides(1)}, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    gSlideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    gSlideshowContainer.addEventListener('mouseenter', pause)
    gSlideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
    clearInterval(gMyTimer);
    if (n < 0){
        showSlides(gSlideIndex -= 1);
    } else {
        showSlides(gSlideIndex += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1){
        gMyTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
    } else {
        gMyTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
    clearInterval(gMyTimer);
    gMyTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    showSlides(gSlideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("c-slide");
    let dots = document.getElementsByClassName("c-slideshow-dot");
    if (n > slides.length) {gSlideIndex = 1}
    if (n < 1) {gSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[gSlideIndex-1].style.display = "block";
    dots[gSlideIndex-1].className += " dot-active";
}

pause = () => {
    clearInterval(gMyTimer);
}

resume = () =>{
    clearInterval(gMyTimer);
    gMyTimer = setInterval(function(){plusSlides(gSlideIndex)}, 4000);
}



/* can be deleted when project is complete */
function NeniKDispozici(){
    alert("Omlouváme se, ale tento odkaz nyní není k dispozici. Funkční je prozatím jen Tříbarevná dioda");
}
function NeniKDispoziciJazyk(){
    alert("Omlouváme se, ale v současné době není možné přepnout stránku do jiného jazyka. Stránka je ve vývoji.\n\n" +
          "We're sorry, but it\'s not possible to switch the page to another language now. This site is under construction.");
}


function biggestImgClose(){
    document.getElementById("c-close-object").style.display = "none";
}
function biggestImgOpen(){
    document.getElementById("c-close-object").style.display = "flex";
}




function miniGallery(imgs) {
    let bigImg = document.getElementById("mini-gallery-big-img");
    bigImg.src = imgs.src;
    bigImg.parentElement.style.display = "block";
}





/* ----------------- trying to do gallery below -------------------------*/

function showLightbox(){
    document.getElementById("c-lightbox-wrapper").style.display = "block";
}
function hideLightbox(){
    document.getElementById("c-lightbox-wrapper").style.display = "none";
}


function dalsiSLide(m){

}


function tentoSlide(n){
    switch(n){
        case 1:
            document.getElementById("img1").style.display = "block";
            document.getElementById("img2").style.display = "none";
            document.getElementById("img3").style.display = "none";
            document.getElementById("img4").style.display = "none";
            document.getElementById("img5").style.display = "none";
           break;

        case 2:
            document.getElementById("img1").style.display = "none";
            document.getElementById("img2").style.display = "block";
            document.getElementById("img3").style.display = "none";
            document.getElementById("img4").style.display = "none";
            document.getElementById("img5").style.display = "none";
           break;

        case 3:
            document.getElementById("img1").style.display = "none";
            document.getElementById("img2").style.display = "none";
            document.getElementById("img3").style.display = "block";
            document.getElementById("img4").style.display = "none";
            document.getElementById("img5").style.display = "none";
           break;

        case 4:
            document.getElementById("img1").style.display = "none";
            document.getElementById("img2").style.display = "none";
            document.getElementById("img3").style.display = "none";
            document.getElementById("img4").style.display = "block";
            document.getElementById("img5").style.display = "none";
           break;

        case 5:
            document.getElementById("img1").style.display = "none";
            document.getElementById("img2").style.display = "none";
            document.getElementById("img3").style.display = "none";
            document.getElementById("img4").style.display = "none";
            document.getElementById("img5").style.display = "block";
           break;
    }
}