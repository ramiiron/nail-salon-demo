// Renders services, gallery, hours and reviews from js/data.js.

function money(n) { return "$" + n.toFixed(0); }

function renderServices() {
  const grid = document.getElementById("serviceGrid");
  grid.innerHTML = SERVICES.map(function (s) {
    return '<article class="service-card">' +
      '<p class="service-tag">' + s.tag + "</p>" +
      "<h3>" + s.name + "</h3>" +
      "<p>" + s.desc + "</p>" +
      '<p class="service-meta"><strong>' + money(s.price) + "</strong> · about " + s.minutes + " min</p>" +
      '<a class="service-book" href="#book" data-service="' + s.id + '">Book this service</a>' +
      "</article>";
  }).join("");

  grid.querySelectorAll("[data-service]").forEach(function (link) {
    link.addEventListener("click", function () {
      const select = document.getElementById("bkService");
      select.value = link.getAttribute("data-service");
      select.dispatchEvent(new Event("change"));
    });
  });
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = GALLERY.map(function (g) {
    return '<figure class="gallery-tile" style="background:' + g.style + '">' +
      "<figcaption>" + g.name + "</figcaption></figure>";
  }).join("");
}

function renderHours() {
  const list = document.getElementById("hoursList");
  list.innerHTML = SALON.hours.map(function (h) {
    return "<li><span>" + h.day + "</span><span>" + h.time + "</span></li>";
  }).join("");
}

function renderReviews() {
  const grid = document.getElementById("reviewGrid");
  grid.innerHTML = REVIEWS.map(function (r) {
    return '<blockquote class="review-card"><p>"' + r.text + '"</p>' +
      "<footer>" + r.name + " · " + r.stars + " stars</footer></blockquote>";
  }).join("");
}

document.addEventListener("DOMContentLoaded", function () {
  renderServices();
  renderGallery();
  renderHours();
  renderReviews();
});
