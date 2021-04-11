// @TODO: YOUR CODE HERE!
// Grab the width of the containing box
var width = parseInt(d3.select("#scatter").style("width"));

// Designate the height of the graph
var height = width - width / 4;

// Set margins all around
 var margin = 20;

 // set space for placing the words
 var labelArea = 110;

 // padding for the text on the axes
 var tPadBot = 40;
 var tPadLeft = 40;

 // Create the canvas for the graph
 var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");

  // Set the radius for each dot using a function
  var circRadius;
  function crGet() {
    if (width <= 530) {
      circRadius = 5;
    }
    else{
      circRadius = 10;
    }
  }
  crGet();

  // Add the labels
  // create a group element to next the bottom axes labels
  svg.append("g").attr("class", "xText");

  // select the group without extra coding
  var xText = d3.select(".xText");

  










