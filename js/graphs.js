//data[0] = benefits, data[1] = leave
var data = getData();

var chart1 = c3.generate({
    title: {
      text: 'Company Insurance Covers Mental Health Benefits'
    },
    data: {
        json: data[1],
        type: 'bar',
        keys: {
          x: 'x',
          value: ['total']
        }
    },
    legend: {
      position: 'right'
    },
    axis: {
      y: {
        label: {
          text: "Count",
          position: "outer-middle"
        }
      },
      x: {
        type: 'category',
        label: {
          text: "Category",
          position: 'outer-center'
        }
      }
    },
    bindto: "#chart1"
});
