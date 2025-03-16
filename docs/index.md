---
toc: false
---

<!-- Load the data -->

<div class="hero">
  <h1>Literacy NS</h1>
  <h2>This is prototype 1. Edit&nbsp;<code style="font-size: 90%;">src/index.md</code> to change this page.</h2>
  <a href="https://observablehq.com/framework/getting-started">Observable documentation can be found here.<span style="display: inline-block; margin-left: 0.25rem;"></span></a>
</div>
<div><p>Below are a list of design imperatives or goals we hope to achieve with this website.</p></div>
<div class="grid grid-cols-3" style="grid-auto-rows: 125px;">
  <div class="card">
    <h3 style="color:var(--theme-foreground-focus)";>Accessibility</h3>
    <p>Ensure that the website is accessible to all users, including those with disabilities.</p>
  </div>
  <div class="card">
    <h3 style="color:var(--theme-foreground-focus)";>Usability</h3>
    <p>Ensure that the website is easy to use and navigate for executive level users.</p>
  </div>
  <div class="card">
    <h3 style="color:var(--theme-foreground-focus)";>Performance</h3>
    <p>Ensure that the website is fast, responsive, and low maintenance.</p>
  </div>
  <div class="card">
    <h3 style="color:var(--theme-foreground-focus)";>Access</h3>
    <p>The website should provide access to the survey reports and documents</p>
  </div>
  <div class="card">
        <h3 style="color:var(--theme-foreground-focus)";>Summarization</h3>
        <p>The website should provide summarizations by extracting important information from the works in the survey.</p>
  </div>
  <div class="card">
        <h3 style="color:var(--theme-foreground-focus)";>Query</h3>
        <p>The website should provide the ability to query for specific information.</p>
  </div>
<div class="card">
        <h3 style="color:var(--theme-foreground-focus)";>Quick reference</h3>
        <p>The website should provide a summarization of search results as quick-access information.</p>
</div>
  <div class="card">
    <h3 style="color:var(--theme-foreground-focus)";>Scalability</h3>
    <p>Ensure that the website can handle increased traffic and usage. </p>
  </div>
  <div class="card">
    <h3 style="color:var(--theme-foreground-focus)";>Flexibility</h3>
    <p>Ensure that the website can be easily updated and modified by future maintainers.</p>
  </div>
</div>
---
<!-- table_1 for the entire dataset -->
<div class = "grid grid-cols-1">
    <div class="card">${resize((width) => Inputs.table(table_1))}</div>
</div>

## Next steps


<div class="grid grid-cols-4">
  <div class="card">
    Chart your own data using <a href="https://observablehq.com/framework/lib/plot"><code>Plot</code></a> and <a href="https://observablehq.com/framework/files"><code>FileAttachment</code></a>. Make it responsive using <a href="https://observablehq.com/framework/javascript#resize(render)"><code>resize</code></a>.
  </div>
  <div class="card">
    Create a <a href="https://observablehq.com/framework/project-structure">new page</a> by adding a Markdown file (<code>whatever.md</code>) to the <code>src</code> folder.
  </div>
  <div class="card">
    Add a drop-down menu using <a href="https://observablehq.com/framework/inputs/select"><code>Inputs.select</code></a> and use it to filter the data shown in a chart.
  </div>
  <div class="card">
    Write a <a href="https://observablehq.com/framework/loaders">data loader</a> that queries a local database or API, generating a data snapshot on build.
  </div>
  <div class="card">
    Import a <a href="https://observablehq.com/framework/imports">recommended library</a> from npm, such as <a href="https://observablehq.com/framework/lib/leaflet">Leaflet</a>, <a href="https://observablehq.com/framework/lib/dot">GraphViz</a>, <a href="https://observablehq.com/framework/lib/tex">TeX</a>, or <a href="https://observablehq.com/framework/lib/duckdb">DuckDB</a>.
  </div>
  <div class="card">
    Ask for help, or share your work or ideas, on our <a href="https://github.com/observablehq/framework/discussions">GitHub discussions</a>.
  </div>
  <div class="card">
    Visit <a href="https://github.com/observablehq/framework">Framework on GitHub</a> and give us a star. Or file an issue if you’ve found a bug!
  </div>
</div>

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 1rem 0;
  padding: 1rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

.hero h3 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-focus);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>
