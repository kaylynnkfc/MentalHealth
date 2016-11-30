var benefits = getBenefits();

var chart1 = c3.generate({
    title: {
      text: 'Company Insurance Covers Mental Health Benefits'
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
