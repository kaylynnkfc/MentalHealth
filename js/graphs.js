//data[0] = benefits, data[1] = leave, data[2] = productivity
var parsedData = getData();

var benefits = c3.generate({
    title: {
      text: 'Company Insurance Covers Mental Health Benefits'
    },
    data: {
        json: parsedData[0],
        type: 'bar',
        keys: {
          x: 'x',
          value: ['total']
        }
    },
    legend: {
      position: 'right',
      show: false
    },
    color: {
      pattern: ['rgb(63, 188, 210)']
    },
    axis: {
      y: {
        label: {
          text: "Count",
          position: "outer-middle"
        }
      },
      x: {
        type: 'category'
      }
    },
    bindto: "#benefits"
});


var leave = c3.generate({
    title: {
      text: 'How Easily Employees Can Take Leave for Mental Illness'
    },
    data: {
        json: parsedData[1],
        type: 'bar',
        keys: {
          x: 'x',
          value: ['total']
        }
    },
    legend: {
      position: 'right',
      show: false
    },
    color: {
      pattern: ['rgb(166, 44, 161)']
    },
    axis: {
      y: {
        label: {
          text: "Count",
          position: "outer-middle"
        }
      },
      x: {
        type: 'category'
      }
    },
    bindto: "#leave"
});


var productivity = c3.generate({
    title: {
      text: 'Does Mental Illness Affect Your Productivity'
    },
    data: {
        json: parsedData[2],
        type: 'bar',
        keys: {
          x: 'x',
          value: ['total']
        }
    },
    legend: {
      position: 'right',
      show: false
    },
    color: {
      pattern: ['rgb(215, 55, 13)']
    },
    axis: {
      y: {
        label: {
          text: "Count",
          position: "outer-middle"
        }
      },
      x: {
        type: 'category'
      }
    },
    bindto: "#productivity"
});
