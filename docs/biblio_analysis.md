---
theme: dashboard
title: Bibliometric Analysis
toc: false
---
<!-- imports -->
```js
import * as d3 from "npm:d3";
```

# Bibliometric Analysis
This page contains a bibliometric analysis of the scoping review literature. Below is just placeholder data.
```js
const industryInput = Inputs.select(industries.map((d) => d.industry), {unique: true, sort: true, label: "Select:"});
const industry = Generators.input(industryInput);
```
<!--  data loader -->



<div class="grid grid-cols-2">
  <div class="card" style="max-width:100%;"><h1>A</h1>1 × 1</div>
  <div class="card grid-rowspan-2" style="max-width:100%;">
  ${industryInput}
    ${resize((width) => Plot.plot({
      width,
      y: {grid: true, label: "Unemployed (thousands)"},
      marks: [
        Plot.areaY(industries.filter((d) => d.industry === industry), {x: "date", y: "unemployed", fill: "var(--theme-foreground-focus)", curve: "step"}),
        Plot.lineY(industries.filter((d) => d.industry === industry), {x: "date", y: "unemployed", curve: "step"}),
        Plot.ruleY([0])
      ]
    }))}
  </div>
  <div class="card" style="max-width:100%; "><h1>C</h1>1 × 1</div>
</div>
