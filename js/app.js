import * as d3 from "d3";
import * as dc from "dc";
import crossfilter from "crossfilter2";

d3.select("p").text("D3 makes the World");

const supermarketItems = crossfilter([
  {
    name: "banana",
    category: "fruit",
    country: "Malta",
    outOfDateQuantity: 3,
    quantity: 12,
  },
  {
    name: "apple",
    category: "fruit",
    country: "Spain",
    outOfDateQuantity: 1,
    quantity: 9,
  },
  {
    name: "tomato",
    category: "vegetable",
    country: "Spain",
    outOfDateQuantity: 2,
    quantity: 25,
  },
]);
const dimensionCategory = supermarketItems.dimension(item => item.category);
const quantityByCategory = dimensionCategory
  .group()
  .reduceSum(item => item.quantity);
quantityByCategory.all();
console.table(quantityByCategory);
