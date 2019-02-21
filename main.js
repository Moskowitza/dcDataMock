const supermarketItems = crossfilter([
  {
    name: 'banana',
    category: 'fruit',
    country: 'Malta',
    outOfDateQuantity: 3,
    quantity: 12,
  },
  {
    name: 'apple',
    category: 'fruit',
    country: 'Spain',
    outOfDateQuantity: 1,
    quantity: 9,
  },
  {
    name: 'tomato',
    category: 'vegetable',
    country: 'Spain',
    outOfDateQuantity: 2,
    quantity: 25,
  },
]);
const dimensionCategory = supermarketItems.dimension(item => item.category);
const quantityByCategory = dimensionCategory
  .group()
  .reduceSum(item => item.quantity);
quantityByCategory.all();
