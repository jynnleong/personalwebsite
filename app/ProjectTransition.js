const social_links = document.querySelectorAll(".about-links");
const navigation = document.querySelectorAll(".menu");
const project_header = document.querySelector(".project-page");
const project_banner = document.querySelectorAll(".project-banner");
const project_description = document.querySelectorAll(".project-description");
const project_title = document.querySelectorAll(".project-title");

const tl = gsap.timeline();

tl.fromTo(social_links, 0.5, {x:"-100%", opacity:"0"}, {x:"0%", opacity:"1"})
.fromTo(navigation, 0.6, {x:"-20%", opacity:"0"}, {x:"0%", opacity:"1"})
.fromTo(project_header, 0.8, {x:"-100%", opacity:"0"}, {x:"0%", opacity:"1"});

for(var i = 0; i < project_banner.length; i++){
    tl.fromTo(project_banner[i], 0.5, {x:"-100%", opacity:"0"}, {x:"0%", opacity:"1"})
    .fromTo(project_description[i], 0.8, {x:"-100%", opacity:"0"}, {x:"0%", opacity:"1"});
}


