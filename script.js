// Navbar active state
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(el => el.classList.remove("active"));
    link.classList.add("active");
  });
});

// Animate progress circles
document.querySelectorAll(".progress-circle").forEach(circle => {
  let value = parseInt(circle.getAttribute("data-value"));
  let angle = Math.round((value / 100) * 360); // full circle (360°)
  circle.style.background = `conic-gradient(#4b9cdb ${angle}deg, #ddd ${angle}deg)`;
});
