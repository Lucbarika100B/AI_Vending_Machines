/* Grab-n-Go AI — minimal progressive enhancement. No external dependencies. */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  /* ---------------------------- Mobile nav ------------------------------ */
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

  /* --------------------- Attribution line reveal ------------------------ */
  var attrib = document.querySelector(".attrib");
  if (attrib) {
    if (reduce || !hasIO) {
      attrib.classList.add("reveal");
    } else {
      var aio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { attrib.classList.add("reveal"); aio.disconnect(); }
        });
      }, { threshold: 0.35 });
      aio.observe(attrib);
    }
  }

  /* -------- One reveal style everywhere + dashboard/log triggers -------- */
  var revealEls = [].slice.call(document.querySelectorAll(".reveal-up, .dashboard, .logcard, .badgecard"));
  if (reduce || !hasIO) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var rio = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); obs.unobserve(en.target); }
      });
    }, { threshold: 0.18 });
    revealEls.forEach(function (el) { rio.observe(el); });
  }

  /* --------------------------- Hero video player ------------------------ */
  /* Play/pause only. No native control bar, no seeking, no volume, no
     download or picture-in-picture. Under reduced motion the poster stands in
     for the video and playback is not offered.
     DORMANT: no page ships a [data-vplayer] yet — see the note in site.css. */
  var vp = document.querySelector("[data-vplayer]");
  if (vp) {
    var vid = vp.querySelector("video");
    var btn = vp.querySelector("[data-vplay]");
    if (vid && btn) {
      if (reduce) {
        btn.remove();
      } else {
        var sync = function () {
          var playing = !vid.paused && !vid.ended;
          vp.classList.toggle("is-playing", playing);
          btn.setAttribute("aria-pressed", playing ? "true" : "false");
        };
        btn.addEventListener("click", function () {
          if (vid.paused || vid.ended) {
            var p = vid.play();
            if (p && p.catch) { p.catch(function () { /* autoplay policy — ignore */ }); }
          } else {
            vid.pause();
          }
        });
        vid.addEventListener("play", sync);
        vid.addEventListener("pause", sync);
        vid.addEventListener("ended", function () {
          vid.currentTime = 0;   /* back to the first frame, not a black end frame */
          sync();
        });
      }
      vid.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    }
  }

  /* ------------------------------ Lightbox ------------------------------ */
  var items = [].slice.call(document.querySelectorAll(".gallery-item"));
  var lb = document.querySelector(".lightbox");
  if (items.length && lb) {
    var lbImg = lb.querySelector("img");
    var closeBtn = lb.querySelector(".lightbox__close");
    var prevBtn = lb.querySelector(".lightbox__nav.prev");
    var nextBtn = lb.querySelector(".lightbox__nav.next");
    var idx = 0;
    var lastFocus = null;

    function show(i) {
      idx = (i + items.length) % items.length;
      var full = items[idx].getAttribute("data-full");
      var alt = items[idx].getAttribute("data-alt") || "";
      lbImg.setAttribute("src", full);
      lbImg.setAttribute("alt", alt);
    }
    function open(i) {
      lastFocus = document.activeElement;
      show(i);
      lb.classList.add("open");
      lb.setAttribute("aria-hidden", "false");
      closeBtn.focus();
      document.addEventListener("keydown", onKey);
    }
    function close() {
      lb.classList.remove("open");
      lb.setAttribute("aria-hidden", "true");
      document.removeEventListener("keydown", onKey);
      if (lastFocus) lastFocus.focus();
    }
    function onKey(e) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(idx + 1);
      else if (e.key === "ArrowLeft") show(idx - 1);
    }
    items.forEach(function (it, i) { it.addEventListener("click", function () { open(i); }); });
    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", function () { show(idx - 1); });
    nextBtn.addEventListener("click", function () { show(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  }
})();
