// Small site behaviors: mobile navigation, footer year and reveal on scroll.

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section, .hero-copy, .hero-photo");
  sections.forEach(function (el) { el.classList.add("reveal"); });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    sections.forEach(function (el) { observer.observe(el); });
  } else {
    sections.forEach(function (el) { el.classList.add("revealed"); });
  }
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  toggle.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("open"); });
  });
  document.getElementById("year").textContent = new Date().getFullYear();
});
