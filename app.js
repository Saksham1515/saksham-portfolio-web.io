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


// // for checking width and  heigth
// var a = window.confirm("want to check Width & height");
// if (a == true)
// {
//     console.log("Height :: ", window.innerHeight);
//     console.log("Width :: ", window.innerWidth);
// }