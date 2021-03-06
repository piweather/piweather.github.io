$(document).ready(function() {
var options = {
title: {text: 'Wind Direction Over Time',},

chart: {
renderTo: 'wind_direction_time',
type: 'column', 
backgroundColor: 'transparent',},

xAxis: {tickInterval: 480,},

tooltip: {formatter: function() {return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y;}},

series: [],}
$.getJSON("QI15D07.php", function(json)  {
options.xAxis.categories = json[0]['data'];
options.series[0] = json[7];
chart = new Highcharts.Chart(options);
});
});