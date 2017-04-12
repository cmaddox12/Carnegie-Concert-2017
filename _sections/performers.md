---
title:  Performers
order: 3
---
[comment]: <> (Do NOT edit.)
{% assign performers = site.performers | sort: 'order' %}
<ul class="performers">
{% for performer in performers %}
  <li>
  <h3>{{ performer.title }}</h3>
  {% if performer.focus %}
  <h4>{{ performer.focus }}</h4>
  {% endif %}
  {{ performer.content }}
  </li>
{% endfor %}
</ul>
