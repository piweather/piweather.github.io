$(document).ready(function() {
var options = {
title: {text: 'Wind Direction Frequency'},

chart: {
renderTo: 'wind_direction_count',
type: 'column', 
polar: true,
backgroundColor: 'transparent',},

xAxis: {tickInterval: 1,

categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']},


tooltip: {formatter: function() {return '<b>'+ this.series.name +'</b><br/>'+ this.x +': '+ this.y;}},

series: [],}
$.getJSON("QI05D01.php", function(json)  {
options.xAxis.categories = json[8]['data'];
options.series[0] = json[9];
chart = new Highcharts.Chart(options);
});
});