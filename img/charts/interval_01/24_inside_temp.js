$(document).ready(function() {
var options = {
title: {text: 'Inside Temperature',},

chart: {
renderTo: 'inside_temp',
type: 'line', 
backgroundColor: 'transparent',},

xAxis: {tickInterval: 120,},

tooltip: {formatter: function() {return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y;}},

series: [],}
           
$.getJSON("QI01H24.php", function(json)  {
options.xAxis.categories = json[0]['data'];
options.series[0] = json[2];
chart = new Highcharts.Chart(options);
});
});