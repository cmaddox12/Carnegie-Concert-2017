---
layout: home
title: Home
---

## About

Adopted by all countries in September 2015, the Sustainable Development Goals (SDGs) call on us all to eradicate poverty, ensure that all children reach their full potential, support peaceful and healthy communities, and conserve nature. The vast majority of people around the world support these goals, but many do not know about them or have difficulty relating to them.

The artists who bring you Concert for a Sustainable Planet hope to address this gap, by fostering a dialogue and inspiring us to action. This concert will inspire hope, dedication, and commitment among groups of people worldwide to build a better planet together and foster positive change in society. The concert will build active connections between the [performers](#performers) on stage and the audience, and will be recorded for on-demand viewing for those who are unable to attend in person. We hope you will [join us!](#ticket-information)


## Program
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


## Performers
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

## Ticket Information

Tickets are available at the [Carnegie Hall website](https://www.carnegiehall.org/Calendar/2017/9/18/0730/PM/Music-for-a-Sustainable-Planet/). The site also includes a seating chart. Please direct any questions relating to ticketing directly to Carnegie Hall.

## Map and Directions

Concert for a Sustainable Planet  
7:30 pm, September 18, 2017  
Zankel Hall, Carnegie Hall, New York, USA  
Entrance on Seventh Avenue between 56th and 57th Streets  ([Map](https://goo.gl/maps/JjqXNNranpM2))
