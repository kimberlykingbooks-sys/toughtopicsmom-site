// "Book a Consultation" button (site header).
//
// Paste the Stan booking page link below, e.g.
//   https://stan.store/Toughtopicsmom/p/book-a-consultation
// Availability (Thursdays 3–5pm Eastern, 60-minute calls), the Zoom link and
// any payment are all set up on that Stan product, not here.
//
// While this is empty, the button goes to the Contact page instead.
export const STAN_BOOKING_URL =
  "https://stan.store/Toughtopicsmom/p/book-a-11-call-with-me-awpo1nej";

export const bookingLink = STAN_BOOKING_URL
  ? { href: STAN_BOOKING_URL, target: "_blank", rel: "noopener noreferrer" }
  : { href: "/contact" };
