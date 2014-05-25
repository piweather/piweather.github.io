$(document).ready(function() {
var options = {
title: {text: 'Wind Speed',},

chart: {
renderTo: 'wind_speed',
type: 'line', 
backgroundColor: 'transparent',},

xAxis: {tickInterval: 5,},

tooltip: {formatter: function() {return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y;}},

series: [],}
           
$.getJSON("query_30.php", function(json)  {
options.xAxis.categories = json[0]['data'];
options.series[0] = json[7];
chart = new Highcharts.Chart(options);
});
});
		