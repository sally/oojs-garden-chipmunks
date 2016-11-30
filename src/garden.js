/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

var garden = {
  name: "Kula Botanical Garden",
  location: "Makawao",
  flowers: [],
  addFlower: function(flower){
    this.flowers.push(flower);
  },
  plant: function(flowers_array){
    this.flowers = this.flowers.concat(flowers_array);
  },
  remove: function(flower){
    var indexToDelete = this.flowers.indexOf(flower);
    this.flowers.splice(indexToDelete, 1);
  },
  flowersByColor: function(color){
    arrayToReturn = []

    // easy way: iterate through flowers array and push flower into arrayToReturn if its color matches input color
    // return arrayToReturn

    // harder way: figure out how to use Array.prototype.filter();
  }
}
