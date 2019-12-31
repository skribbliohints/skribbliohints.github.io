

function getGraph(data, horizontal_axis_label, vertical_axis_label) {
  // data should be an array of arrays.  Each subarray should be [x,y,label].  label is optional.
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
  for(const [x, y, label] of data) {
    formatted_data.push({x: Number(x), y: Number(y), label});
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
      },
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label: function(tooltipItems, data) {
            return "("
              + String(tooltipItems.xLabel) + ", "
              + String(tooltipItems.yLabel) + ")"
              + (formatted_data[tooltipItems.index] && formatted_data[tooltipItems.index].label
                ? " " + formatted_data[tooltipItems.index].label
                : ''
              );
          }
        }
      }
    }
  });
  return container;
}
