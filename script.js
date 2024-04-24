// picture gallery on homepage 

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
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// sticky nav bar on homepage 

const header = document.querySelector('.nav1')
const watcher = document.createElement('div')

watcher.setAttribute('testy', '')
header.before(watcher)

const navObserver = new IntersectionObserver(() => {
    header.classList.toggle('sticking')
})

navObserver.observe(watcher)

// form validations
function validateForm() {
    let x = document.forms["myForm"]["flname"].value;
    let y = document.forms["myForm"]["phonenumb"].value;
    let z = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Your name must be filled out");
        return false;
    } else if (y == "") {
        alert("Your phone number must be filled out");
        return false;
    } else if (z == "") {
        alert("Your email must be filled out")
    }

};






/*
const fp = document.getElementById('time');

fp.addEventListener('input', event => {
    if (fp.validity) {
        fp.setCustomValidity('Custom message: greater than 100 not allowed.');
    } else {
        fp.setCustomValidity('');
    }
});
*/