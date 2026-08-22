(function () {
  'use strict';

  var STORAGE_KEY = 'sajal-portfolio-theme';
  var body = document.body;
  var toggle = document.getElementById('dark-mode-toggle');

  if (localStorage.getItem(STORAGE_KEY) === 'light') {
    body.classList.add('light-mode');
  }

  if (!toggle) return;

  function syncLabel() {
    var isLight = body.classList.contains('light-mode');
    toggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }

  syncLabel();

  toggle.addEventListener('click', function () {
    body.classList.toggle('light-mode');
    var isLight = body.classList.contains('light-mode');
    localStorage.setItem(STORAGE_KEY, isLight ? 'light' : 'dark');
    syncLabel();
    toggle.classList.add('dark-mode-toggle--animating');
    setTimeout(function () {
      toggle.classList.remove('dark-mode-toggle--animating');
    }, 450);
  });
})();
