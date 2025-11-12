const planButton = document.getElementById("plan-button");
const deliveryButton = document.getElementById("delivery-button");
const openDeliveryPopup = document.getElementById("open-change-delivery");
const deliveryChangePopup = document.querySelector(".delivery-change-popup");
const closeDeliveryButton = document.getElementById("close-delivery");
const daysOfTheWeek = document.getElementById("days-of-the-week");
const deliveryHours = document.getElementById("delivery-hours");

openDeliveryPopup.addEventListener("click", () => {
  deliveryChangePopup.style.display = "block";
  overlay.style.display = "block";
});

closeDeliveryButton.addEventListener("click", () => {
  deliveryChangePopup.style.display = "none";
  overlay.style.display = "none";
});
overlay.addEventListener("click", () => {
  deliveryChangePopup.style.display = "none";
  overlay.style.display = "none";
});

function putDates() {
  const days = ["nie", "pon", "wt", "śr", "czw", "pt", "sob"];
  const months = [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru",
  ];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const day = date.getDay();
    const month = date.getMonth();

    const option = document.createElement("option");
    option.textContent = `${days[day]},${date.getDate()} ${months[month]}`;
    option.setAttribute(
      "value",
      `${days[day]},${date.getDate()} ${months[month]}`
    );
    daysOfTheWeek.appendChild(option);
  }
}
putDates();

function putHours() {
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      let hour;
      let mins;
      if (h < 10) {
        hour = "0" + h;
      } else {
        hour = h;
      }
      if (m < 10) {
        mins = "0" + m;
      } else {
        mins = m;
      }
      const option = document.createElement("option");
      option.textContent = `${hour}:${mins}`;
      option.setAttribute("value", `${hour}:${mins}`);
      deliveryHours.appendChild(option);
    }
  }
}
putHours();
