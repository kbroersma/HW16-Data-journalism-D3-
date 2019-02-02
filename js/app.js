// @TODO: YOUR CODE HERE!

// Section 1: Pre-Data Setup
// Grab the width of the containing box
var width = parseInt(d3.select("#scatter").style("width"));
var height = width - width / 3.9;
var margin = 15;

var textlabel = 110;

var padBottom = 30;
var padLeft = 30;

// Create the actual canvas for the graph
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");

// Set the radius for each dot that will appear in the graph.
var Cradius;
function crGet() {
    Cradius = 5;
  if (width <= 600) {
  }
  else {
    Cradius = 10;
  }
}
crGet();

// The Labels for our Axes
svg.append("g").attr("class", "xText");

var xText = d3.select(".xText");

//change the location of the label group
function labeltextrefreshX() {
  xText.attr(
    "transform",
    "translate(" +
      ((width - textlabel) / 2 + textlabel) +
      ", " +
      (height - margin - padBottom) +
      ")"
  );
}
labeltextrefreshX();

// Use xText to append three text SVG files.
//1-poverty
xText
  .append("text")
  .attr("y", -26)
  .attr("data-name", "poverty")
  .attr("data-axis", "x")
  .attr("class", "aText active x")
  .text("In Poverty (%)");
// 2. Age
xText
  .append("text")
  .attr("y", 0)
  .attr("data-name", "age")
  .attr("data-axis", "x")
  .attr("class", "aText inactive x")
  .text("Age (Median)");
// 3. Income
xText
  .append("text")
  .attr("y", 26)
  .attr("data-name", "income")
  .attr("data-axis", "x")
  .attr("class", "aText inactive x")
  .text("Household Income (Median)");

// B) Left Axis
var leftTextX = margin + padLeft;
var leftTextY = (height + textlabel) / 2 - textlabel;

// second label group for the left X axis. 
svg.append("g").attr("class", "yText");

var yText = d3.select(".yText");

// Label group's transform attr
function YlabeltextRefresh() {
  yText.attr(
    "transform",
    "translate(" + leftTextX + ", " + leftTextY + ")rotate(-90)"
  );
}
YlabeltextRefresh();

// Now we append the text.
// 1. obesity 
yText
  .append("text")
  .attr("y", -26)
  .attr("data-name", "obesity")
  .attr("data-axis", "y")
  .attr("class", "aText active y")
  .text("Obese (%)");

// 2. YES Smokes
yText
  .append("text")
  .attr("x", 0)
  .attr("data-name", "smokes")
  .attr("data-axis", "y")
  .attr("class", "aText inactive y")
  .text("Smokes (%)");

// 3.NO Healthcare
yText
  .append("text")
  .attr("y", 26)
  .attr("data-name", "healthcare")
  .attr("data-axis", "y")
  .attr("class", "aText inactive y")
  .text("Lacks Healthcare (%)");


d3.csv("assets/data/data.csv").then(function(data) {
  visualize(data);
});

