/* ============================================================================
   MainCrafts Technology — Blog JavaScript (v2.0)
   ============================================================================
   1. Theme Sync (reads portfolio's localStorage preference)
   2. Floating Particles Generator
   3. Search Filter with Animated Results
   4. Mobile Navigation Toggle
   5. Scroll Reveal (IntersectionObserver)
   6. Sticky Navigation Effect
   ============================================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────────
     1. THEME SYNC — Read portfolio theme from localStorage
     ────────────────────────────────────────────────────────────── */
  var STORAGE_KEY = 'sajal-portfolio-theme';
  var savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }


  /* ──────────────────────────────────────────────────────────────
     2. FLOATING PARTICLES — Creates ambient floating dots in hero
     ────────────────────────────────────────────────────────────── */
  function createParticles() {
    var hero = document.querySelector('.blog-hero');
    if (!hero) return;

    // Create particles container
    var particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');
    particlesContainer.setAttribute('aria-hidden', 'true');
    hero.appendChild(particlesContainer);

    // Create floating orbs
    for (var o = 1; o <= 3; o++) {
      var orb = document.createElement('div');
      orb.classList.add('blog-hero__orb', 'blog-hero__orb--' + o);
      hero.appendChild(orb);
    }

    // Create individual particles
    var particleCount = window.innerWidth < 768 ? 12 : 25;
    for (var i = 0; i < particleCount; i++) {
      var particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (8 + Math.random() * 12) + 's';
      particle.style.animationDelay = (Math.random() * 8) + 's';
      particle.style.opacity = (0.2 + Math.random() * 0.5);
      particlesContainer.appendChild(particle);
    }
  }
  createParticles();


  /* ──────────────────────────────────────────────────────────────
     3. SEARCH FILTER — Real-time filtering with animation
     ────────────────────────────────────────────────────────────── */
  var searchInput = document.getElementById('blog-search');
  var blogCards = document.querySelectorAll('.blog-card[data-title]');
  var noResults = document.querySelector('.search-no-results');

  if (searchInput && blogCards.length > 0) {
    searchInput.addEventListener('input', function () {
      var query = this.value.toLowerCase().trim();
      var visibleCount = 0;

      blogCards.forEach(function (card) {
        var title = (card.getAttribute('data-title') || '').toLowerCase();
        var match = !query || title.indexOf(query) !== -1;

        if (match) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (noResults) {
        if (visibleCount === 0 && query) {
          noResults.classList.add('visible');
        } else {
          noResults.classList.remove('visible');
        }
      }
    });
  }


  /* ──────────────────────────────────────────────────────────────
     4. MOBILE NAVIGATION TOGGLE
     ────────────────────────────────────────────────────────────── */
  var navToggle = document.getElementById('navbar-toggle');
  var navMenu = document.getElementById('navbar-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking a nav link
    var navLinks = navMenu.querySelectorAll('.navbar__link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  /* ──────────────────────────────────────────────────────────────
     5. SCROLL REVEAL — IntersectionObserver powered
     ────────────────────────────────────────────────────────────── */
  var revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }


  /* ──────────────────────────────────────────────────────────────
     6. STICKY NAVIGATION — scroll-aware header style
     ────────────────────────────────────────────────────────────── */
  var siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    var lastScrollY = 0;
    window.addEventListener('scroll', function () {
      var currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        siteHeader.classList.add('site-header--scrolled');
      } else {
        siteHeader.classList.remove('site-header--scrolled');
      }

      lastScrollY = currentScrollY;
    }, { passive: true });
  }

})();
