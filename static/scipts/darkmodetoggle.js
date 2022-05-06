function toggleDarkMode() {
  var darkToggle = document.getElementById("dark-mode-check-box");
  var body = document.body;
  if (darkToggle.checked) {
    body.style.animation = "fade-to-dark 1s forwards";
  } else {
    body.style.animation = "fade-to-light 1s forwards";
  }
}
