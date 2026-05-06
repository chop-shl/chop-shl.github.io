---
layout: default
title: Contact
description: "Get in touch with the lab."
permalink: /contact/
---

<div class="page-header">
  <div class="container">
    <p class="page-header-eyebrow">Get in Touch</p>
    <h1>Contact</h1>
    <p class="page-header-lead">
      Interested in collaborating, joining the lab, or just learning more about our work? We'd love to hear from you.
    </p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="contact-grid">

      <!-- Contact Info -->
      <div class="contact-info">
        <div>
          <p class="section-eyebrow">Lab Location</p>
          <h2 class="section-title" style="font-size: var(--text-xl);">{{ site.lab_name }}</h2>
          <p style="color: var(--color-text-muted); font-size: var(--text-sm); line-height: 1.7; max-width: 44ch;">
            {{ site.description }}
          </p>
        </div>

        <div class="contact-block">
          <div class="contact-block-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <div>
            <p class="contact-block-title">Email</p>
            <p class="contact-block-text">
              <a href="mailto:{{ site.lab_email }}">{{ site.lab_email }}</a>
              {% if site.pi_email and site.pi_email != site.lab_email %}
              <br><a href="mailto:{{ site.pi_email }}">{{ site.pi_name }}: {{ site.pi_email }}</a>
              {% endif %}
            </p>
          </div>
        </div>

        {% if site.lab_address %}
        <div class="contact-block">
          <div class="contact-block-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div>
            <p class="contact-block-title">Address</p>
            <p class="contact-block-text">{{ site.lab_address }}</p>
          </div>
        </div>
        {% endif %}

        {% if site.lab_phone %}
        <div class="contact-block">
          <div class="contact-block-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/>
            </svg>
          </div>
          <div>
            <p class="contact-block-title">Phone</p>
            <p class="contact-block-text"><a href="tel:{{ site.lab_phone }}">{{ site.lab_phone }}</a></p>
          </div>
        </div>
        {% endif %}

        <!-- Open positions -->
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6);">
          <p class="section-eyebrow" style="margin-bottom: var(--space-3);">Open Positions</p>
          <div class="prose" style="font-size: var(--text-sm);">
            <p>We currently have openings for:</p>
            <ul>
              <li><strong>PhD Students</strong> — Apply through the university graduate admissions portal. Mention our lab in your statement.</li>
              <li><strong>Postdoctoral Researchers</strong> — Send a CV and brief research statement to the PI directly.</li>
            </ul>
            <p>We encourage applications from candidates of all backgrounds.</p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div>
        <p class="section-eyebrow" style="margin-bottom: var(--space-4);">Send a Message</p>
        <p style="font-size: var(--text-sm); color: var(--color-text-muted); margin-bottom: var(--space-6); line-height: 1.6;">
          Use this form to reach us. Your browser will open an email client to send the message.
        </p>

        <form class="contact-form" id="contact-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="name">Name</label>
            <input class="form-input" type="text" id="name" name="name" placeholder="Your full name" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="email">Email</label>
            <input class="form-input" type="email" id="email" name="email" placeholder="you@institution.edu" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="subject">Subject</label>
            <input class="form-input" type="text" id="subject" name="subject" placeholder="e.g., PhD application inquiry">
          </div>
          <div class="form-group">
            <label class="form-label" for="message">Message</label>
            <textarea class="form-textarea" id="message" name="message" placeholder="Tell us about yourself and your interest in the lab..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">
            Send Message
          </button>
          <p style="font-size: var(--text-xs); color: var(--color-text-muted); text-align: center; margin-top: var(--space-3);">
            This will open your email client to send a message directly.
          </p>
        </form>
      </div>

    </div>
  </div>
</section>
