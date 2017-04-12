---
layout: default
title: Home
---
[comment]: <> (Do NOT edit.)
{% assign sections = site.sections | sort: 'order' %}
{% for section in sections %}
  <section id="{{ section.title | downcase | replace: ' ', '-' }}">
  <h2>{{ section.title }}</h2>
  {{ section.content }}
  </section>
{% endfor %}
