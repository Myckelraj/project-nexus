// Hamburger Menu Toggle
document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".navbar ul").classList.toggle("active");
});

// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");
const prevBtn = document.querySelector(".slider .prev");
const nextBtn = document.querySelector(".slider .next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Event Listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto-slide
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});

// Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const quoteForm = document.querySelector(".quote-form");
  const contactForm = document.querySelector(".contact-form");

  function validateForm(form) {
    let valid = true;
    const inputs = form.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        valid = false;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    return valid;
  }

  function handleFormSubmit(event) {
    const form = event.target;
    if (!validateForm(form)) {
      event.preventDefault(); // Prevent form submission if validation fails
      alert("Please fill out all required fields.");
    }
  }

  if (quoteForm) {
    quoteForm.addEventListener("submit", handleFormSubmit);
  }

  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }
});

// Back-to-Top Button
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.createElement("button");
  backToTopButton.textContent = "Top";
  backToTopButton.classList.add("back-to-top");
  document.body.appendChild(backToTopButton);

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the "Company" navigation item
  const companyNavItem = document.querySelector(".nav-item.company");

  // Function to handle click events
  function handleCompanyClick(event) {
    event.preventDefault(); // Prevent the default link behavior
  }

  // Add click event listener
  if (companyNavItem) {
    companyNavItem.addEventListener("click", handleCompanyClick);
  }
});
