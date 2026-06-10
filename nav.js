function showPage(pageId) {
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  var target = document.getElementById('page-' + pageId);
  if (target) {
    target.style.display = 'block';
    window.scrollTo(0, 0);
  }
  var menu = document.getElementById('nav-more-menu');
  if (menu) menu.classList.remove('open');
}

function toggleMore(e) {
  if (e) e.preventDefault();
  var menu = document.getElementById('nav-more-menu');
  if (menu) {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
    } else {
      menu.classList.add('open');
    }
  }
}

function toggleMore2() {
  var menu = document.getElementById('nav-more-menu');
  if (menu) menu.classList.remove('open');
}

function toggleMobile() {
  var overlay = document.getElementById('mobile-overlay');
  if (overlay) {
    if (overlay.style.display === 'flex') {
      overlay.style.display = 'none';
    } else {
      overlay.style.display = 'flex';
    }
  }
}

// On page load - hide all pages except home
document.addEventListener('DOMContentLoaded', function() {
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  var home = document.getElementById('page-home');
  if (home) home.style.display = 'block';
});
