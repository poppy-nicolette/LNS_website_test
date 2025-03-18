---
theme: dashboard
title: Summary dashboard
toc: false
---

# LNS basic table 🫎
<!-- import libraries -->
```js
import * as L from "npm:leaflet";
```
<!-- Load and transform the data -->

```js
console.log("Loading data...");

const LNS_data = await FileAttachment("basic_table.json").json();
console.log(LNS_data);
console.log("Data done loaded")

```
<!-- import data for card 2 - experiment with data loader as a means to just use Python for data manipulation -->
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

<!-- Search table -->
<div>
    <h1 style="color:var(--theme-foreground-focus)";>A table of some basic data</h1>
    <span style="color:var(--theme-foreground-focus)";>Search for a specific title, year, is_oa, license, or version. Each term can be separated by a space and assumes an AND operator.
    </span>
    <p>See the documentation on search <a href="https://github.com/observablehq/inputs?tab=readme-ov-file#search">here.</a></p>
</div>

```js
const search = view(Inputs.search(LNS_data, {placeholder: "Search title, year, is_oa, license, or version"}));
```

<div class = "grid grid-cols-1">
    <div class="card">${resize((width) => Inputs.table(search,{width:{title:400},
                                                                rows:20,
                                                                columns: ["title",
                                                                            "publication_year",
                                                                            "is_oa",
                                                                            "license",
                                                                            "version",
                                                                            "doi"],
                                                                format: {"publication_year": d => d.toString()}
                                                                }))}</div>
</div>

<!--  Map of Nova Scotia see documentation here: https://observablehq.com/framework/lib/leaflet -->

<div class = "grid grid-cols-1">
    <h1 style="color:var(--theme-foreground-focus)";>A map</h1>
    <span>Map of Nova Scotia</span>
</div>


```js
const div = display(document.createElement("div"));
div.style = "height: 600px;";

const map = L.map(div)
  .setView([44.682, -63.744], 8);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
  .addTo(map);

L.marker([44.682, -63.744])
  .addTo(map)
  .bindPopup("A nice popup<br> indicating a point of interest.")
  .openPopup();

L.marker([45.100, -64.744])
  .addTo(map)
  .bindPopup("Location name<br> another point of interest.")
  .openPopup();

var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}
```
<p>More documentation on Leaflet can be found <a href="https://leafletjs.com/examples/quick-start/">here.</a>Map data from OpenStreetMap is copyrighted and is available under the <a href="https://openstreetmap.org/copyright">Open Database license.</a></p>
