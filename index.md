---
layout: default
title: TheCoolWriter
---


<h2>latest posts</h2>

<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
