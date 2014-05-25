$(document).ready(function() {
var options = {
title: {text: 'Wind Direction Frequency'},

chart: {
renderTo: 'wind_direction_count',
type: 'column', 
polar: true,
backgroundColor: 'transparent',},

xAxis: {tickInterval: 1},

tooltip: {formatter: function() {return '<b>'+ this.series.name +'</b><br/>'+ this.x +': '+ this.y;}},

series: [],}
$.getJSON("QI01H04.php", function(json)  {
options.xAxis.categories = json[9]['data'];
options.series[0] = json[8];
chart = new Highcharts.Chart(options);
});
});