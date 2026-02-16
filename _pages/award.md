---
layout: page
title: Awards
permalink: /awards/
nav: true
nav_order: 3
description: Selected Awards and Honors
---

<div class="cv">
  {% if site.data.cv and site.data.cv.cv and site.data.cv.cv.sections and site.data.cv.cv.sections.Awards %}
    {% assign entries = site.data.cv.cv.sections.Awards %}
    {% include cv/awards.liquid %}
  {% elsif site.data.resume and site.data.resume.awards %}
    {% assign entries = site.data.resume.awards %}
    {% include cv/awards.liquid %}
  {% else %}
    <p>No rewards yet.</p>
  {% endif %}
</div>