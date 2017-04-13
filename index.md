---
layout: default
title: Home
---
[comment]: <> (Do NOT edit.)
{% assign sections = site.sections | sort: 'order' %}
{% for section in sections %}
  <section id="{{ section.title | downcase | replace: ' ', '-' }}" class="page-section">
  <header class="page-section-header">
    <h2>{{ section.title }}</h2>
  </header>
  <div class="page-section-content">
    {{ section.content }}
  </div>
  </section>
{% endfor %}
