// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

const themeToggle = document.getElementById("themeToggle")
const body = document.body

const currentTheme = localStorage.getItem("theme") || "dark-mode"
body.classList.add(currentTheme)
updateThemeIcon(currentTheme)

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
    localStorage.setItem("theme", "light-mode")
    updateThemeIcon("light-mode")
  } else {
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
    localStorage.setItem("theme", "dark-mode")
    updateThemeIcon("dark-mode")
  }
})

function updateThemeIcon(theme) {
  const sunIcon = themeToggle.querySelector(".sun-icon")
  const moonIcon = themeToggle.querySelector(".moon-icon")

  if (theme === "dark-mode") {
    sunIcon.style.display = "block"
    moonIcon.style.display = "none"
  } else {
    sunIcon.style.display = "none"
    moonIcon.style.display = "block"
  }
}

// Contact form submission
const contactForm = document.getElementById("contactForm")
const confetti = window.confetti // Declare the confetti variable
contactForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const isDarkMode = body.classList.contains("dark-mode")
  const confettiColors = isDarkMode
    ? ["#ef4444", "#fbbf24", "#3b82f6", "#a855f7"]
    : ["#fca5a5", "#fef08a", "#93c5fd", "#d8b4fe"]

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: confettiColors,
  })

  // Show success message
  alert("Thank you for your message! I will get back to you soon.")

  // Reset form
  contactForm.reset()
})

// Scroll button functionality
const scrollButton = document.querySelector(".scroll-button")
if (scrollButton) {
  scrollButton.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" })
  })
}

// Add scroll animation to nav links
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 30px rgba(239, 68, 68, 0.2)"
  } else {
    navbar.style.boxShadow = "0 2px 20px rgba(239, 68, 68, 0.1)"
  }
})


const skillBadges = document.querySelectorAll(".skill-badge")
const skillModal = document.getElementById("skillModal")
const modalClose = document.querySelector(".modal-close")

const skillDescriptions = {
  "Web Design":
    "Creating beautiful and intuitive web interfaces that engage users and provide excellent user experiences.",
  "Frontend Development":
    "Building responsive, performant web applications using modern technologies and best practices.",
  "UI/UX": "Designing user interfaces and experiences that are both aesthetically pleasing and highly functional.",
  "Responsive Design": "Developing websites that look and work perfectly on all devices, from mobile to desktop.",
  JavaScript: "Mastering vanilla JavaScript to create interactive and dynamic web experiences.",
  React: "Building scalable and maintainable applications using React and modern JavaScript frameworks.",
  "CSS/HTML": "Crafting semantic HTML and advanced CSS for clean, maintainable, and performant code.",
  Figma: "Designing user interfaces and prototypes using Figma for seamless design-to-development workflow.",
}

skillBadges.forEach((badge) => {
  badge.addEventListener("click", (e) => {
    const skillName = e.target.textContent
    document.getElementById("modalSkillTitle").textContent = skillName
    document.getElementById("modalSkillDescription").textContent =
      skillDescriptions[skillName] || "No description available."
    skillModal.classList.add("active")
    document.body.style.overflow = "hidden"
  })
})

modalClose.addEventListener("click", () => {
  skillModal.classList.remove("active")
  document.body.style.overflow = ""
})

skillModal.addEventListener("click", (e) => {
  if (e.target === skillModal) {
    skillModal.classList.remove("active")
    document.body.style.overflow = ""
  }
})

function openLightbox(element) {
  const src = element.querySelector('img').src;
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
