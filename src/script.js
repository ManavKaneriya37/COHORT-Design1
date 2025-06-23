gsap.registerPlugin(ScrollTrigger);

// Enable mobile support explicitly
ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
  markers: false,
  // force 3rd-party scroll libs to refresh on resize
  invalidateOnRefresh: true,
});


window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.refresh();

});
window.addEventListener("resize", () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.refresh();
  
});




const lenis = new Lenis({
  duration: 2.2, // ↑ Longer duration = slower and smoother
  easing: t => 1 - Math.pow(1 - t, 4), // very soft easing curve (quartic)
  smooth: true,
  smoothTouch: true, // keep smoothness on mobile
  direction: 'vertical',
  gestureDirection: 'both', // optional: allow scroll in both axis if needed
  touchMultiplier: 1.2, // adjust touch scroll force (lower = smoother)
  wheelMultiplier: 1, // adjust wheel sensitivity
  normalizeWheel: true, // normalize for different devices
  infinite: false // keep false unless you want infinite loop scroll
})

  // Animate the scroll with requestAnimationFrame
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Update GSAP ScrollTrigger on scroll
  lenis.on('scroll', () => {
    ScrollTrigger.update();
  });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);




function navbarAnimation() {
  let tl = gsap.timeline();

  tl.fromTo(
    ".hero nav h1, .hero nav .navRight button",
    {
      y: -100,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrub: 1,
      stagger: {
        amount: 0.3,
      },
    }
  );

  var heroTxt = document.querySelector(".hero .heroContent h1");
  let clutter = heroTxt.innerText.split("");

  heroTxt.innerHTML = "";
  heroTxt.style.whiteSpace = "pre-line";

  clutter.forEach((letter, index) => {
    let span = document.createElement("span");
    // Replace space with non-breaking space for correct rendering
    span.innerText = letter === " " ? "\u00A0" : letter;
    span.style.display = "inline-block";
    span.style.opacity = 0;
    if (index > 8) {
      span.appendChild(document.createElement("br"));
      span.style.color = "#fff";
    }
    heroTxt.appendChild(span);

    gsap.to(span, {
      opacity: 1,
      y: -20,
      duration: 4,
      ease: "bounce.inOut",
      delay: index * 0.05,
    });
  });

  tl.fromTo(
    ".hero .heroContent p",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      scrub: 1,
      stagger: {
        amount: 0.5,
      },
    }
  );

  tl.fromTo(
    ".hero .heroContent button",
    {
      scale: 0.4,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      scrub: true,
      ease: "power4.inOut",
      duration: 0.6,
    }
  );
}

function page2Animation() {
  gsap.from(".page2 > div", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page2",
      start: "top 70%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });

  gsap.from(".page2 img", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page2",
      start: "top 65%",
      end: "bottom 40%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 100,
    opacity: 0,
    scale: 0.7,
    rotate: (i) => (i % 2 === 0 ? -100 : 100),
    duration: 1.3,
    stagger: 0.15,
    ease: "expo.inOut(2.5)",
  });

  // Background color reveal effect
  gsap.fromTo(
    ".page2",
    { backgroundColor: "#fff" },
    {
      scrollTrigger: {
        scroller: ".container",
        trigger: ".page2",
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
        markers: false,
      },
      backgroundColor: "#F3EDE4",
      duration: 1,
    }
  );

  let tl = gsap.timeline({
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page2",
      start: "top 80%",
      end: "bottom 40%",
      scrub: 4,
      toggleActions: "play none none reverse",
      markers: false,
    },
  });
  tl.fromTo(
    ".page2 div h1, .page2 div p, .page2 div button",
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: {
        amount: 0.9,
      },
      ease: "bouce.out(1)",
    }
  );
}

function page3Animation() {
  gsap.from(".page3 > div", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page3",
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });

  gsap.from(".page3 .reveal-wrapper .reveal-content article .right img", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page3",
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 100,
    opacity: 0,
    scale: 0.2,
    duration: 1.3,
    stagger: 0.15,
    ease: "expo.inOut(2.5)",
  });

  // Shutter reveal animation for .page3 .line
  gsap.from(".page3 .line", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page3",
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      markers: false, // Remove in production
    },
    scaleY: 0,
    transformOrigin: "bottom center",
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page3",
      start: "top 90%",
      end: "bottom 10%",
      scrub: true,
      toggleActions: "play none none reverse",
      markers: false,
    },
  });

  tl.fromTo(
    ".page3 div h1, .page3 div p, .page3 div button",
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: {
        amount: 0.9,
      },
      ease: "bounce.out(1)",
    }
  );
  gsap.from(".page3 .left h2", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page6 .left h2",
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      markers: false // Remove in production
    },
    scaleY: 0,
    transformOrigin: "bottom center",
    opacity: 0,
    duration: 3,
    ease: "power4.out",
  });

  gsap.utils.toArray(".reveal-wrapper").forEach((wrapper) => {
    const cover = wrapper.querySelector(".reveal-cover");
    gsap.fromTo(
      cover,
      { y: "0%" },
      {
        y: "-100%",
        duration: 2,
        stagger: 0.7,
        ease: "power4.inOut",
        scrollTrigger: {
          scroller: ".container",
          trigger: wrapper,
         start: "top 90%",
      end: "bottom 10%",
          toggleActions: "play none none reverse",
          markers: false // Remove in production
        },
      }
    );

    gsap.fromTo(
      ".reveal-content",
      { y: "100%" },
      {
        y: "0%",
        duration: 2,
        stagger: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          scroller: ".container",
          trigger: wrapper,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false // Remove in production
        },
      }
    );
  });

  const articles = document.querySelectorAll(".reveal-content article");
  articles.forEach((article) => {
    article.addEventListener("mouseenter", () => {
        const back = article.querySelector('.back');
        if (back) {
            gsap.to(back, {
                height: "100%",
                duration: 0.5,
                ease: "power3.inOut",
            });
        }
        // Smoothly transition all text color to #fff
        gsap.to([article, ...article.querySelectorAll("*")], {
            color: "#fff",
            duration: 0.5,
            ease: "power3.inOut",
            overwrite: "auto"
        });
    });

    article.addEventListener("mouseleave", () => {
        const back = article.querySelector('.back');
        if (back) {
            gsap.to(back, {
                height: "0%",
                duration: 0.5,
                ease: "power3.inOut",
            });
        }
        // Smoothly revert text color to original
        gsap.to([article, ...article.querySelectorAll("*")], {
            color: "#222", // Replace with your default color if needed
            duration: 0.5,
            ease: "power3.inOut",
            overwrite: "auto"
        });
    });
  });

  // Smooth background color change for the whole page when .page3 is in view
  gsap.to(".page3", {
    backgroundColor: "#f0f0f0",
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page3",
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play reverse play reverse",
      scrub: true,
      markers: false // Set to true for debugging
    },
    duration: 1,
    ease: "power2.inOut"
  });
}

