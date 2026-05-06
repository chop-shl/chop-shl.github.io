---
layout: default
title: Publications
description: "Full list of publications from the lab."
permalink: /publications/
---

<div class="page-header">
  <div class="container">
    <p class="page-header-eyebrow">Our Work</p>
    <h1>Publications</h1>
    <p class="page-header-lead">
      A complete list of publications from the lab. Authors in <strong>bold</strong> are lab members.
      {% if site.google_scholar %}
      <a href="{{ site.google_scholar }}" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary);">View on Google Scholar →</a>
      {% endif %}
    </p>
  </div>
</div>

<section class="section">
  <div class="container">

    <!-- Filters -->
    <div class="pub-filters reveal">
      <button class="pub-filter-btn active" data-filter="all">All</button>
      {% assign years = site.data.publications | map: "year" | uniq | sort | reverse %}
      {% for year in years %}
      <button class="pub-filter-btn" data-filter="{{ year }}">{{ year }}</button>
      {% endfor %}
      <button class="pub-filter-btn" data-filter="journal">Journal Articles</button>
      <button class="pub-filter-btn" data-filter="conference">Conference Papers</button>
    </div>

    <!-- Publication list -->
    <div class="pub-list reveal">
      {% for pub in site.data.publications %}
      <div class="pub-item" data-year="{{ pub.year }}" data-type="{{ pub.type }}">
        <div>
          <p class="pub-year">{{ pub.year }} · <span style="color: var(--color-text-muted); text-transform: capitalize;">{{ pub.type }}</span></p>
          <p class="pub-title">{{ pub.title }}</p>
          <p class="pub-authors">{{ pub.authors | markdownify | remove: '<p>' | remove: '</p>' | strip }}</p>
          <p class="pub-venue">{{ pub.venue }}</p>
          {% if pub.abstract and pub.abstract != "" %}
          <details style="margin-top: var(--space-3);">
            <summary style="font-size: var(--text-xs); font-weight: 600; color: var(--color-primary); cursor: pointer; letter-spacing: 0.04em;">Abstract</summary>
            <p style="font-size: var(--text-sm); color: var(--color-text-muted); margin-top: var(--space-3); line-height: 1.6; max-width: 64ch;">{{ pub.abstract }}</p>
          </details>
          {% endif %}
        </div>
        <div class="pub-links">
          {% if pub.pdf %}<a href="{{ pub.pdf }}" class="pub-badge pub-badge--pdf" target="_blank" rel="noopener noreferrer">PDF</a>{% endif %}
          {% if pub.doi %}<a href="{{ pub.doi }}" class="pub-badge pub-badge--doi" target="_blank" rel="noopener noreferrer">DOI</a>{% endif %}
          {% if pub.arxiv %}<a href="{{ pub.arxiv }}" class="pub-badge pub-badge--arxiv" target="_blank" rel="noopener noreferrer">arXiv</a>{% endif %}
          {% if pub.code %}<a href="{{ pub.code }}" class="pub-badge" target="_blank" rel="noopener noreferrer">Code</a>{% endif %}
        </div>
      </div>
      {% endfor %}
    </div>

  </div>
</section>

<script>
// Enhanced filter: support both year AND type filters
document.addEventListener('DOMContentLoaded', function () {
  const btns = document.querySelectorAll('.pub-filter-btn');
  const items = document.querySelectorAll('.pub-item');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(function (item) {
        const yearMatch = filter === 'all' || item.dataset.year === filter;
        const typeMatch = filter === 'all' || item.dataset.type === filter;
        const isYearFilter = !isNaN(parseInt(filter));
        const isTypeFilter = filter === 'journal' || filter === 'conference';
        const show = filter === 'all' || (isYearFilter && yearMatch) || (isTypeFilter && typeMatch);
        item.style.display = show ? '' : 'none';
      });
    });
  });
});
</script>
