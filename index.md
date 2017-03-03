---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

<!-- DO NOT EDIT -->
{% assign artists = site.artists | sort: 'title' %}
{% for artist in artists %}
  <h2>{{ artist.title }}</h2>
{% endfor %}
<!-- /ARTISTS OUTPUT -->
