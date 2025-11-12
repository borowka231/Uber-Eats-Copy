const navbar = document.getElementById("navbar");
const delivery = document.getElementById("delivery-adress");
const deliveryAdressButton = document.getElementById("delivery-adress-button");
const popup = document.querySelector(".delivery-pop-up");
const overlay = document.querySelector(".overlay");
const closePopup = document.getElementById("close-popup");

if (window.innerWidth > 1024) {
  document.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll >= 77) {
      navbar.style.backgroundColor = "white";
      navbar.style.borderBottom = "1px solid gainsboro";
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.borderBottom = "none";
    }
    if (scroll >= 500) {
      delivery.style.display = "block";
    } else {
      delivery.style.display = "none";
    }
  });

  deliveryAdressButton.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
  });
  overlay.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
  });
}
