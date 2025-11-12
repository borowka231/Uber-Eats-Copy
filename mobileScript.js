const loginButton = document.getElementById("logIn");
const registerButton = document.getElementById("registerIn");
const mobileNav = document.getElementById("mobile-nav");
const mobileButton = document.getElementById("mobile-button");
const popup = document.querySelector(".delivery-pop-up");
const overlay = document.querySelector(".overlay");
const closePopup = document.getElementById("close-popup");

if (window.innerWidth < 1024) {
  loginButton.innerHTML = "<i class='fa-solid fa-user'></i>";
  loginButton.style.borderRadius = "50%";

  registerButton.innerHTML = "Rejestracja";
  document.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll > 470) {
      mobileNav.style.display = "flex";
    } else {
      mobileNav.style.display = "none";
    }
  });
  mobileButton.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
  });
}
