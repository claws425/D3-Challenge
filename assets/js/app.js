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

  // use yText to append healthcare to the SVG files

    yText
    .append("text")
    .attr("y", 26)
    .attr("data-name", "healthcare")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("Lacks Healthcare (%)");

//  import the .csv file with the d3's .csv import method
d3.csv("assets/data/data.csv").then(function(data) {
  // visualize the data
    visualize(data);
});

// create visualization function
  function visualize(theData) {
    // designate the defaults with the same names as headings in csv
    var curX = "poverty";
    var curY = "healthcare";
  
    // save empty variables for min and max values of x and y
    var xMin;
    var xMax;
    var yMin;
    var yMax;

    // change the min and max for x
    function xMinMax() {
      // min will grab the smallest number from the selected column
      xMin = d3.min(theData, function(d) {
        return parseFloat(d[curX]) * 0.90;
      });

      // max will grab the smallest number from the selected column
      xMax = d3.max(theData, function(d) {
        return parseFloat(d[curX]) * 1.10;
      });
    }

    // change the min and max for y
    function yMinMax() {
      // min will grab the smallest number from the selected column
      yMin = d3.min(theData, function(d) {
        return parseFloat(d[curY]) * 0.90;
      });

      // max will grab the smallest number from the selected column
      yMax = d3.max(theData, function(d) {
        return parseFloat(d[curY]) * 1.10;
      });
    }   

    // instantiate the scatter plot
    // first grab the min and max values of x and y
    xMinMax();
    yMinMax();

    // tell d3 to place the circles
    var xScale = d3
      .scaleLinear()
      .domain([xMin, xMax])
      .range([margin + labelArea, width - margin]);
    var yScale = d3
      .scaleLinear()
      .domain([yMin, yMax])
      // height is inversed due to how d3 calculates y-axis placement
      .range([height - margin - labelArea, margin]);

    // pass the scales in the axis methods to create the axes.
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    // append the axes in group elements
    svg
      .append("g")
      .call(xAxis)
      .attr("class", "xAxis")
      .attr("transform", "translate(0," + (height - margin - labelArea) + ")");
    svg
      .append("g")
      .call(yAxis)
      .attr("class", "yAxis")
      .attr("transform", "translate(" + (margin + labelArea) + ", 0)");

      // a grouping for the dots and their labels
    var theCircles = svg.selectAll("g theCircles").data(theData).enter();

    // append the circles for each row of data
    theCircles
      .append("circle")
      .attr("cx", function(d) {
        return xScale(d[curX]);
      })
      .attr("cy", function(d) {
        return yScale(d[curY]);
      })
      .attr("r", circRadius)
      .attr("class", function(d) {
        return "stateCircle " + d.abbr;
      })








  }