function page4Animation() {
  gsap.from(".page4", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page4",
      start: "top 60%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  })

  gsap.to(".page4 img", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page4",
      start: "top 65%",
      end: "bottom 40%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 100,
    opacity: 1,
    scale: 0.95,
    rotate: (i) => (i % 2 === 0 ? -60 : 60),
    duration: 1.3,
    stagger: 0.5,
    ease: "expo.inOut(4)",
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page4",
      start: "top 80%",
      end: "bottom 40%",
      scrub: true,
      toggleActions: "play none none reverse",
      markers: false,
    },
  });

  const page4P = document.querySelector(".page4 p");
  if (page4P) {
    const words = page4P.textContent.split(" ");
    page4P.innerHTML = "";
    words.forEach((word, wIdx) => {
      // Wrap each word in a span for possible styling
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.whiteSpace = "pre";
      // Animate each letter in the word
      word.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        span.style.opacity = 0;
        wordSpan.appendChild(span);
        gsap.to(span, {
          opacity: 1,
          y: 20,
          duration: 1,
          delay: (wIdx * 0.15) + (i * 0.02),
          ease: "power2.out",
          scrollTrigger: {
            scroller: ".container",
            trigger: page4P,
            start: "top 95%",
            toggleActions: "play none none reverse",
            markers: false,
          }
        });
      });
      page4P.appendChild(wordSpan);
      // Add space after each word except the last
      if (wIdx < words.length - 1) {
        page4P.appendChild(document.createTextNode(" "));
      }
    });
  }
}

function marqueeeAnimation() {
  const marqueeContainer = document.querySelector(".marquee-wrapper");
  const marquee = document.querySelector(".marquee-wrapper #marquee-content");

  let mouseX = 0;
  let mouseY = 0;
  let isInside = false;
  let isInsideMarquee = false;

  marqueeContainer.addEventListener("mousemove", (e) => {
    const rect = marqueeContainer.getBoundingClientRect();
    mouseX = e.clientX - rect.left - 20; // Adjusted for horizontal offset
    mouseY = e.clientY - rect.top - 20; // Adjusted for vertical offset

    if (isInside) {
      gsap.to('.marquee-wrapper .dotter', {
        x: mouseX,
        y: mouseY,
        duration: 0.8,
        scale: 1
      });
    }
  });

  marqueeContainer.addEventListener("mouseenter", () => {  
    isInside = true;
    gsap.to('.marquee-wrapper .dotter', {
      x: mouseX,
      y: mouseY,
      height: '4rem',
      width: '4rem',
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
      scale: 1.07,
    });
  });

  marquee.addEventListener("mouseenter", () => {
    isInsideMarquee = true;
    gsap.to('.marquee-wrapper .dotter', {
      x: mouseX,
      y: mouseY,
      height: '5.5rem',
      width: '5.5rem',
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
      // scale: 2,
    });
  });

  marqueeContainer.addEventListener("mouseleave", () => {
    isInside = false;
    gsap.to('.marquee-wrapper .dotter', {
      duration: 0.5,
      height: 0,
      width: 0,
      opacity: 0,
      ease: "power2.inOut",
      scale: 0,
    });
  });

  marquee.addEventListener("mouseleave", () => {
    isInsideMarquee = false;
    gsap.to('.marquee-wrapper .dotter', {
      x: mouseX,
      y: mouseY,
      height: '4rem',
      width: '4rem',
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
      // scale: 2,
    });
  });

}

function page5Animation() {
  gsap.from(".page5 img", {
    scrollTrigger: {
      scroller: ".container",
      trigger: ".page5",
      start: "top 65%",
      end: "bottom 40%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 100,
    opacity: 0.6,
    scale: 0.6,
    rotate: (i) => (i % 2 === 0 ? -200 : 200),
    duration: 1.3,
    stagger: {
      amount: 0.6
    },
    ease: "expo.inOut(4)",
  });


  gsap.registerPlugin(Draggable);

  Draggable.create(".page5 img", {
  type: "x,y",
  bounds: document.querySelector(".page5"),
  inertia: true,
  onDragEnd: function (e) {
    let x = e.target._gsTransform.x;
    let y = e.target._gsTransform.y;
    gsap.to(this.target, {
      x,
      y,
      duration: 2,
      delay: 0.9,
      ease: "power4.inOut",
    });
  },
});

}

navbarAnimation();
page2Animation();
// if (window.innerWidth > 768) {
  page3Animation();
  page4Animation();
// } 
marqueeeAnimation();
page5Animation();

