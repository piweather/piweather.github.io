$(document).ready(function() {
var options = {
title: {text: 'Inside Humidity',},

chart: {
renderTo: 'humidity',
type: 'line', 
backgroundColor: 'transparent',},

xAxis: {tickInterval: 60,},

tooltip: {formatter: function() {return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y;}},

series: [],}
           
$.getJSON("QI01H08.php", function(json)  {
options.xAxis.categories = json[0]['data'];
options.series[0] = json[6];
chart = new Highcharts.Chart(options);
});
});