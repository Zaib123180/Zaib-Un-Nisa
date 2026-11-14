// CONFIG: add your professional email here. Leave empty to hide the email button.
const EMAIL = "zaib12112005@gmail.com";

const mq = matchMedia("(prefers-reduced-motion: reduce)");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const setMenu = (open) => {
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu.classList.toggle("open", open);
};
burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
menu.addEventListener("click", (e) => { if (e.target.tagName === "A") setMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

const mail = document.getElementById("email");
if (EMAIL) { mail.href = "mailto:" + EMAIL; mail.hidden = false; }

// Typing effect (static text when reduced motion is on)
const words = ["Artificial Intelligence Student", "AI & Automation Enthusiast"];
const el = document.getElementById("type");
if (!mq.matches) {
  let w = 0, i = words[0].length, del = true;
  (function tick() {
    const word = words[w];
    el.textContent = word.slice(0, i);
    let wait = del ? 35 : 70;
    if (del) i--; else i++;
    if (!del && i > word.length) { del = true; i = word.length; wait = 1800; }
    else if (del && i < 0) { del = false; i = 0; w = (w + 1) % words.length; wait = 300; }
    setTimeout(tick, wait);
  })();
}

// Highlight current section in nav
const links = [...menu.querySelectorAll("a")];
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.hash === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach((s) => io.observe(s));

// Gentle reveal on scroll (skipped for reduced motion)
if (!mq.matches) {
  const rv = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll("section:not(.hero) h2, .glass, .facts > div, .lead-list li, footer").forEach((n) => { n.classList.add("rv"); rv.observe(n); });
}
