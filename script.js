const tl = gsap.timeline();

window.addEventListener("load", () => {
  tl.to(".wiper", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.2,
    ease: "power3.inOut"
  });
  tl.to(".site p", {
    duration: 0.6,
    translateY: "1",
    opacity: 1,
    ease: "sine.inOut(1, 0.3)"
  });
  tl.to(".img", {
    duration: 0.6,
    translateY: "1",
    opacity: 1,
    ease: "sine.inOut(1, 0.3)"
  });
});
