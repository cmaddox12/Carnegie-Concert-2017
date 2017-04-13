---
title: Program
order: 2
---
[comment]: <> (Do NOT edit.)
{% assign program = site.program | sort: 'order' %}
<ul class="performers">
{% for session in program %}
  <li>
  <h3>{{ session.title }}</h3>
  {% if session.artist %}
  <h4>{{ session.artist }}</h4>
  {% endif %}
  {{ session.content }}
  </li>
{% endfor %}
</ul>
