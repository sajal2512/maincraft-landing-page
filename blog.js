(function () {
  'use strict';

  function createParticles() {
    var hero = document.querySelector('.blog-hero');
    if (!hero) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    var particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');
    particlesContainer.setAttribute('aria-hidden', 'true');
    hero.appendChild(particlesContainer);

    for (var o = 1; o <= 3; o++) {
      var orb = document.createElement('div');
      orb.classList.add('blog-hero__orb', 'blog-hero__orb--' + o);
      hero.appendChild(orb);
    }

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

  var searchInput = document.getElementById('blog-search');
  var blogCards = document.querySelectorAll('.blog-card[data-category]');
  var noResults = document.querySelector('.search-no-results');
  var pills = document.querySelectorAll('.category-pill');
  var activeCategory = 'all';

  function applyFilters() {
    var query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    var visibleCount = 0;

    blogCards.forEach(function (card) {
      var title = (card.getAttribute('data-title') || '').toLowerCase();
      var category = card.getAttribute('data-category') || '';
      var matchesSearch = !query || title.indexOf(query) !== -1;
      var matchesCategory = activeCategory === 'all' || category === activeCategory;
      var show = matchesSearch && matchesCategory;
      card.classList.toggle('hidden', !show);
      if (show) visibleCount++;
    });

    if (noResults) {
      noResults.classList.toggle('visible', visibleCount === 0);
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      activeCategory = pill.getAttribute('data-filter') || 'all';
      pills.forEach(function (p) {
        var on = p === pill;
        p.classList.toggle('is-active', on);
        p.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      applyFilters();
    });
  });

  var navToggle = document.getElementById('navbar-toggle');
  var navMenu = document.getElementById('navbar-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navMenu.querySelectorAll('.navbar__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var revealElements = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce) {
    revealElements.forEach(function (el) { el.classList.add('visible'); });
  } else if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 0.1 + 's';
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) { el.classList.add('visible'); });
  }

  var siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    window.addEventListener('scroll', function () {
      siteHeader.classList.toggle('site-header--scrolled', window.scrollY > 50);
    }, { passive: true });
  }
})();
