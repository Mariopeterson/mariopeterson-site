// ============================================================
// mariopeterson.com
// ============================================================

// Footer year
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// ----- Mobile nav -----
const siteNav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");

function toggleMenu() {
  siteNav.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", siteNav.classList.contains("nav-open"));
}
navToggle.addEventListener("click", toggleMenu);

// Smooth scrolling for in-page links
function smoothScrollTo(event) {
  const targetId = event.currentTarget.getAttribute("href");
  if (targetId.length > 1 && document.querySelector(targetId)) {
    event.preventDefault();
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    siteNav.classList.remove("nav-open"); // close mobile menu after navigating
  }
}
const pageLinks = document.querySelectorAll('a[href^="#"]');
pageLinks.forEach(function (link) {
  link.addEventListener("click", smoothScrollTo);
});

// ----- Rotating fact -----
// Copy comes from content.md. TODO three more facts.
const facts = [
  "Enlisted in the U.S. Air Force straight out of high school",
  "Learned Korean at Osan Air Base and now speaks it at a professional level",
  "Has acting credits on Korean television",
  "Grew a partner book in India from about $600K to $1.3M",
  "Gilman Scholar; spent a semester in Singapore",
  "Trains for Hyrox",
  "Also speaks Spanish"
];
const factText = document.getElementById("fact-text");

function showRandomFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
}
document.getElementById("fact-btn").addEventListener("click", showRandomFact);
showRandomFact(); // show one as soon as the page loads

// ----- 04 / Stack -----
// One array of objects drives both the grid and the picker.
const stack = [
  { name: "Microsoft ecosystem",
    desc: "Five years, enterprise customer success and OEM partner management. Azure, M365, Dynamics, Power Platform fundamentals certified.",
    detail: "" },
  { name: "Google Cloud",
    desc: "Generative AI Leader certified (Jan 2026). Professional Cloud Architect in progress.",
    detail: "" },
  { name: "n8n",
    desc: "Automation and agent workflows. Prue Care Agent.",
    detail: "" },
  { name: "Claude Code",
    desc: "How I build. This site, K-Compliance Agent.",
    detail: "" },
  { name: "Korean",
    desc: "Professional level. Osan, Korean TV, Seoul.",
    detail: "" }
];

const stackGrid = document.getElementById("stack-grid");
for (let i = 0; i < stack.length; i++) {
  const item = stack[i];
  const card = document.createElement("div");
  card.className = "stack-card";

  const title = document.createElement("h3");
  title.textContent = item.name;
  card.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = item.desc;
  card.appendChild(desc);

  stackGrid.appendChild(card);
}

const stackSelect = document.getElementById("stack-select");
for (let i = 0; i < stack.length; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = stack[i].name;
  stackSelect.appendChild(option);
}

const stackDetail = document.getElementById("stack-detail");
function showStackDetail() {
  const item = stack[stackSelect.value];
  // content.md still has "Detail: TODO" for every entry.
  const detail = item.detail
    ? '<p>' + item.detail + '</p>'
    : '<p class="todo">TODO detail</p>';
  stackDetail.innerHTML =
    "<h3>" + item.name + "</h3>" +
    "<p>" + item.desc + "</p>" +
    detail;
}
stackSelect.addEventListener("change", showStackDetail);
showStackDetail(); // populate with the first item on load

// ----- 05 / Photos: click an image to enlarge it -----
// No images yet; this wires itself up as soon as they are in the gallery.
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = '<img alt=""><p class="lightbox-caption"></p>';
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");

function openLightbox(event) {
  const clicked = event.currentTarget;
  lightboxImg.src = clicked.src;
  lightboxImg.alt = clicked.alt;
  lightboxCaption.textContent = clicked.dataset.caption || clicked.alt;
  lightbox.classList.add("open");
}
function closeLightbox() {
  lightbox.classList.remove("open");
}
galleryImages.forEach(function (img) {
  img.addEventListener("click", openLightbox);
});
lightbox.addEventListener("click", closeLightbox);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeLightbox();
});

// ----- 06 / Contact: copy the email address -----
// The button stays disabled until the address is in content.md and in data-copy.
const copyButton = document.querySelector(".copy-email");
copyButton.addEventListener("click", function () {
  const address = copyButton.dataset.copy;
  if (!address || !navigator.clipboard) return;
  navigator.clipboard.writeText(address).then(function () {
    const original = copyButton.textContent;
    copyButton.textContent = "Copied";
    setTimeout(function () { copyButton.textContent = original; }, 2000);
  });
});

// ============================================================
// Scroll reveals (GSAP). Fade-up only.
// ============================================================

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// If GSAP failed to load, or the visitor asked for less motion, un-hide the
// hero and skip every animation. The page works either way.
if (typeof gsap === "undefined" || reduceMotion) {
  document.documentElement.classList.remove("js");
} else {

  const heroTimeline = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.8 } });
  heroTimeline
    .from(".hero h1", { y: 40, autoAlpha: 0 })
    .from(".hero p", { y: 24, autoAlpha: 0 }, "-=0.4")
    .from(".hero .scroll", { y: 16, autoAlpha: 0, duration: 0.5 }, "-=0.3");

  gsap.registerPlugin(ScrollTrigger);

  // Each section fades up as it scrolls into view.
  gsap.utils.toArray(".section").forEach(function (sec) {
    gsap.from(sec, {
      y: 32,
      autoAlpha: 0,
      duration: 0.7,
      scrollTrigger: { trigger: sec, start: "top 85%" }
    });
  });

}
