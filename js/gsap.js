const homeAnimation = gsap.timeline({ delay: 0.5 });
homeAnimation.from(".home svg path", {
  y: -200,
  x: 200,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
});

homeAnimation.from(".home header .logo a", {
  y: -20,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

homeAnimation.from(
  ".home header .nav li a",
  {
    y: -20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
  },
  "-=0.8"
);

homeAnimation.from(
  ".home .auth",
  {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  },
  "-=0.6"
);

homeAnimation.from(
  ".hero .imgs img",
  {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },
  "-=1"
);
homeAnimation.from(".hero .info .heading1", {
  x: -50,
  opacity: 0,
  duration: 0.8,
});
homeAnimation.from(
  ".hero .info .heading2",
  {
    x: -50,
    opacity: 0,
    duration: 0.8,
  },
  "-=0.6"
);
homeAnimation.from(
  ".hero .info .line",
  {
    x: -50,
    opacity: 0,
    duration: 0.8,
  },
  "-=0.6"
);
homeAnimation.from(
  ".hero .btns",
  {
    y: 30,
    opacity: 0,
    duration: 0.6,
  },
  "-=0.6"
);
