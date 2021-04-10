// @TODO: YOUR CODE HERE!
var width = parseInt(d3.select("#scatter").style("width"));

var height = width - width / 4;

var margin = 15;

var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");

  var circRadius;
function crGet() {
  if (width <= 530) {
    circRadius = 5;
  }
  else {
    circRadius = 10;
  }
}
crGet();