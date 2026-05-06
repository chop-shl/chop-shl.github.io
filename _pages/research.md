---
layout: default
title: Research
description: "Overview of research areas and ongoing projects in the lab."
permalink: /research/
---

<div class="page-header">
  <div class="container">
    <p class="page-header-eyebrow">What We Study</p>
    <h1>Research</h1>
    <p class="page-header-lead">
      We pursue fundamental and applied questions in [your field]. Our work spans [methods/approaches], with the goal of [impact statement].
    </p>
  </div>
</div>

<!-- RESEARCH AREAS -->
<section class="section">
  <div class="container">

    <div style="display: grid; gap: var(--space-16);">

      <!-- Area 1 -->
      <div id="area-one" style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-12); align-items: start;" class="reveal">
        <div>
          <p class="section-eyebrow">Area 01</p>
          <h2 class="section-title">Research Area One</h2>
          <div class="prose">
            <p>
              Describe this research area in 2–4 paragraphs. What fundamental question does it address? Why does it matter? What approaches and methods does your lab bring to it?
            </p>
            <p>
              Include any key results or ongoing directions. You can link to related publications here too.
            </p>
            <h3>Key Questions</h3>
            <ul>
              <li>Question or objective one</li>
              <li>Question or objective two</li>
              <li>Question or objective three</li>
            </ul>
          </div>
        </div>
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-8); box-shadow: var(--shadow-sm);">
          <p class="section-eyebrow" style="margin-bottom: var(--space-4);">Related Publications</p>
          {% assign area1_pubs = site.data.publications | where: "type", "journal" | limit: 2 %}
          {% for pub in area1_pubs %}
          <div style="margin-bottom: var(--space-5); padding-bottom: var(--space-5); border-bottom: 1px solid var(--color-divider);">
            <p class="pub-year">{{ pub.year }}</p>
            <p class="pub-title" style="font-size: var(--text-sm);">{{ pub.title }}</p>
            <p class="pub-authors" style="font-size: var(--text-xs);">{{ pub.authors }}</p>
          </div>
          {% endfor %}
          <a href="{{ '/publications/' | relative_url }}" class="btn btn-ghost btn-sm">All publications →</a>
        </div>
      </div>

      <hr class="divider">

      <!-- Area 2 -->
      <div id="area-two" style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-12); align-items: start;" class="reveal">
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-8); box-shadow: var(--shadow-sm);">
          <p class="section-eyebrow" style="margin-bottom: var(--space-4);">Methods & Tools</p>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: var(--space-3);">
            <li style="display: flex; gap: var(--space-3); align-items: center; font-size: var(--text-sm); color: var(--color-text-muted);">
              <span style="width: 8px; height: 8px; background: var(--color-primary); border-radius: 50%; flex-shrink: 0;"></span>
              Method or tool one
            </li>
            <li style="display: flex; gap: var(--space-3); align-items: center; font-size: var(--text-sm); color: var(--color-text-muted);">
              <span style="width: 8px; height: 8px; background: var(--color-primary); border-radius: 50%; flex-shrink: 0;"></span>
              Method or tool two
            </li>
            <li style="display: flex; gap: var(--space-3); align-items: center; font-size: var(--text-sm); color: var(--color-text-muted);">
              <span style="width: 8px; height: 8px; background: var(--color-primary); border-radius: 50%; flex-shrink: 0;"></span>
              Method or tool three
            </li>
            <li style="display: flex; gap: var(--space-3); align-items: center; font-size: var(--text-sm); color: var(--color-text-muted);">
              <span style="width: 8px; height: 8px; background: var(--color-accent); border-radius: 50%; flex-shrink: 0;"></span>
              Computational approach
            </li>
          </ul>
        </div>
        <div>
          <p class="section-eyebrow">Area 02</p>
          <h2 class="section-title">Research Area Two</h2>
          <div class="prose">
            <p>
              Describe this second research area. What makes it distinctive? How does it complement the other work in your lab?
            </p>
            <p>
              Mention collaborators, funders, or any special equipment or infrastructure your lab has developed for this work.
            </p>
          </div>
        </div>
      </div>

      <hr class="divider">

      <!-- Area 3 -->
      <div id="area-three" class="reveal">
        <p class="section-eyebrow">Area 03</p>
        <h2 class="section-title">Research Area Three</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-12);">
          <div class="prose">
            <p>
              A third thrust or emerging research direction. You can describe this as more exploratory if it's a newer focus area.
            </p>
            <p>
              Mention graduate students or postdocs who are leading this direction.
            </p>
          </div>
          <div class="prose">
            <h3>Current Funding</h3>
            <p>
              We gratefully acknowledge support from:
            </p>
            <ul>
              <li>Funding Agency / Grant Name (Grant #XXXXXXX)</li>
              <li>Another Funder / Program Name</li>
              <li>Institution Internal Grant</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- COLLABORATORS -->
<section class="section section--alt">
  <div class="container">
    <div class="section-header reveal">
      <p class="section-eyebrow">Network</p>
      <h2 class="section-title">Collaborators</h2>
      <p class="section-subtitle">We work with outstanding researchers at institutions around the world.</p>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: var(--space-4);" class="reveal">
      <span class="badge">Collaborator Name — Institution</span>
      <span class="badge">Collaborator Name — Institution</span>
      <span class="badge">Collaborator Name — Institution</span>
      <span class="badge">Collaborator Name — Institution</span>
      <span class="badge">Collaborator Name — Institution</span>
    </div>
  </div>
</section>

<style>
@media (max-width: 768px) {
  #area-one, #area-two, #area-three > div { grid-template-columns: 1fr !important; }
  #area-two > div:first-child { order: 2; }
}
</style>
