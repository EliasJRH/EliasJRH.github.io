function toggleDarkMode() {
  var darkToggle = document.getElementById("dark-mode-check-box");
  var body = document.body;
  var projectItems = document.getElementsByClassName("project-item");
  var timelineFlags = document.getElementsByClassName("flag");
  var timelineDescs = document.getElementsByClassName("desc");
  var flagsQS = document.querySelectorAll(".flag");
  if (darkToggle.checked) {
    body.style.animation = "fade-to-dark 1s forwards";
    for (var i = 0; i < projectItems.length; i++) {
      projectItems[i].style.animation = "fade-to-dark-project-item 1s forwards";
    }
    for (var i = 0 ; i < timelineFlags.length; i++) {
      timelineFlags[i].style.animation = "fade-to-dark-timeline-flag 1s forwards";
    }
    for (var i = 0; i < timelineDescs.length; i++) {
      timelineDescs[i].style.animation = "fade-to-dark-timeline-desc 1s forwards";
    }
    for (var i = 0 ; i < flagsQS.length; i++) {
      flagsQS[i].classList.toggle("light");
    }
  } else {
    body.style.animation = "fade-to-light 1s forwards";
    for (var i = 0; i < projectItems.length; i++) {
      projectItems[i].style.animation = "fade-to-light-project-item 1s forwards";
    }
    for (var i = 0 ; i < timelineFlags.length; i++) {
      timelineFlags[i].style.animation = "fade-to-light-timeline-flag 1s forwards";
    }
    for (var i = 0; i < timelineDescs.length; i++) {
      timelineDescs[i].style.animation = "fade-to-light-timeline-desc 1s forwards";
    }
    for (var i = 0 ; i < flagsQS.length; i++) {
      flagsQS[i].classList.toggle("light");
    }
  }
}
