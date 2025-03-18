---
theme: dashboard
title: Project Documentation.
toc: false
---

# Project Explanation
This project is a Mitacs sponsored project with Literacy Nova Scotia. The goal of this project is to create a web application that will help decision-makers within Literacy Nova Scotia and its partner organizations. This web application will consist of dashboards, maps, and exploratory data analysis tools that should aid in creating grant applications, reports, or other documents.

# Technical documentation.
This project is built using <a href="https://observablehq.com/framework/what-is-framework">Observable Framework.</a> It is a platform that allows for the creation of interactive data visualizations and dashboards. The project is built using JavaScript, Python, HTML, and CSS. The project is built using the following libraries:
<ul>
<li>Leaflet</li>
<li>Plotly</li>
<li>and a few others I'll add later...</li>
</ul>
<div class="grid grid-cols-1">
    <div class="card">
        <h2 style="color:var(--theme-foreground-focus)";>Structure of an Observable Framework site generator</h2>
        <p>See the documentation <a href="https://observablehq.com/framework/project-structure">here</a> on the structure of an Observable Framework site.<br><br>
            <code>.
            ├─ src                    # source root<br>
            │  ├─ .observablehq<br>
            │  │  ├─ cache            # data loader cache<br>
            │  │  └─ deploy.json      # deployment metadata<br>
            │  ├─ components<br>
            │  │  └─ dotmap.js        # shared JavaScript module<br>
            │  ├─ data<br>
            │  │  └─ quakes.csv.ts    # data loader<br>
            │  ├─ index.md            # home page<br>
            │  └─ quakes.md           # page<br>
            ├─ .gitignore<br>
            ├─ README.md<br>
            ├─ observablehq.config.js # app configuration<br>
            ├─ package.json           # node package dependencies<br>
            └─ yarn.lock              # node package lockfile<br></code></p>
    </div>
</div>
<div class="grid grid-cols-2">
    <div class="card">
      <h2 style="color:var(--theme-foreground-focus)";>Data loaders</h2>
      <p>Data loaders process the data to make it easier to load into each md file. Data loaders can be written in many languages
          but I'll likely stick with Python for simplicity. Data loaders can also be scheduled with cron jobs on the deployment server
          so that data which needs to be refreshed periodically can do so. Otherwise, the data will likely be static with occassional refresh.<br>
              See <a href="https://observablehq.com/framework/data-loaders"> here</a> for more info on data loaders.<br>
                  A data loader can be called like this in the Markdown file:<br>
              <code>const card_2_data = await FileAttachment("card_2.csv").csv({typed: true});</code><br>
                  Think of the data loaders as scripts that create data snapshots.</p>
    </div>
  <div class="card">
    <h2 style="color:var(--theme-foreground-focus)";>Markdown files</h2>
    <p>Markdown files are layout pages for the website. I use a combination of Javascript code blocks, HTML, and Markdown
        for each page. You can find more info on the Markdown files <a href="https://observablehq.com/framework/markdown">here</a> for Observable.</p>
  </div>
</div>

<div class="grid grid-cols-2">
  <div class="card">
    <h2 style="color:var(--theme-foreground-focus)";>Components</h2>
    <p>This includes js files that create some of the visuals, such as the timeline on Point in time Report.<br>
        If you create Python modules, they can be kept here. You can read more about components</p>
  </div>

  <div class="card">
    <h2 style="color:var(--theme-foreground-focus)";>Javascript</h2>
    <p>Information on Javascript here. Javascript is used in the Markdown pages as code blocks or inline scripts. It runs on load and also re-runs reactively as variables change. See the slider on the home page as an example. <br>
        See <a href="https://observablehq.com/framework/javascript">here</a> for more info on Javascript in Observable.</p>
  </div>
</div>
