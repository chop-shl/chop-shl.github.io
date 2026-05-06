// Theme toggle
(function () {
  const html = document.documentElement;
  const stored = null; // localStorage blocked in sandboxed contexts; use in-memory
  let theme = stored || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  html.setAttribute('data-theme', theme);

  function updateToggle() {
    const btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;
    const isDark = theme === 'dark';
    btn.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    btn.innerHTML = isDark
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateToggle();
    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) {
      btn.addEventListener('click', function () {
        theme = theme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', theme);
        updateToggle();
      });
    }

    // Mobile nav toggle
    const navToggle = document.querySelector('[data-nav-toggle]');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', function () {
        const open = navLinks.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', open);
      });
    }

    // Scroll-aware header
    const header = document.querySelector('.site-header');
    if (header) {
      window.addEventListener('scroll', function () {
        header.classList.toggle('site-header--scrolled', window.scrollY > 10);
      }, { passive: true });
    }

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { observer.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }

    // Publication year filter
    const filterBtns = document.querySelectorAll('.pub-filter-btn');
    if (filterBtns.length) {
      filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          filterBtns.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          const filter = btn.dataset.filter;
          document.querySelectorAll('.pub-item').forEach(function (item) {
            const show = filter === 'all' || item.dataset.year === filter;
            item.style.display = show ? '' : 'none';
          });
        });
      });
    }

    // Contact form intercept (mailto fallback)
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const subject = form.querySelector('#subject').value || 'Lab Website Inquiry';
        const message = form.querySelector('#message').value;
        const labEmail = document.querySelector('meta[name="lab-email"]')?.content || '';
        const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
        window.location.href = `mailto:${labEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
      });
    }
  });
})();
