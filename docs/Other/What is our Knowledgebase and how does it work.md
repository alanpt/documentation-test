---
title: What is our Knowledgebase and how does it work?
description: 
tags:
   - Background
---

**With so much information spread across different platforms, it's easy to get lost or waste time searching for what you need. Our knowledgebase solves this problem by bringing everything together in one place and with a super quick search.

At the moment it is focused on articles needed for those supporting our clients.  In the end it will also host information for other areas of Evergiving.**

## Using the Docs-as-Code approach

To make our knowledgebase work, we use an approach called [docs-as-code](https://docs-as-co.de/). This approach treats documentation like code, this way we can easily collaborate on our documentation, track changes, and ensure that everything is up to date.

## Organizing our documentation with the Diátaxis Framework

The [Diátaxis Framework](https://diataxis.fr/) is an important part of our knowledgebase. This framework breaks down documentation into smaller, more manageable pieces, making it easier to create and maintain. With Diátaxis, we can create a consistent structure for our documentation, making it easier for our team to find what they need. Each article is either a '*how-to*', '*tutorial*', '*reference*' or '*background/explanation*'. 

## Building our Knowledgebase with Material for Mkdocs

Our knowledgebase is built using a platform called [Material for Mkdocs](https://squidfunk.github.io/mkdocs-material/). This platform works with markdown and yaml, making it simple and easy to use. When a markdown article is added or updated a GitHub actions tells Mkdocs to builds a new HTML/CSS/JS static site in Github Pages. This allows the site to be super fast.

## Using Markdown to format our articles

Markdown is the backbone of our documentation. It's a simple markup language that allows us to format text, add links, and create tables easily. Markdown is also easily readable in its raw form, making it simple to collaborate on and review. And if we choose to move away from Mkdocs our documentation can move with us.
Material for Mkdocs also comes with [extra formatting and styles](https://squidfunk.github.io/mkdocs-material/reference/) to enhance the articles. :smile:

## Wiki editing and folder structure

We use plugins that give our knowledgebase wiki-like linking abilities (also called Roamlinks). This makes it easy to move md pages and images around without breaking links. Just put two square brackets around a link name and it will find the reference when it builds.
![[Pasted image 20230315113917.png]]
The menu structure is based on a folder structure to keep our documentation automatically organized.

## Managing our documentation with GitHub

Because it is hosted on GitHub, all of us can easily collaborate on and update the documentation. We can track changes, revert to previous versions, and manage different branches. for those who will be doing a lot of editing, a tool like [Obsidian](https://obsidian.md/) is suggested as it's an easier environment to work with folders and images.

## Next up - creating an external-facing support site

After the bulk of the articles are integrated here. We will use a Github Action to duplicate public-audience-appropriate articles to an Evergiving support website. This allows us to have only one source of truth, we can ensure that everything on the external-facing site is accurate and up to date. This will be checked by editors before going live.

That's a brief overview of how our knowledgebase works. If you have any questions or would like to learn more about our knowledgebase, please contact Alan.