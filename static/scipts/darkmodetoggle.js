function toggleDarkMode() {
  var darkToggle = document.getElementById("dark-mode-check-box");
  var body = document.body;
  var projectItems = document.getElementsByClassName("project-item");
  if (darkToggle.checked) {
    body.style.animation = "fade-to-dark 1s forwards";
    for (var i = 0; i < projectItems.length; i++) {
      projectItems[i].style.animation = "fade-to-dark-project-item 1s forwards";
    }
  } else {
    body.style.animation = "fade-to-light 1s forwards";
    for (var i = 0; i < projectItems.length; i++) {
      projectItems[i].style.animation = "fade-to-light-project-item 1s forwards";
    }
  }
}
