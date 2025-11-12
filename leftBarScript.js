const leftBarButton = document.getElementById("left-bar-button");
const leftBar = document.getElementById("left-bar");
//const overlay = document.querySelector(".overlay");

leftBarButton.addEventListener("click", () => {
  leftBar.style.left = "0";
  overlay.style.display = "block";
});
overlay.addEventListener("click", () => {
  leftBar.style.left = "-1000px";
  overlay.style.display = "none";
});

