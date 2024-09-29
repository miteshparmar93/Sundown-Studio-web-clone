//import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });




function page4animation(){
    var elemC = document.querySelector('.elem-con');
var fix = document.querySelector(".fixed-image")
elemC.addEventListener("mouseenter" , ()=>{
    fix.style.display= "block";
    
    
})
elemC.addEventListener("mouseleave" , ()=>{
    fix.style.display= "none";
})

var elems =document.querySelectorAll(".elem");

elems.forEach(function(e){
e.addEventListener("mouseenter" ,()=>{
    var image = e.getAttribute("data-image")
    fix.style.backgroundImage =`url(${image})`
})
})
}
page4animation();

// var elem1 =document.querySelector("#elem1");
// elem1.addEventListener("mouseenter", ()=>{
//     var image =elem1.getAttribute("data-image")
//     fix.style.backgroundImage =`url(${image})`
// })

function swipperanimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        
      });
}
function loaderanimation(){
    var loader =document.querySelector(".loader");

swipperanimation();

setTimeout(function(){
 loader.style.top ="-100%"
},5000)
}
loaderanimation();




