var benefits = getBenefits();

var chart1 = c3.generate({
    title: {
      text: 'Mental Health'
    },
    data: {
        json: benefits,
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
          text: "% Unmarried",
          position: "outer-middle"
        }
      },
      x: {
        type: 'category',
        label: {
          text: "Year",
          position: 'outer-center'
        }
      }
    },
    bindto: "#chart1"
});
