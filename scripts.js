const scrollButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollButton.classList.add("appear");
  } else {
    scrollButton.classList.remove("appear");
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const mediaQuery = window.matchMedia("(max-width: 768px)");

const setupTooltips = (e) => {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('i[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    if (e.matches) {
      let tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
        trigger: "manual",
      });
      tooltip.show();
    } else {
      let tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
        trigger: "hover focus",
      });
    }
    return;
  });
};

// depreciated - need to change
mediaQuery.addListener(setupTooltips);
setupTooltips(mediaQuery);

gsap.from("#welcome-text", {
  delay: 0.5,
  opacity: 0,
  duration: 1.5,
  ease: "back.out(1)",
  x: 400,
})

gsap.from(".navbar", {
  delay: 1.5,
  opacity: 0,
  duration: 0.5,
  ease: "back.out(1)",
  y: -25,
})

gsap.from("#skills-icons", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top center",
  },
  y: 100,
  duration: 2,
  opacity: 0,
});

const projects = gsap.utils.toArray('.project');
projects.forEach(project => {
  gsap.from(project, {
    x: -300,
    opacity: 0,
    scrollTrigger: {
      trigger: project,
      start: "top center",
    }
  })
});