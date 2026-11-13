# Blossom and Co. Nail Studio, demo website

A demo website for a nail salon. **Fictional business**: all names, services,
prices, reviews, hours and contact details are samples. Built as a practice
and portfolio project to show how a small salon website would work.

## What it includes

- Services and price list, rendered from data
- Design gallery with placeholder tiles
- About section with hours and location
- Sample guest reviews
- Booking form with price and duration estimate, which prepares a booking
  message for WhatsApp (demo number, a sample 555 line)

## Structure

- `index.html`: page structure and content
- `css/styles.css`: all styles, responsive with a mobile menu
- `js/data.js`: salon data (services, gallery, reviews, hours) in one place
- `js/services.js`: renders services, gallery, hours and reviews
- `js/booking.js`: booking form logic and the WhatsApp handoff
- `js/main.js`: mobile navigation and footer year

## Run it

Open `index.html` in a browser, or visit the GitHub Pages site for this repo.
To adapt it for a real salon, edit only `js/data.js` (name, phone, services,
prices, hours) and swap the gallery tile colors for real photos.
