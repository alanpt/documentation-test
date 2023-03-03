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

<!-- Search interface -->
<div class="md-search" data-md-component="search" role="dialog">
  <label class="md-search__overlay" for="__search"></label>
  <div class="md-search__inner" role="search">
    <form class="md-search__form" name="search">

      <!-- Search input -->
      <input
        type="text"
        class="md-search__input"
        name="query"
        aria-label="{{ lang.t('search.placeholder') }}"
        placeholder="{{ lang.t('search.placeholder') }}"
        autocapitalize="off"
        autocorrect="off"
        autocomplete="off"
        spellcheck="false"
        data-md-component="search-query"
        required
      />

      <!-- Button to open search -->
      <label class="md-search__icon md-icon" for="__search">
        {% include ".icons/material/magnify.svg" %}
        {% include ".icons/material/arrow-left.svg" %}
      </label>

      <!-- Search options -->
      <nav
        class="md-search__options"
        aria-label="{{ lang.t('search') }}"
      >

        <!-- Button to share search -->
        {% if "search.share" in features %}
          <a
            href="javascript:void(0)"
            class="md-search__icon md-icon"
            title="{{ lang.t('search.share') }}"
            aria-label="{{ lang.t('search.share') }}"
            data-clipboard
            data-clipboard-text=""
            data-md-component="search-share"
            tabindex="-1"
          >
            {% include ".icons/material/share-variant.svg" %}
          </a>
        {% endif %}

        <!-- Button to reset search -->
        <button
          type="reset"
          class="md-search__icon md-icon"
          title="{{ lang.t('search.reset') }}"
          aria-label="{{ lang.t('search.reset') }}"
          tabindex="-1"
        >
          {% include ".icons/material/close.svg" %}
        </button>
      </nav>

      <!-- Search suggestions -->
      {% if "search.suggest" in features %}
        <div
          class="md-search__suggest"
          data-md-component="search-suggest"
        ></div>
      {% endif %}
    </form>
    <div class="md-search__output">
      <div class="md-search__scrollwrap" data-md-scrollfix>

        <!-- Search results -->
        <div class="md-search-result" data-md-component="search-result">
          <div class="md-search-result__meta">
            {{ lang.t("search.result.initializer") }}
          </div>
          <ol class="md-search-result__list" role="presentation"></ol>
        </div>
      </div>
    </div>
  </div>
</div>
