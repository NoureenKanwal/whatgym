// Animated Cursor
var crsr = document.querySelector("#moving-cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

// Navbar Animation - appearing disappearing while scrolling
gsap.to("header", {
  backgroundColor: "#100303",
  duration: 0.5,
  height: "90px",
  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

/// Navbar Animation - main section in out while scrolling
gsap.to("main", {
  backgroundColor: "#100303",
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

// Navbar Button Animation
let buttons = document.querySelectorAll(".primary-button");

buttons.forEach(function (button) {
  let item = button.querySelector(".round");

  button.addEventListener("mouseenter", function (event) {
    this.classList += " animate";

    let buttonX = event.offsetX;
    let buttonY = event.offsetY;

    if (buttonY < 24) {
      item.style.top = 0 + "px";
    } else if (buttonY > 30) {
      item.style.top = 48 + "px";
    }

    item.style.left = buttonX + "px";
    item.style.width = "1px";
    item.style.height = "1px";
  });

  button.addEventListener("mouseleave", function () {
    this.classList.remove("animate");

    let buttonX = event.offsetX;
    let buttonY = event.offsetY;

    if (buttonY < 24) {
      item.style.top = 0 + "px";
    } else if (buttonY > 30) {
      item.style.top = 48 + "px";
    }
    item.style.left = buttonX + "px";
  });
});

// Nav toggle
const menu = document.querySelector("#menu");
const navLinks = document.querySelector(".nav-items");
const links = document.querySelectorAll(".nav-items li");

menu.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Menu Animation
    menu.classList.toggle("toggle");
});

// About us Animation
gsap.from("#about-us img, #aboutus-text", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

// Card Animation
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

// Colon Animation
gsap.from("#colon-left", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon-left",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon-right", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon-right",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

// CTA Animation
gsap.from(".cta-heading", {
  y: 50,
  scrollTrigger: {
    trigger: ".cta-heading",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

// Carousel Button Animation
let button = document.querySelector(".carousel-button");
let item = document.querySelector(".carousel-button .round");

button.addEventListener("mouseenter", function (event) {
  this.classList += " animate-crusl-btn";

  let buttonX = event.offsetX;
  let buttonY = event.offsetY;

  if (buttonY < 24) {
    item.style.top = 0 + "px";
  } else if (buttonY > 30) {
    item.style.top = 48 + "px";
  }

  item.style.left = buttonX + "px";
  item.style.width = "1px";
  item.style.height = "1px";
});

button.addEventListener("mouseleave", function () {
  this.classList.remove("animate-crusl-btn");

  let buttonX = event.offsetX;
  let buttonY = event.offsetY;

  if (buttonY < 24) {
    item.style.top = 0 + "px";
  } else if (buttonY > 30) {
    item.style.top = 48 + "px";
  }
  item.style.left = buttonX + "px";
});