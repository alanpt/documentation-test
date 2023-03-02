---
title: Home
description: Frontpage of Support
subtitle: A subtitle
hide:
  - navigation
  - toc
  - feedback
---
# Welcome
Lorem Ipsum it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


This page will showcase and explain:
- Getting Started (a one pager)
- FAQ Section
- How To Section (The bulk of the articles)
- Tips and Tricks Section
- Advanced Section

<ul>
  {% for nav_item in nav %}
      {% if nav_item.children %}
          <li>{{ nav_item.title }}
              <ul>
              {% for nav_item in nav_item.children %}
                  <li class="{% if nav_item.active%}current{%endif%}">
                      <a href="{{ nav_item.url }}">{{ nav_item.title }}</a>
                  </li>
              {% endfor %}
              </ul>
          </li>
      {% else %}
          <li class="{% if nav_item.active%}current{%endif%}">
              <a href="{{ nav_item.url }}">{{ nav_item.title }}</a>
          </li>
      {% endif %}

  {% endfor %}
</ul>
