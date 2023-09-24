function toggleDarkMode() {
  var darkToggle = document.getElementById("dark-mode-check-box");
  var body = document.body;
  var projectItems = document.getElementsByClassName("project-item");
  var flags = document.getElementsByClassName("flag");
  var flagsQS = document.querySelectorAll(".flag");
  if (darkToggle.checked) {
    body.style.animation = "fade-to-light 1s forwards";
    for (var i = 0; i < projectItems.length; i++) {
      projectItems[i].style.animation = "fade-to-light-project-item 1s forwards";
    }
    for (var i = 0 ; i < flags.length; i++) {
      flags[i].style.animation = "fade-to-light-flag 1s forwards";
    }
    for (var i = 0 ; i < flagsQS.length; i++) {
      flagsQS[i].classList.toggle("light");
    }
  } else {
    body.style.animation = "fade-to-dark 1s forwards";
    for (var i = 0; i < projectItems.length; i++) {
      projectItems[i].style.animation = "fade-to-dark-project-item 1s forwards";
    }
    for (var i = 0 ; i < flags.length; i++) {
      flags[i].style.animation = "fade-to-dark-flag 1s forwards";
    }
    for (var i = 0 ; i < flagsQS.length; i++) {
      flagsQS[i].classList.toggle("light");
    }
  }
}
