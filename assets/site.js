/* Grab-n-Go AI — minimal progressive enhancement. No external dependencies. */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // The single scroll-reveal on the attribution line. Respect reduced motion.
  var attrib = document.querySelector(".attrib");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (attrib) {
    // set dash length so the draw animation is proportional to the path
    var rule = attrib.querySelector(".a-rule");
    if (rule && rule.getTotalLength) {
      try {
        var len = Math.ceil(rule.getTotalLength());
        attrib.style.setProperty("--len", len);
      } catch (e) { /* no-op */ }
    }
    if (reduce || !("IntersectionObserver" in window)) {
      attrib.classList.add("reveal");
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            attrib.classList.add("reveal");
            io.disconnect();
          }
        });
      }, { threshold: 0.35 });
      io.observe(attrib);
    }
  }
})();
