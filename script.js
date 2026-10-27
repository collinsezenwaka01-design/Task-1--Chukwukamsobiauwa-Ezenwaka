const navigation = document.querySelector(".navigation");
const homeButton = document.querySelector("#homeButton");
const hint = document.querySelector("#menuHint");
const sections = document.querySelectorAll(".content-section");

function showHome() {
  sections.forEach(section => {
    section.hidden = true;
  });

  document.querySelector("main").hidden = false;
  hint.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

homeButton.addEventListener("click", () => {
  const isHidden = navigation.classList.toggle("menu-hidden");
  homeButton.setAttribute("aria-expanded", String(!isHidden));
  hint.textContent = isHidden
    ? "Tap Home to reveal the navigation circles."
    : "Tap a circle to explore a section.";
});

document.querySelectorAll(".nav-circle").forEach(button => {
  button.addEventListener("click", () => {
    const sectionId = button.dataset.section;
    const selectedSection = document.getElementById(sectionId);

    if (!selectedSection) return;

    document.querySelector("main").hidden = true; 
    hint.hidden = true;

    sections.forEach(section => {
      section.hidden = section !== selectedSection;
    });

    selectedSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

document.querySelectorAll(".back-button").forEach(button => {
  button.addEventListener("click", showHome);
});
