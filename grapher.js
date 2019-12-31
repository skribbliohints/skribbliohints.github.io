

function getGraph(data, horizontal_axis_label, vertical_axis_label) {
  // data should be an array of [x,y] pairs (each pair should be an array)
  const container = document.createElement('div');
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  
  Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
      min: 0
    }
  });
  Chart.defaults.global.legend.labels.usePointStyle = true;
  
  const formatted_data = [];
  for(const [x, y] of data) {
    formatted_data.push({x: Number(x), y: Number(y)});
  }
  const test_data = {
    datasets: [
      {
        label: "Data",
        pointRadius: 5,
        pointBorderColor: 'black',
        pointBackgroundColor: 'rgb(20,20,20,0.8)',
        strokeColor: 'black',
        data: formatted_data
      }
    ]
  };
  
  const chart = new Chart(ctx, {
    type: 'scatter',
    data: test_data,
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: horizontal_axis_label
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: vertical_axis_label
          }
        }]
      }
    }
  });
  return container;
}
