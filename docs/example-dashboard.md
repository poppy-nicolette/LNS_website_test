---
theme: dashboard
title: Example dashboard
toc: false
---

# LNS basic table 🫎

<!-- Load and transform the data -->

```js
console.log("Loading data...");

const LNS_data = FileAttachment("basic_table.json").json();
console.log(LNS_data);
console.log("Data done loaded")

```
<!-- Cards with big numbers -->

<div class="grid grid-cols-4">
    <div class="card">
      <h2>Is OA?</h2>
      <span class="big">${LNS_data.length}</span>
    </div>
  <div class="card">
    <h2>card 2 </h2>
    <span class="big">${LNS_data['is_oa'].length}</span>
  </div>
  <div class="card">
    <h2>card 3</h2>
    <span class="big"></span>
  </div>
  <div class="card">
    <h2>card 4</h2>
    <span class="big"></span>
  </div>
</div>
