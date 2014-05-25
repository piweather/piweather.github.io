$(document).ready(function() {
var options = {
title: {text: 'Outside Temperature',},

chart: {
renderTo: 'outside_temp',
type: 'line', 
backgroundColor: 'transparent',},

xAxis: {tickInterval: 5,},

tooltip: {formatter: function() {return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y;}},

series: [],}
           
$.getJSON("query_60.php", function(json)  {
options.xAxis.categories = json[0]['data'];
options.series[0] = json[1];
options.series[1] = json[2];
chart = new Highcharts.Chart(options);
});
});
		