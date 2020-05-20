import Highway from '/node_modules/@dogstudio/highway/src/transition.js';

const tl = gsap.timeline();

class Fade extends Highway.Transition{
    in({from, to ,done}){
        tl.fromTo(to, 0.5, {left: "-100%", top: "50%"}, {left: "0%"})
        .fromTo(to, 0.5, {height: "2vh"}, {height: "90vh", top:"10%", onComplete: function(){
            done();
        }});
    }
    out({from, done}){
        done();
    }
}

export default Fade;