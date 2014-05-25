
    Highcharts.setOptions({
       colors: ["#BF0404", "#1B4F71", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee",
          "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
       chart: {
          backgroundColor: {
			  backgroundColor: 'transparent',
			  
          },
          borderWidth: 0,
          borderRadius: 15,
          plotBackgroundColor: null,
          plotShadow: false,
          plotBorderWidth: 0
       },
       title: {
		   text: 'Barometer',
          style: {
             color: '#333',
             font: '16px Monda, sans-serif'
          }
       },
       subtitle: {
          style: {
             color: '#DDD',
             font: '12px Monda, sans-serif'
          }
       },
       xAxis: {
          gridLineWidth: 0,
          lineColor: '#666',
		  lineWidth: 1,
          tickColor: '#666',
          labels: {
             style: {
                color: '#333',
                font: '12px Monda, sans-serif',
				formatter: function() {
                return Highcharts.dateFormat('%H:%M', this.value); }
             }
          },
          title: {
             style: {
                color: '#AAA',
                font: '12px Monda, sans-serif'
             }            
          }
       },
       yAxis: {
          alternateGridColor: null,
          minorTickInterval: null,
          gridLineColor: 'rgba(255, 255, 255, .1)',
          lineWidth: 0,
          tickWidth: 0,
          labels: {
             style: {
                color: '#333',
                font: '12px Monda, sans-serif'
             }
          },
          title: {
             style: {
                color: '#AAA',
                font: '12px Monda, sans-serif'
             }            
          }
       },
       legend: {
       enabled: false
       },
       credits: {
          style: {
             right: '50px'
          }
       },
       labels: {
          style: {
             color: '#666'
          }
       },
       tooltip: {
          backgroundColor: {
             linearGradient: [0, 0, 0, 0],
             stops: [
                [0, 'rgba(96, 96, 96, .8)'],
                [1, 'rgba(16, 16, 16, .8)']
             ]
          },
          borderWidth: 0,
          style: {
             color: '#FFF'
          }
       },
       
       
       plotOptions: {
		series: {
        animation: false
    },
          line: {
             dataLabels: {
                color: '#CCC'
             },
             marker: {
                lineColor: '#333',
				enabled: false
             }
          },
          spline: {
             marker: {
                lineColor: '#fff'
             }
          },
          scatter: {
             marker: {
                lineColor: '#fff'
             }
          }
       },
       
       toolbar: {
          itemStyle: {
             color: '#CCC'
          }
       }
    });
		