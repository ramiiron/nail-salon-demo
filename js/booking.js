// Booking flow: fills the form options, shows an estimate, and prepares
// a WhatsApp message to the demo number in js/data.js (a sample 555 number).

function fillBookingOptions() {
  const serviceSelect = document.getElementById("bkService");
  serviceSelect.innerHTML = '<option value="">Choose a service</option>' + SERVICES.map(function (s) {
    return '<option value="' + s.id + '">' + s.name + " · $" + s.price + "</option>";
  }).join("");

  const timeSelect = document.getElementById("bkTime");
  timeSelect.innerHTML = '<option value="">Choose a time</option>' + SALON.times.map(function (t) {
    return '<option value="' + t + '">' + t + "</option>";
  }).join("");

  const dateInput = document.getElementById("bkDate");
  dateInput.min = new Date().toISOString().split("T")[0];
}

function selectedService() {
  const id = document.getElementById("bkService").value;
  return SERVICES.find(function (s) { return s.id === id; }) || null;
}

function updateSummary() {
  const box = document.getElementById("bookingSummary");
  const service = selectedService();
  if (!service) {
    box.textContent = "Choose a service to see your estimated price and duration.";
    return;
  }
  box.textContent = service.name + ": estimated $" + service.price + ", about " + service.minutes + " minutes. Final price is always confirmed before we start.";
}

function submitBooking(event) {
  event.preventDefault();
  const service = selectedService();
  const name = document.getElementById("bkName").value.trim();
  const date = document.getElementById("bkDate").value;
  const time = document.getElementById("bkTime").value;
  const notes = document.getElementById("bkNotes").value.trim();
  if (!service || !name || !date || !time) {
    document.getElementById("bookingSummary").textContent = "Please complete your name, service, date and time.";
    return;
  }
  const lines = [
    "Hello " + SALON.name + ", I would like to book an appointment.",
    "Name: " + name,
    "Service: " + service.name + " (estimated $" + service.price + ")",
    "Date: " + date,
    "Time: " + time
  ];
  if (notes) lines.push("Notes: " + notes);
  const url = "https://wa.me/" + SALON.demoPhoneWhatsApp + "?text=" + encodeURIComponent(lines.join("\n"));
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  fillBookingOptions();
  document.getElementById("bkService").addEventListener("change", updateSummary);
  document.getElementById("bookingForm").addEventListener("submit", submitBooking);
});
