---
layout: page
permalink: /publications/
title: Publications
description: List of publications.
nav: true
nav_order: 2
---

In the following * indicates co–first authors; † indicates the corresponding author or that the work was completed under their supervision. See [Google Scholar](https://scholar.google.com/citations?user=BdpXcLgAAAAJ&hl=en) for the full paper list.

<!-- Selected Publications -->
<h2>Selected Publications</h2>
<div class="publications">
{% bibliography --template bib --query @*[selected=true] --order descending %}
</div>

<!-- Preprints -->
<h2>Selected Preprints</h2>
<div class="publications">
{% bibliography --template bib_simple --query @*[arxiv=true] --order descending %}
</div>

<!-- All Papers -->
<h2>Paper List</h2>
<div class="publications">
{% bibliography --template bib_simple --group_by year --group_order descending %}
</div>