---
layout: default
title: Home
---
[comment]: <> (Do NOT edit.)
{% assign sections = site.sections | sort: 'order' %}
{% for section in sections %}
  <section id="{{ section.title | downcase | replace: ' ', '-' }}" class="block">
  <div class="block__header">
    <h2>{{ section.title }}</h2>
  </div>
  <div class="block__content">
    {{ section.content }}
  </div>
  </section>
{% endfor %}
