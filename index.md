---
layout: default
title: صفحه‌ی اصلی
---

<h2>آخرین پست‌ها:</h2>

<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

