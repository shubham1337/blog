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
                        Consectetur autem sint voluptatem enim voluptatem eos impedit voluptas doloribus, blanditiis suscipit. Sunt sapiente eius dolore enim necessitatibus ea rerum? Provident saepe amet ex quod maiores. Sequi maiores sunt magni.
                    </p>
                </div>
            </a>
            <a href="{{ post.url | prepend: site.baseurl }}">
                <div class="card">
                    <h2>{{ post.title }}</h2>
                    <h5>{{ post.date | date: "%b %-d, %Y" }}</h5>
                    <p>
                        Consectetur autem sint voluptatem enim voluptatem eos impedit voluptas doloribus, blanditiis suscipit. Sunt sapiente eius dolore enim necessitatibus ea rerum? Provident saepe amet ex quod maiores. Sequi maiores sunt magni.
                    </p>
                </div>
            </a>
            <a href="{{ post.url | prepend: site.baseurl }}">
                <div class="card">
                    <h2>{{ post.title }}</h2>
                    <h5>{{ post.date | date: "%b %-d, %Y" }}</h5>
                    <p>
                        Consectetur autem sint voluptatem enim voluptatem eos impedit voluptas doloribus, blanditiis suscipit. Sunt sapiente eius dolore enim necessitatibus ea rerum? Provident saepe amet ex quod maiores. Sequi maiores sunt magni.
                    </p>
                </div>
            </a>
            <a href="{{ post.url | prepend: site.baseurl }}">
                <div class="card">
                    <h2>{{ post.title }}</h2>
                    <h5>{{ post.date | date: "%b %-d, %Y" }}</h5>
                    <p>
                        Consectetur autem sint voluptatem enim voluptatem eos impedit voluptas doloribus, blanditiis suscipit. Sunt sapiente eius dolore enim necessitatibus ea rerum? Provident saepe amet ex quod maiores. Sequi maiores sunt magni.
                    </p>
                </div>
            </a>
            <a href="{{ post.url | prepend: site.baseurl }}">
                <div class="card">
                    <h2>{{ post.title }}</h2>
                    <h5>{{ post.date | date: "%b %-d, %Y" }}</h5>
                    <p>
                        Consectetur autem sint voluptatem enim voluptatem eos impedit voluptas doloribus, blanditiis suscipit. Sunt sapiente eius dolore enim necessitatibus ea rerum? Provident saepe amet ex quod maiores. Sequi maiores sunt magni.
                    </p>
                </div>
            </a>
            <a href="{{ post.url | prepend: site.baseurl }}">
                <div class="card">
                    <h2>{{ post.title }}</h2>
                    <h5>{{ post.date | date: "%b %-d, %Y" }}</h5>
                    <p>
                        Consectetur autem sint voluptatem enim voluptatem eos impedit voluptas doloribus, blanditiis suscipit. Sunt sapiente eius dolore enim necessitatibus ea rerum? Provident saepe amet ex quod maiores. Sequi maiores sunt magni.
                    </p>
                </div>
            </a>
        {% endfor %}
    </div>
</div>
