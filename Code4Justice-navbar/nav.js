const toggleBtn = document.querySelector('.toggle-button');
const links = document.querySelector('.navbar-links');
let timeout;
toggleBtn.addEventListener('click',function(){

    links.classList.toggle('active');
})