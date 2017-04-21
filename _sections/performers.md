---
title: Performers
order: 3
---
[comment]: <> (Do NOT edit.)
{% assign performers = site.performers | sort: 'order' %}
<ul class="performers">
{% for performer in performers %}
  <li>
    {% if performer.photo %}
    <img src="/media/{{ performer.photo }}">
    {% endif %}
    <h3 class="performer-name">{{ performer.title }}</h3>
    {% if performer.focus %}
    <h4 class="performer-focus">{{ performer.focus }}</h4>
    {% endif %}
    {{ performer.content }}
  </li>
{% endfor %}
</ul>
