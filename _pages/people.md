---
layout: default
title: People
description: "Meet the researchers, students, and staff of the lab."
permalink: /people/
---

<div class="page-header">
  <div class="container">
    <p class="page-header-eyebrow">The Team</p>
    <h1>People</h1>
    <p class="page-header-lead">
      Our lab brings together researchers with diverse backgrounds in [fields]. We are committed to a collaborative, inclusive, and intellectually rigorous environment.
    </p>
  </div>
</div>

<!-- PRINCIPAL INVESTIGATOR -->
<section class="section">
  <div class="container">
    <div class="section-header reveal">
      <p class="section-eyebrow">Lab Director</p>
      <h2 class="section-title">Principal Investigator</h2>
    </div>

    {% assign pi = site.data.members | where: "role", "Principal Investigator" | first %}
    {% if pi %}
    <div style="display: grid; grid-template-columns: 160px 1fr; gap: var(--space-10); align-items: start; max-width: 800px;" class="reveal">
      <div style="text-align: center;">
        {% if pi.photo %}
        <img src="{{ pi.photo | relative_url }}" alt="Photo of {{ pi.name }}"
             style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 3px solid var(--color-border); box-shadow: var(--shadow-md); margin: 0 auto var(--space-4);"
             width="120" height="120" loading="lazy">
        {% else %}
        <div style="width: 120px; height: 120px; border-radius: 50%; background: var(--color-surface-offset); border: 3px solid var(--color-border); display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-4);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-faint)" stroke-width="1.5" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        {% endif %}
        <div class="person-links" style="justify-content: center;">
          {% if pi.email %}<a href="mailto:{{ pi.email }}" class="person-link" style="font-size: 11px;">Email</a>{% endif %}
          {% if pi.scholar %}<a href="{{ pi.scholar }}" class="person-link" style="font-size: 11px;" target="_blank" rel="noopener noreferrer">Scholar</a>{% endif %}
          {% if pi.github %}<a href="https://github.com/{{ pi.github }}" class="person-link" style="font-size: 11px;" target="_blank" rel="noopener noreferrer">GitHub</a>{% endif %}
        </div>
      </div>
      <div>
        <h3 style="font-family: var(--font-display); font-size: var(--text-xl); margin-bottom: var(--space-1);">{{ pi.name }}</h3>
        <p style="font-size: var(--text-xs); color: var(--color-primary); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: var(--space-4);">{{ pi.role }}</p>
        <div class="prose" style="font-size: var(--text-sm);">
          <p>{{ pi.bio }}</p>
          <p>
            <strong>Office:</strong> [Room, Building]<br>
            <strong>Phone:</strong> [Phone number]
          </p>
        </div>
      </div>
    </div>
    {% endif %}
  </div>
</section>

<!-- POSTDOCS & RESEARCHERS -->
<section class="section section--alt">
  <div class="container">
    <div class="section-header reveal">
      <p class="section-eyebrow">Research Staff</p>
      <h2 class="section-title">Postdoctoral Researchers</h2>
    </div>
    <div class="people-grid reveal">
      {% assign postdocs = site.data.members | where_exp: "m", "m.role != 'Principal Investigator'" %}
      {% for member in postdocs %}
      <div class="person-card">
        {% if member.photo %}
        <img src="{{ member.photo | relative_url }}" alt="Photo of {{ member.name }}"
             class="person-photo" width="120" height="120" loading="lazy">
        {% else %}
        <div class="person-photo" style="display:flex;align-items:center;justify-content:center;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-faint)" stroke-width="1.5" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        {% endif %}
        <p class="person-name">{{ member.name }}</p>
        <p class="person-role">{{ member.role }}</p>
        {% if member.email %}<p class="person-affil"><a href="mailto:{{ member.email }}" style="color: var(--color-primary); text-decoration: none;">{{ member.email }}</a></p>{% endif %}
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- GRAD STUDENTS -->
<section class="section">
  <div class="container">
    <div class="section-header reveal">
      <p class="section-eyebrow">Graduate Students</p>
      <h2 class="section-title">PhD & Master's Students</h2>
    </div>
    <div class="people-grid reveal">
      {% assign grads = site.data.members | where_exp: "m", "m.role contains 'PhD' or m.role contains 'M.S.'" %}
      {% for member in grads %}
      <div class="person-card">
        {% if member.photo %}
        <img src="{{ member.photo | relative_url }}" alt="Photo of {{ member.name }}"
             class="person-photo" width="120" height="120" loading="lazy">
        {% else %}
        <div class="person-photo" style="display:flex;align-items:center;justify-content:center;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-faint)" stroke-width="1.5" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        {% endif %}
        <p class="person-name">{{ member.name }}</p>
        <p class="person-role">{{ member.role }}</p>
        {% if member.bio and member.bio != "" %}
        <p class="person-affil" style="font-size: var(--text-xs); color: var(--color-text-muted);">{{ member.bio | truncate: 80 }}</p>
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- ALUMNI (optional) -->
<section class="section section--alt">
  <div class="container">
    <div class="section-header reveal">
      <p class="section-eyebrow">Former Members</p>
      <h2 class="section-title">Alumni</h2>
      <p class="section-subtitle">We're proud of where our alumni have gone on to do great work.</p>
    </div>
    <div class="prose reveal">
      <p><em>Add former lab members here. Name — Role (Years) → Current Position</em></p>
    </div>
  </div>
</section>

<!-- JOIN US -->
<section class="section">
  <div class="container--narrow" style="text-align: center;" class="reveal">
    <p class="section-eyebrow">Opportunities</p>
    <h2 class="section-title">Join the Lab</h2>
    <div class="prose" style="margin-inline: auto; margin-bottom: var(--space-8);">
      <p>
        We are always interested in motivated PhD applicants, postdoctoral researchers, and visiting scholars. Please read about our <a href="{{ '/research/' | relative_url }}">research areas</a> and reach out if you think there's a good fit.
      </p>
      <p>
        <strong>For prospective PhD students:</strong> Apply through the [Department Name] graduate admissions portal. Mention our lab in your statement of purpose.
      </p>
    </div>
    <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Contact Us</a>
  </div>
</section>
