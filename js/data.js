// Demo data for Blossom and Co. Nail Studio.
// Fictional business. All names, prices, reviews and contact details are samples.

const SALON = {
  name: "Blossom and Co. Nail Studio",
  demoPhoneWhatsApp: "15550100000", // sample 555 number, not a real line
  hours: [
    { day: "Monday", time: "9:00 AM to 6:00 PM" },
    { day: "Tuesday", time: "9:00 AM to 6:00 PM" },
    { day: "Wednesday", time: "9:00 AM to 6:00 PM" },
    { day: "Thursday", time: "9:00 AM to 7:00 PM" },
    { day: "Friday", time: "9:00 AM to 7:00 PM" },
    { day: "Saturday", time: "9:00 AM to 5:00 PM" },
    { day: "Sunday", time: "Closed" }
  ],
  times: ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM", "6:00 PM"]
};

const SERVICES = [
  { id: "classic-mani", name: "Classic Manicure", price: 30, minutes: 45, tag: "Essential",
    desc: "Soak, cuticle care, shaping, buff and regular polish with a hand massage." },
  { id: "gel-mani", name: "Gel Manicure", price: 45, minutes: 60, tag: "Most booked",
    desc: "Classic manicure finished with long wear gel polish, cured and sealed." },
  { id: "spa-pedi", name: "Spa Pedicure", price: 55, minutes: 60, tag: "Relaxing",
    desc: "Warm soak, exfoliation, callus care, massage and polish of your choice." },
  { id: "acrylic-full", name: "Acrylic Full Set", price: 65, minutes: 90, tag: "Extensions",
    desc: "Full acrylic set in your chosen length and shape, finished with gel color." },
  { id: "gelx-full", name: "Gel X Full Set", price: 60, minutes: 75, tag: "Extensions",
    desc: "Soft gel extensions, lighter than acrylic, with a natural finish." },
  { id: "nail-art", name: "Custom Nail Art", price: 15, minutes: 30, tag: "Add on",
    desc: "Hand painted designs, from minimal lines to detailed art, priced per set." },
  { id: "mani-pedi", name: "Mani and Pedi Combo", price: 75, minutes: 105, tag: "Best value",
    desc: "Gel manicure and spa pedicure in one visit. Our most complete service." },
  { id: "kids-mani", name: "Kids Manicure, 12 and under", price: 20, minutes: 30, tag: "Family",
    desc: "Gentle mini manicure with fun colors, for our youngest guests." }
];

const GALLERY = [
  { name: "Soft Pink Almond", style: "linear-gradient(135deg,#f6d5dd,#e8a7b8)" },
  { name: "French Classic", style: "linear-gradient(135deg,#fdf3ec,#ecd9c8)" },
  { name: "Cherry Red Square", style: "linear-gradient(135deg,#d96a76,#a93444)" },
  { name: "Sage and Gold Foil", style: "linear-gradient(135deg,#cdd8c3,#93a983)" },
  { name: "Lavender Ombre", style: "linear-gradient(135deg,#e3d8f2,#b49ad9)" },
  { name: "Nude Minimal Lines", style: "linear-gradient(135deg,#f1e4d8,#cbb39d)" }
];

const REVIEWS = [
  { name: "Sample guest, Maria", stars: 5, text: "My gel set lasted three full weeks and the studio is spotless. Booking took less than a minute." },
  { name: "Sample guest, Ashley", stars: 5, text: "They showed me the price before starting and the design came out exactly like my photo." },
  { name: "Sample guest, Sofia", stars: 5, text: "The spa pedicure is my monthly treat now. Calm, clean and never rushed." }
];
