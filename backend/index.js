AOS.init({
    duration: 900,
    once: true,
    easing: "ease-out",
});
gsap.registerPlugin(ScrollTrigger);

gsap.to(".story-image", {
    width: "100%",
    height: "100vh",
    borderRadius: 0,

    scrollTrigger: {
        trigger: ".image-section",
        start: "top center",
        end: "bottom center",
        scrub: true
    }
});
