// Current menu state.
var menuOpened = false;

// Is menu currently animating to open/close. Used to disable further clicks when animating.
var menuAnimationRunning = false;

// Button and Menu elements.
var quickLinksButton = document.getElementsByClassName("qlmenu-menubutton")[0];
var quickLinksMenu = document.getElementsByClassName("qlmenu")[0];

quickLinksButton.onclick = function() {
  if (!menuAnimationRunning) {
    menuAnimationRunning = true;

    if (menuOpened) {
      console.log("FadeOut");
      setTimeout(fadeOutComplete, 500);
      quickLinksMenu.style.opacity = 0;
    } else {
      console.log("FadeIn");
      quickLinksMenu.style.opacity = 0;
      quickLinksMenu.classList.remove("qlmenu-hide");
      setTimeout(fadeInStart, 50);
    }
  }
};

function fadeOutComplete() {
  quickLinksMenu.classList.add("qlmenu-hide");
  menuOpened = false;
  menuAnimationRunning = false;
}

function fadeInStart() {
  quickLinksMenu.style.opacity = 1;
  setTimeout(fadeInComplete, 500);
}

function fadeInComplete() {
  menuOpened = true;
  menuAnimationRunning = false;
}