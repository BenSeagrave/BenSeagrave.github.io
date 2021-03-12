const scrollButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const mediaQuery = window.matchMedia("(max-width: 768px)");

const setupTooltips = (e) => {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
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

mediaQuery.addListener(setupTooltips);
setupTooltips(mediaQuery);