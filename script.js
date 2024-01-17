var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 10 + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});


gsap.registerPlugin(ScrollTrigger);

gsap.to("header", {
  backgroundColor: "#000",
  height: "85px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    start: "top -10%",
    end: "top 10%", 
    scrub: 1.7,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -80%",
    scrub: 2,
  },
});

gsap.from("#about-us, #about-us-in", {
  y: 80,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 60%",
    end: "top 55%",
    scrub: 2,
  },
});

gsap.from("#page4 h1", {
  y: 60,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 80%",
    end: "top 75%",
    scrub: 3,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const inputElements = document.querySelectorAll(".input-box .input-field");

  inputElements.forEach((input) => {
    input.addEventListener("focus", function () {
      input.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      if (!input.value.trim()) {
        input.classList.remove("focused");
      }
    });
  });
});
