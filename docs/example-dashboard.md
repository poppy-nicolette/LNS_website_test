---
theme: dashboard
title: Example dashboard
toc: false
---

# LNS basic table 🫎

<!-- Load and transform the data -->

```js
console.log("Loading data...");

const LNS_data = await FileAttachment("basic_table.json").json();
console.log(LNS_data);
console.log("Data done loaded")

```
<!-- Cards with big numbers -->
```js
console.log("Loading data for card 2...");
const card_2_data = await FileAttachment("card_2.csv").csv({typed: true});
console.log(card_2_data);
console.log(card_2_data[0].count);
````
<!-- Cards with big numbers -->


<div class="grid grid-cols-4">
    <div class="card">
      <h2>total records with DOI</h2>
      <span class="big">${LNS_data.length}</span>
    </div>
  <div class="card">
    <h2>total number that are OA</h2>
    <span class="big">${card_2_data[0].count}</span>
  </div>
  <div class="card">
    <h2>total number of scoping review resources</h2>
    <span class="big"></span>
  </div>
  <div class="card">
    <h2>total number of...</h2>
    <span class="big"></span>
  </div>
</div>
<div>
        <!-- table_1 for the entire dataset -->
        <h1 style="color:var(--theme-foreground-focus)";>A table of some basic data</h1>
        <div class = "grid grid-cols-1">
            <div class="card">${resize((width) => Inputs.table(LNS_data))}</div>
        </div>
</div>
