$(document).ready(function() {
var options = {
title: {text: 'Rainfall',},

chart: {
renderTo: 'rainfall',
type: 'line', 
backgroundColor: 'transparent',},

xAxis: {tickInterval: 5,},

tooltip: {formatter: function() {return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y;}},

series: [],}
           
$.getJSON("QI01H01.php", function(json)  {
options.xAxis.categories = json[0]['data'];
options.series[0] = json[5];
chart = new Highcharts.Chart(options);
});
});
		