/*************************************************
 *                  THEME SWITCHER
 *************************************************/
const themeToggle = document.getElementById("themeToggle");
const themeIcon   = document.getElementById("themeIcon");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeIcon.textContent = "☀️";
}

themeToggle.onclick = () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeIcon.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
};


/*************************************************
 *                EVENT FILTERING
 *************************************************/
const monthFilter    = document.getElementById("filter-month");
const locationFilter = document.getElementById("filter-location");
const eventCards     = document.querySelectorAll(".event-card");

const filterEvents = () => {
  const month    = monthFilter.value;
  const location = locationFilter.value;

  eventCards.forEach(card => {
    const matchMonth    = month === "all" || month === card.dataset.month;
    const matchLocation = location === "all" || location === card.dataset.location;
    card.style.display = matchMonth && matchLocation ? "block" : "none";
  });
};

monthFilter.addEventListener("change", filterEvents);
locationFilter.addEventListener("change", filterEvents);


/*************************************************
 *                     MODAL
 *************************************************/
const modal       = document.getElementById("bookingModal");
const closeModal  = document.getElementById("closeModal");
const eventButtons = document.querySelectorAll(".event-btn");
const modalTitle  = document.getElementById("modalEventName");

let selectedEvent = "";

// Open modal & autofill price
eventButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".event-card");
    selectedEvent = card.querySelector("h3").textContent;
    modalTitle.textContent = `Book: ${selectedEvent}`;

    const priceInput = document.querySelector("#pricePerHead");
    const eventPrice = Number(card.dataset.price || 0);
    if (priceInput) priceInput.value = eventPrice;

    modal.style.display = "flex";
  });
});

// Close modal
closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };


/*************************************************
 *        REAL-TIME PRICE CALCULATOR
 *************************************************/
const priceInput     = document.querySelector("#pricePerHead");
const guestsInput    = document.querySelector("#custGuests");
const currencySelect = document.querySelector("#currencySelect");
const totalPrice     = document.querySelector("#totalPrice");

// Fixed price per person
const FIXED_PRICE = 150;
priceInput.value = FIXED_PRICE;
priceInput.disabled = true; // Prevent manual change

const currencyRates = { KES:1, USD:0.007, EUR:0.0065, GBP:0.0056 };

const formatCurrency = (amount, currency="KES") => {
  return new Intl.NumberFormat("en-US", { style:"currency", currency }).format(amount);
};

const calculateTotal = () => {
  const price    = FIXED_PRICE;
  let guests     = Number(guestsInput?.value || 0);
  const currency = currencySelect?.value || "KES";

  // Prevent negative or zero guests
  if (guests < 1) guests = 1;
  guestsInput.value = guests;

  const total = price * guests;
  totalPrice.value = formatCurrency(total * (currencyRates[currency] || 1), currency);
};

// Recalculate instantly when input changes
[guestsInput, currencySelect].forEach(input => {
  input.addEventListener("input", calculateTotal);
});

// Initial calculation
calculateTotal();





/*************************************************
 *                WHATSAPP BOOKING
 *************************************************/
document.getElementById("sendWhatsapp").onclick = () => {
  const name   = document.getElementById("custName").value;
  const email  = document.getElementById("custEmail").value;
  const phone  = document.getElementById("custPhone").value;
  const date   = document.getElementById("custDate").value;
  const guests = document.getElementById("custGuests").value;

  if (!name || !phone || !date) {
    alert("Please fill required fields.");
    return;
  }

  const whatsappNumber = "254113230943"; // Replace with your number
  const message = `
Hello FBR Team,
I'd like to book the following event:

Event: ${selectedEvent}
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Guests: ${guests}
Total Price: ${totalPrice.value}

Please confirm availability.
  `;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};




