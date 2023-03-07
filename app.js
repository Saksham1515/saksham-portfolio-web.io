let hamburger = document.querySelector(".hamburger");
let bye = document.querySelector('.close');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});

bye.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

function closeNav(){
    mobileNav.classList.remove('open');
}    
console.log(window.innerHeight);
console.log(window.innerWidth);