AOS.init({
    duration: 1800,
    once: true
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to("#titulo", {
    scale: 1.2,
    duration: 1.5,
    ease: "power3.out"
})
.to(".hero-text", {
    opacity: 1,
    y: -10,
    duration: 0.8,
    stagger: 0.2
});

gsap.from(".objeto-gsap", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: "#animacao",
        start: "top 75%"
    }
});

gsap.to("#titulo",{
    scale: 3 ,
    opacity: 0 ,
    scrollTrigger:{
        trigger: ".hero",
        start: "top top",
        end: "+=1000",
        scrub: 1,
        pin: true
    }
})

const media = gsap.matchMedia();

media.add("(min-width: 901px)", () => {
    gsap.fromTo(".texto", {
        xPercent: 50
    }, {
        xPercent: -100,
        scrollTrigger: {
            trigger: ".texto",
            start: "top 60%",
            end: "bottom top",
            scrub: 1
        }
    });
});
