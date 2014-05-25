$(document).ready(function() {
var options = {
title: {text: 'Wind Speed',},

chart: {
renderTo: 'wind_speed',
type: 'line', 
backgroundColor: 'transparent',},

xAxis: {tickInterval: 15,},

tooltip: {formatter: function() {return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y;}},

series: [],}
           
$.getJSON("QI01H04.php", function(json)  {
options.xAxis.categories = json[0]['data'];
options.series[0] = json[4];
chart = new Highcharts.Chart(options);
});
});
		