---
layout: default
title: Home
description: "Welcome to the homepage of Your Lab Name at University Name."
---

<!-- HERO -->
<section class="hero">
  <div class="container">
    <div class="hero-inner">
      <div class="hero-content">
        <p class="hero-eyebrow">{{ site.department }} · {{ site.institution }}</p>
        <h1 class="hero-title">{{ site.lab_name }}</h1>
        <p class="hero-lead">{{ site.lab_tagline }}</p>
        <div class="hero-ctas">
          <a href="{{ '/research/' | relative_url }}" class="btn btn-primary">Our Research</a>
          <a href="{{ '/publications/' | relative_url }}" class="btn btn-secondary">Publications</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-stat-grid">
          <div class="hero-stat">
            <div class="stat-number">3</div>
            <div class="stat-label">Lab Members</div>
          </div>
          <div class="hero-stat">
            <div class="stat-number">5+</div>
            <div class="stat-label">Publications</div>
          </div>
          <div class="hero-stat">
            <div class="stat-number">1</div>
            <div class="stat-label">Active Grants</div>
          </div>
          <div class="hero-stat">
            <div class="stat-number">2022</div>
            <div class="stat-label">Founded</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- RESEARCH HIGHLIGHTS -->
<section class="section">
  <div class="container">
    <div class="section-header reveal">
      <p class="section-eyebrow">What We Do</p>
      <h2 class="section-title">Research Focus Areas</h2>
      <p class="section-subtitle">Our lab investigates the intersection of place & health. We believe that understanding the spatial context in which people live and develop is critical for informed healthcare delivery. We specialize in leveraging GIS and spatial computing to enrich patient data and provide research support. </p>
    </div>

    <div class="research-grid">
      <div class="research-card reveal">
        <svg class="research-card-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <circle cx="24" cy="24" r="20"/>
          <path d="M24 14v10l6 4"/>
        </svg>
        <span class="research-card-tag">Spatial Computing</span>
        <h3>HIPAA-Compliant Route Estimation</h3>
        <p>Brief description of this research thrust. What questions do you explore? What methods do you use?</p>
        <div class="research-card-footer">
          <a href="{{ '/research/#area-one' | relative_url }}" class="btn btn-ghost btn-sm">Learn more →</a>
        </div>
      </div>

      <div class="research-card reveal">
        <svg class="research-card-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <rect x="8" y="8" width="14" height="14" rx="2"/>
          <rect x="26" y="8" width="14" height="14" rx="2"/>
          <rect x="8" y="26" width="14" height="14" rx="2"/>
          <rect x="26" y="26" width="14" height="14" rx="2"/>
        </svg>
        <span class="research-card-tag">Population Health</span>
        <h3>Creating Insights for Policy Stakeholders</h3>
        <p>Description of second research area. Connect it to real-world impact and open problems in the field.</p>
        <div class="research-card-footer">
          <a href="{{ '/research/#area-two' | relative_url }}" class="btn btn-ghost btn-sm">Learn more →</a>
        </div>
      </div>

      <div class="research-card reveal">
        <svg class="research-card-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="M24 4L44 40H4z"/>
          <path d="M24 20v12M20 36h8"/>
        </svg>
        <span class="research-card-tag">EHR Integration</span>
        <h3>Linking EHR Records to Areal Indicators of Health</h3>
        <p>Description of a third research theme. Keep these concise and compelling — one punchy paragraph.</p>
        <div class="research-card-footer">
          <a href="{{ '/research/#area-three' | relative_url }}" class="btn btn-ghost btn-sm">Learn more →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- NEWS & UPDATES -->
<section class="section section--alt">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-16); align-items: start;">

      <!-- News column -->
      <div class="reveal">
        <div class="section-header" style="margin-bottom: var(--space-6);">
          <p class="section-eyebrow">Updates</p>
          <h2 class="section-title">Lab News</h2>
        </div>
        <div class="news-strip">
          {% for item in site.data.news limit:6 %}
          <div class="news-item">
            <span class="news-date">{{ item.date }}</span>
            <span class="news-text">{{ item.text }}</span>
          </div>
          {% endfor %}
        </div>
      </div>

      <!-- Recent publications column -->
      <div class="reveal">
        <div class="section-header" style="margin-bottom: var(--space-6);">
          <p class="section-eyebrow">Recent Work</p>
          <h2 class="section-title">Selected Publications</h2>
        </div>
        <div class="pub-list">
          {% for pub in site.data.publications limit:3 %}
          <div class="pub-item" style="display: block;">
            <p class="pub-year">{{ pub.year }}</p>
            <p class="pub-title">{{ pub.title }}</p>
            <p class="pub-authors">{{ pub.authors | markdownify | remove: '<p>' | remove: '</p>' }}</p>
            <p class="pub-venue">{{ pub.venue }}</p>
            <div style="display:flex; gap: var(--space-2); margin-top: var(--space-3); flex-wrap: wrap;">
              {% if pub.doi %}<a href="{{ pub.doi }}" class="pub-badge pub-badge--doi" target="_blank" rel="noopener noreferrer">DOI</a>{% endif %}
              {% if pub.pdf %}<a href="{{ pub.pdf }}" class="pub-badge pub-badge--pdf" target="_blank" rel="noopener noreferrer">PDF</a>{% endif %}
              {% if pub.arxiv %}<a href="{{ pub.arxiv }}" class="pub-badge pub-badge--arxiv" target="_blank" rel="noopener noreferrer">arXiv</a>{% endif %}
            </div>
          </div>
          {% endfor %}
        </div>
        <div style="margin-top: var(--space-6);">
          <a href="{{ '/publications/' | relative_url }}" class="btn btn-secondary">All publications →</a>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- JOIN US CTA -->
<section class="section">
  <div class="container--narrow" style="text-align: center;">
    <div class="reveal">
      <p class="section-eyebrow">Join the Lab</p>
      <h2 class="section-title">We're Looking for Talented Researchers</h2>
      <p class="section-subtitle" style="margin-inline: auto; margin-bottom: var(--space-8);">
        We welcome applications from motivated PhD students, postdocs, and visiting researchers. If our work excites you, we'd love to hear from you.
      </p>
      <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Get in Touch</a>
    </div>
  </div>
</section>
