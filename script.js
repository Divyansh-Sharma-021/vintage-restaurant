// 1. Check saved Dark Mode when page loads
window.onload = function () {
  var savedMode = localStorage.getItem("theme");
  if (savedMode === "dark") {
    document.body.classList.add("dark");
  }
};

// 2. Toggle Dark Mode and save in localStorage
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// 3. Mobile Hamburger Menu Toggle
function toggleMenu() {
  var nav = document.getElementById("nav-links");
  nav.classList.toggle("show-menu");
}

// 4. Back to Top Function
function goToTop() {
  window.scrollTo(0, 0);
}

// 5. Image Gallery Lightbox Functions
function openLightbox(imageSource) {
  document.getElementById("big-img").src = imageSource;
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// 6. Simple Form Validation Function
function checkForm() {
  var name = document.getElementById("userName").value;
  var phone = document.getElementById("userPhone").value;
  var guests = document.getElementById("guestCount").value;
  var errorBox = document.getElementById("errorMsg");

  if (name.length < 3) {
    errorBox.innerText = "Error: Name must be at least 3 letters long.";
    return false;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    errorBox.innerText = "Error: Please enter a valid 10-digit phone number.";
    return false;
  }

  if (guests < 1 || guests > 15) {
    errorBox.innerText = "Error: Guests must be between 1 and 15.";
    return false;
  }

  errorBox.style.color = "green";
  errorBox.innerText = "Success! Your table has been booked for " + name + ".";
  return false; // Keeps the message on screen without reloading the page
}