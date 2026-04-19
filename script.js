const menuToggle = document.getElementById("menu-toggle");
const navBar = document.getElementById("nav-bar");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-bar a");
const sections = document.querySelectorAll("section");

// Toggle menu + icon
menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
  overlay.classList.toggle("active");

  // Change icon
  if (navBar.classList.contains("active")) {
    menuToggle.innerHTML = "✖";
  } else {
    menuToggle.innerHTML = "☰";
  }
});

// Close menu when clicking overlay
overlay.addEventListener("click", () => {
  navBar.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.innerHTML = "☰";
});

// Close menu when clicking nav links
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    overlay.classList.remove("active");
    menuToggle.innerHTML = "☰";
  });
});

// Active section highlight on scroll
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});