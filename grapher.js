function getAxesConfigurationForChartJS(axis_key, axis_label, data) {
  // axis_key: either 'x' or 'y'
  // axis_label: the string to display for the axis
  // data: array of objects of the form {x, y, label} where label is optional
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  for(const element of data) {
    const value = element[axis_key];
    sum += value; // value better be a number
    if(value < min) { min = value; }
    if(value > max) { max = value; }
  }
  const start_from_zero = Math.abs((max - min) / (sum / data.length)) > 0.01;
  const configuration_at_zero = {
    scaleLabel: {
    display: true,
      labelString: axis_label
    }
  };
  if(start_from_zero) {
    configuration_at_zero.ticks = {
      min: 0
    };
  }
  return [ configuration_at_zero ];
}
  

function getGraph(data, horizontal_axis_label, vertical_axis_label) {
  // data should be an array of arrays.  Each subarray should be [x,y,label].  label is optional.
  const container = document.createElement('div');
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

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
        xAxes: getAxesConfigurationForChartJS('x', horizontal_axis_label, formatted_data),
        yAxes: getAxesConfigurationForChartJS('y', vertical_axis_label, formatted_data)
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
