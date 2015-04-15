---
layout: default
title: Blog
tagline: I've written a few things (other than code).
permalink: /blog/
---

<header class="page-header">
    <h1 class="page-title">{{ page.title }}</h1>
</header>

<div class="page-content">
    <div class="cards-group">
        {% for post in site.posts %}
            <a href="{{ post.url | prepend: site.baseurl }}">
                <div class="card">
                    <h2>{{ post.title }}</h2>
                    <h5>{{ post.date | date: "%b %-d, %Y" }}</h5>
                    <p>
                        {{ post.content }}
                    </p>
                </div>
            </a>
        {% endfor %}
    </div>
</div>
