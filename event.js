// THEME SWITCHER
const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
if(localStorage.getItem("theme")==="light"){document.body.classList.add("light");icon.textContent="☀️";}
toggle.onclick=()=>{
  document.body.classList.toggle("light");
  const isLight=document.body.classList.contains("light");
  icon.textContent=isLight?"☀️":"🌙";
  localStorage.setItem("theme",isLight?"light":"dark");
}

// EVENT FILTERING
const monthSelect=document.getElementById("filter-month");
const locationSelect=document.getElementById("filter-location");
const cards=document.querySelectorAll(".event-card");
function filterEvents(){
  const month=monthSelect.value;
  const location=locationSelect.value;
  cards.forEach(card=>{
    const cardMonth=card.dataset.month;
    const cardLocation=card.dataset.location;
    card.style.display=(month==="all"||month===cardMonth)&&(location==="all"||location===cardLocation)?"block":"none";
  });
}
monthSelect.addEventListener("change",filterEvents);
locationSelect.addEventListener("change",filterEvents);

// MODAL
const modal=document.getElementById("bookingModal");
const closeModal=document.getElementById("closeModal");
const eventButtons=document.querySelectorAll(".event-btn");
const modalTitle=document.getElementById("modalEventName");
let selectedEvent="";
eventButtons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    const card=btn.closest(".event-card");
    selectedEvent=card.querySelector("h3").textContent;
    modalTitle.textContent="Book: "+selectedEvent;
    modal.style.display="flex";
  });
});
closeModal.onclick=()=>modal.style.display="none";
window.onclick=e=>{if(e.target===modal)modal.style.display="none";};

// WHATSAPP BOOKING
document.getElementById("sendWhatsapp").onclick=()=>{
  const name=document.getElementById("custName").value;
  const email=document.getElementById("custEmail").value;
  const phone=document.getElementById("custPhone").value;
  const date=document.getElementById("custDate").value;
  const guests=document.getElementById("custGuests").value;
  if(!name||!phone||!date){alert("Please fill required fields.");return;}
  const whatsappNumber="2547XXXXXXXX"; // replace with your number
  const message=`Hello FBR Team,
I'd like to book the following event:

Event: ${selectedEvent}
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Guests: ${guests}

Please confirm availability.`;
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,"_blank");
};
