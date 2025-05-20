// =========================
// COUNTDOWN SCRIPT
// =========================
const eventDate = new Date("May 24, 2025 08:00:00").getTime();

const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft >= 0) {
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "The event is live!";
    }
}, 1000);

// =========================
// SCROLL FUNCTION
// =========================
function scrollToBranch(id) {
    const branch = document.getElementById(id);
    if (branch) {
        branch.scrollIntoView({ behavior: 'smooth' });
    }
}

// =========================
// MOBILE NAV TOGGLE
// =========================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// Close the mobile menu when a nav link is clicked
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
    // Countdown timer
    document.addEventListener("DOMContentLoaded", function () {
        const eventDate = new Date("May 24, 2025 08:00:00").getTime();
        const timerInterval = setInterval(function () {
          const now = new Date().getTime();
          const distance = eventDate - now;
  
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
          document.getElementById("days").textContent = days;
          document.getElementById("hours").textContent = hours;
          document.getElementById("minutes").textContent = minutes;
          document.getElementById("seconds").textContent = seconds;
  
          if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "Event has started!";
          }
        }, 1000);
      });
      function scrollToBranch(branchId) {
        const section = document.getElementById(branchId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
      function openOverlay(branchId) {
        document.getElementById(`${branchId}-overlay`).classList.add('active');
      }
      
      function closeOverlay(branchId) {
        document.getElementById(`${branchId}-overlay`).classList.remove('active');
      }
            