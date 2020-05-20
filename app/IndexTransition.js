const header = document.querySelector(".name-title");
const intro = document.querySelector(".intro");
const introtyping = document.querySelector(".intro-typing");
const directory = document.querySelectorAll(".directory-bar");
const social_links = document.querySelectorAll(".social-links");


const tl = gsap.timeline();

tl.fromTo(intro, 0.5, {width:"0", height:"0"}, {width:"100%", height:"100vh"})
.fromTo(social_links, 0.5, {opacity: "0"}, {opacity: "1"})
.fromTo(header, 0.7, {opacity: "0"}, {opacity: "1"})
.fromTo(directory,0.9, {x: "100%", opacity:"0"}, {x: "0%", opacity:"1"})
.fromTo(introtyping, 1.2, {x:"-100%", opacity:"0"}, {x:"0%", opacity:"1"});

