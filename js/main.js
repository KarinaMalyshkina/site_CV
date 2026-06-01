(function () {
  'use strict';

  // Year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header shadow on scroll
  var header = document.querySelector('.site-header');
  var onScroll = function () {
    if (!header) return;
    if (window.scrollY > 4) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section highlight
  var navLinkEls = document.querySelectorAll('.nav-link');
  var sectionEls = Array.from(document.querySelectorAll('main section[id]'));
  if ('IntersectionObserver' in window && sectionEls.length) {
    var activeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinkEls.forEach(function (link) {
          var match = link.getAttribute('href') === '#' + id;
          link.classList.toggle('is-active', match);
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sectionEls.forEach(function (s) { activeObserver.observe(s); });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Contact form – async submit to Formspree
  var form = document.querySelector('.contact-form');
  if (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!status) return;

      var action = form.getAttribute('action') || '';
      if (action.indexOf('YOUR_ID') !== -1) {
        status.textContent = 'Form endpoint not configured yet – please reach out via email or Telegram.';
        status.className = 'form-status is-error';
        return;
      }

      var data = new FormData(form);
      status.textContent = 'Sending…';
      status.className = 'form-status';

      fetch(action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            status.textContent = 'Thanks – your message has been sent.';
            status.className = 'form-status is-success';
          } else {
            return res.json().then(function (body) {
              var msg = (body && body.errors && body.errors.map(function (x) { return x.message; }).join(', ')) ||
                        'Something went wrong. Please try email or Telegram.';
              status.textContent = msg;
              status.className = 'form-status is-error';
            });
          }
        })
        .catch(function () {
          status.textContent = 'Network error. Please try email or Telegram.';
          status.className = 'form-status is-error';
        });
    });
  }
})();
