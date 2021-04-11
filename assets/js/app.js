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

  // give xText a transform property to place it at the bottom of the chart
    xText.attr(
      "transform",
      "translate(" +
        ((width - labelArea) / 2 + labelArea) + 
        ", " +
        (height - margin - tPadBot) +
        ")"
    );

// use xText to append Poverty to the SVG files

    xText
    .append("text")
    .attr("y", -26)
    .attr("data-name", "poverty")
    .attr("data-axis", "x")
    .attr("class", "aText active x")
    .text("In Poverty (%)");

// Specify the variables for the left axis
var leftTextX = margin + tPadLeft;
var leftTextY = (height + labelArea) / 2 - labelArea;

// add the left axis label group
svg.append("g").attr("class", "yText");

// set variable to reduce coding
var yText = d3.select(".yText");

// nest the group's transform attr in a function
      yText.attr(
        "transform",
        "translate(" + leftTextX + ", " + leftTextY + ")rotate(-90)"
      );


















