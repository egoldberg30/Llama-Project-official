import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import { Carousel } from "@fancyapps/ui";
const mainTL = gsap.timeline();

// window.addEventListener('load', function(){

//   const myCarousel = new Carousel(document.querySelector(".carousel"), {
//       // Options
//       // 'center' : false
//   });
// });


function fadein() {
  const tl = gsap.timeline()
gsap.set("#wheat", {alpha:0, x:-600})
tl.to("#wheat", {alpha:1, x:0, scrollTrigger:{trigger: "#maintain", scrub:true}})
}
ScrollTrigger.defaults({
    toggleActions: "restart pause resume none"
    
})


function fader() {
  const tl = gsap.timeline()
gsap.set("#maintain-content", {alpha:0,  x:-600})
tl.to("#maintain-content", {alpha:1, x:0, scrollTrigger:{trigger: "#stickout", scrub:true}})
}
ScrollTrigger.defaults({
    toggleActions: "restart pause resume none"
    
})

function faderright() {
  const tl = gsap.timeline()
gsap.set("#stickout-image", {alpha:0,  y:400})
tl.to("#stickout-image", {alpha:1, y:0, scrollTrigger:{trigger: "#stickout-content h2", scrub:true}})
}
ScrollTrigger.defaults({
    toggleActions: "restart pause resume none"
    
})

function sherringfadeup() {
  const tl = gsap.timeline()
gsap.set("#sheering", {alpha:0,  y:400})
tl.to("#sheering", {alpha:1, y:0, scrollTrigger:{trigger: "#stickout-content h2", scrub:true}})
}
ScrollTrigger.defaults({
    toggleActions: "restart pause resume none"
    
})








// import {burgerTL} from "./burgerAnimation";
// import {menuAnimation} from "./mobileMenu";
// import {NavMouseEvents} from "./navHover";

// var burgerButton = document.querySelector("hamburger_icon");
// let canISeeMenu = false;

// function openCloseMenu(){
//     if(canISeeMenu === false){
//         burgerTL.play();
//         menuAnimation.play();
//         canISeeMenu = true;
//     }else{
//         burgerTL.reverse();
//         menuAnimation.reverse();
//         canISeeMenu = false;
//     }
// }

// function burgerClose(){
//     if(document.documentElement.clientWidth > 1024){
//         burgerTL.reverse();
//         menuAnimation.reverse();
//         canISeeMenu = false;
//     }
// }

// burgerButton.addEventListener("click", openCloseMenu);


// let navButtons = document.querySelectorAll(".nav-links");

// for (const button of navButtons){
//     button.addEventListener("click", openCloseMenu);
  
// }


// function displayNav(){
//     if(document.documentElement.clientWidth > 1024){
//         gsap.set("#nav-container",{alpha:1});
//     }
//     else{
//         gsap.set("#nav-container",{alpha:0});
//     }
// }

// window.addEventListener("resize", displayNav);
// window.addEventListener("load", displayNav);

// window.addEventListener("resize", burgerClose);





// window.addEventListener('load', function() {
//     NavMouseEvents();
// })









mainTL.add(fadein())
.add(fader())
.add(sherringfadeup())
.add(faderright());