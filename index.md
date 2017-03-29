---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Home
---

## About

Adopted by all countries in September 2015, the Sustainable Development Goals (SDGs) call on us all to eradicate poverty, ensure that all children reach their full potential, support peaceful and healthy communities, and conserve nature. The vast majority of people around the world support these goals, but many do not know about them or have difficulty relating to them.

The artists who bring you Concert for a Sustainable Planet hope to address this gap, by fostering a dialogue and inspiring us to action. This concert will inspire hope, dedication, and commitment among groups of people worldwide to build a better planet together and foster positive change in society. The concert will build active connections between the performers on stage and the audience, and will be recorded for on-demand viewing for those who are unable to attend in person. We hope you will [join us!](#ticket-information)

<!-- DO NOT EDIT -->
## Performers
{% assign performers = site.performers | sort: 'title' %}
{% for performer in performers %}
  <h3>{{ performer.title }}</h3>
  {{ performer.content }}
{% endfor %}
<!-- /PERFORMERS OUTPUT -->

## Ticket Information

Tickets are available at the [Carnegie Hall website](https://www.carnegiehall.org/Calendar/2017/9/18/0730/PM/Music-for-a-Sustainable-Planet/). The site also includes a seating chart. Please direct any questions relating to ticketing directly to Carnegie Hall.

# Map and Directions

Concert for a Sustainable Planet  
7:30 pm, September 18, 2017  
Zankel Hall, Carnegie Hall, New York, USA  
Entrance on Seventh Avenue between 56th and 57th Streets  ([Map](https://goo.gl/maps/JjqXNNranpM2))
